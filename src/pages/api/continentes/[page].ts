import { NextApiRequest, NextApiResponse } from "next";

type Continent = {
  title: string;
  description: string;
  img: string;
  page: string;
}

export default async function Continent(req: NextApiRequest, resp: NextApiResponse) {
  if(req.method === "GET") {
    const { page } = req.query as { page: string }
    const url = 'http://localhost:3000/api/continentes'

    const response = await fetch(url)
    const continents = await response.json() as Continent[]

    const continent = continents.find((continent) => continent.page.includes(page))

    if(!continent) return resp.status(404).json({ error: 'Continent not found' })

    return resp.json(continent)
  }

  return resp.status(405).json({ message: 'Method not allowed' })
}