import { NextApiRequest, NextApiResponse } from "next";
import { api } from "../../../../services/api";
import { ibgeApi } from "../../../../services/ibge";

type Country = {
  localizacao: {
    regiao: {
      nome: string;
    };
    'sub-regiao': {
      nome: string;
    };
    'regiao-intermediaria': null | {
      nome: string;
    };
  };
  linguas: {
    nome: string;
  }[]
}

type Continent = {
  title: string;
  description: string;
  img: string;
  page: string;
  geonameId: number;
}

const verifyIsEqualsOrIncludes = (region: string, verify: string) => {
  const regionToLower = region.toLowerCase()
  const verifyToLower = verify.toLowerCase()

  return regionToLower === verifyToLower || regionToLower.includes(verifyToLower)
}

function getCountriesByContinent(countries: Country[], continentName: string) {
  const countriesFilter = countries.filter(({ localizacao }) => {
    const isRegion = verifyIsEqualsOrIncludes(localizacao.regiao.nome, continentName)
    const isSubRegion = verifyIsEqualsOrIncludes(localizacao["sub-regiao"].nome, continentName)
    const intermediateRegion = localizacao["regiao-intermediaria"] ? localizacao["regiao-intermediaria"].nome : ''
    const isIntermediateRegion = verifyIsEqualsOrIncludes(intermediateRegion, continentName)

    return isRegion || isSubRegion || isIntermediateRegion
  })

  return countriesFilter
}

function getContinentLanguages(countries: Country[]) {
  const languages = new Set()

  countries.forEach(({ linguas }) => {
    linguas.forEach(language => languages.add(language.nome))
  })

  return languages.values()  
}

export default async function Continent(req: NextApiRequest, resp: NextApiResponse) {
  if(req.method === "GET") {
    const { page } = req.query as { page: string }

    const response = await api.get<Continent[]>('/continentes')
    const continent = response.data.find((continent) => continent.page.includes(page))

    if(!continent) return resp.status(404).json({ error: 'Continent not found' })

    const countries = await ibgeApi.get<Country[]>('/')
    const continentCountries = getCountriesByContinent(countries.data, continent.title)
    const continentLanguages = getContinentLanguages(continentCountries)

    return resp.json(continent)
  }

  return resp.status(405).json({ message: 'Method not allowed' })
}