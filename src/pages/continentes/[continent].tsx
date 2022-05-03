import { GetStaticPaths, GetStaticProps } from "next";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, HStack, Icon, SimpleGrid, Text, Tooltip } from "@chakra-ui/react";

import * as styles from './continent.styles'
import { BaseContainer } from "../../components/BaseContainer";
import { api } from "../../services/api";

type Continent = {
  title: string;
  description: string;
  img: string;
  geonameId: number;
  countriesCount: number;
  languagesCount: number;
}

interface ContinentProps {
  continent: Continent
}

export default function Continent({ continent }: ContinentProps) {
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
                  60
                </Heading>
                <Text {...styles.StatText}>
                  cidades 
                </Text>
              </Box>
            </HStack>
          </SimpleGrid>
        </Box>
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

  return {
    props: {
      continent
    }
  }
}