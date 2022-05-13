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

type City = {
  geonameId: string;
  name: string;
  countryName: string;
}

type Geoname = {
  totalResultsCount: number;
  geonames: City[]
}

export default async function Cities(req: NextApiRequest, resp: NextApiResponse) {
  if(req.method === "GET") {
    const { page } = req.query as { page: string }

    const response = await api.get<Continent[]>('/continentes')
    const continent = response.data.find((continent) => continent.page.includes(page))

    const { data: countries } = await geonames.get<Geoname>('', {
      params: { 'geonameId': continent.geonameId }
    })

    const { data: states } = await geonames.get<Geoname>('', {
      params: { 'geonameId': countries.geonames[8].geonameId }
    })

    const { data: geoname } = await geonames.get<Geoname>('', {
      params: { 'geonameId': states.geonames[0].geonameId }
    })

    return resp.json({
      totalResultsCount: geoname.totalResultsCount,
      totalCities: geoname.geonames
    })
  }

  return resp.status(405).json({ message: 'Method not allowed' })
}