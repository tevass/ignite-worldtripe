import { NextApiRequest, NextApiResponse } from "next";

import { api } from "../../../../services/api";
import { geonames } from "../../../../services/geonames";

type Continent = {
  title: string;
  description: string;
  img: string;
  page: string;
  geonameId: number;
}

type Geoname = {
  geonames: {
    geonameId: string;
    name: string;
    countryName: string;
  }[]
}

export default async function Cities(req: NextApiRequest, resp: NextApiResponse) {
  if(req.method === "GET") {
    const { page } = req.query as { page: string }

    const response = await api.get<Continent[]>('/continentes')
    const continent = response.data.find((continent) => continent.page.includes(page))

    const { data: countries } = await geonames.get<Geoname>('', {
      params: { 'geonameId': continent.geonameId  }
    })

    console.log(countries)

    const cities = await Promise.all(countries.geonames.map(async (country) => {
      const { data: states } = await geonames.get<Geoname>('', {
        params: { 'geonameId': country.geonameId }
      })

      return states
    }))

    console.log(JSON.stringify(cities, null, 2))

    return resp.json({ ok: 'ok' })
  }

  return resp.status(405).json({ message: 'Method not allowed' })
}