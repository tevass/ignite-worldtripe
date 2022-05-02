import { GetStaticPaths, GetStaticProps } from "next";
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Icon, SimpleGrid, Text, Tooltip, VStack } from "@chakra-ui/react";

import * as styles from './continent.styles'
import { BaseContainer } from "../../components/BaseContainer";
import { api } from "../../services/api";

type Continent = {
  title: string;
  description: string;
  img: string;
  geonameId: number;
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
            <Text {...styles.Text}>
              {continent.description}
            </Text>
          </SimpleGrid>
          <Flex>
            <VStack>
              <Box>
                <Heading as="span">
                  50
                </Heading>
                <Text>
                  países
                </Text>
              </Box>
              <Box>
                <Heading as="span">
                  60
                </Heading>
                <Text>
                  línguas
                </Text>
              </Box>
              <Box>
                <Heading as="span">
                  60
                </Heading>
                <Text>
                  línguas 
                  <Tooltip label="Mais 100 cidades">
                    <Icon as={InfoOutlineIcon} />
                  </Tooltip>
                </Text>
              </Box>
            </VStack>
          </Flex>
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