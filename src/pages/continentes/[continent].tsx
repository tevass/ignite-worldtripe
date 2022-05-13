import { GetStaticPaths, GetStaticProps } from "next";
import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";

import * as styles from './continent.styles'
import { BaseContainer } from "../../components/BaseContainer";
import { api } from "../../services/api";
import { City } from "../../components/City";

type Continent = {
  title: string;
  description: string;
  img: string;
  geonameId: number;
  countriesCount: number;
  languagesCount: number;
}

type City = {
  geonameId: string;
  name: string;
  countryName: string;
}

type Cities = {
  totalResultsCount: number;
  totalCities: City[]
}

interface ContinentProps {
  continent: Continent
  cities: Cities;
}

export default function Continent({ continent, cities }: ContinentProps) {
  return (
    <Box>
      <Box {...styles.Header} bgImage={`url('${continent.img}')`}>
        <BaseContainer>
          <Heading as="h1" {...styles.Heading}>
            {continent.title}
          </Heading>
        </BaseContainer>
      </Box>

      <BaseContainer>
        <Box>
          <SimpleGrid {...styles.Info}>
            <Text {...styles.Text}>
              {continent.description}
            </Text>
            <HStack {...styles.Stats}>
              <Box {...styles.Stat}>
                <Heading as="span" {...styles.StatHeader}>
                  {continent.countriesCount}
                </Heading>
                <Text {...styles.StatText}>
                  países
                </Text>
              </Box>
              <Box {...styles.Stat}>
                <Heading as="span" {...styles.StatHeader}>
                  {continent.languagesCount}
                </Heading>
                <Text {...styles.StatText}>
                  línguas
                </Text>
              </Box>
              <Box {...styles.Stat}>
                <Heading as="span" {...styles.StatHeader}>
                  { cities.totalResultsCount }
                </Heading>
                <Text {...styles.StatText}>
                  cidades 
                </Text>
              </Box>
            </HStack>
          </SimpleGrid>
        </Box>
      </BaseContainer>

      <BaseContainer direction="column" mt="8">
        <Box mb="8">
          <Heading {...styles.CityHeading}>Cidades</Heading>
        </Box>
        <SimpleGrid {...styles.CitiesGrid}>
          { cities.totalCities.map(city => (
            <City
              key={city.geonameId}
              name={city.name}
              country={city.countryName}
            />
          )) }
        </SimpleGrid>
      </BaseContainer>

    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps<ContinentProps> = async ({ params }) => {
  const { continent: continentPage } = params as { continent: string }

  const resp = await api.get<Continent>(`/continentes/${continentPage}`)
  const continent = resp.data

  const { data } = await api.get<Cities>(`/continentes/${continentPage}/cities`)
  const cities = data

  return {
    props: {
      continent,
      cities
    }
  }
}