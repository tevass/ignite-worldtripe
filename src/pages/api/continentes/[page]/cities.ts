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
      params: { 'geonameId': continent.geonameId  }
    })

    const cities = await Promise.all(countries.geonames.map(async (country) => {
      const { data: states } = await geonames.get<Geoname>('', {
        params: { 'geonameId': country.geonameId }
      })

      return states
    }))

    const allCities = cities.reduce((allCities, city) => {
      return allCities = {
        totalResultsCount: allCities.totalResultsCount + city.totalResultsCount,
        totalCities: [...allCities.totalCities, city.geonames]
      }
    }, { totalResultsCount: 0, totalCities: [] })

    return resp.json(allCities)
  }

  return resp.status(405).json({ message: 'Method not allowed' })
}