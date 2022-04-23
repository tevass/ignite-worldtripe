import { Box, Center, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { BaseContainer } from "../components/BaseContainer";
import { Slider } from "../components/Slider";
import { TravelType } from "../components/TravelType";

import * as styles from './home.styles'

export default function Home() {
  const hasAirplane = useBreakpointValue({
    base: false,
    md: false,
    lg: true
  })

  return (
    <Box as="section" pb="8">
      <Flex {...styles.Banner}>
        <Image src="/assets/banner.png" alt="Fundo de estrelas" {...styles.BannerBackground} />
        <BaseContainer zIndex={1} {...styles.BannerContainer}>
          <Box>
            <Heading {...styles.BannerHeading}>
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text {...styles.BannerText}>
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>

          { hasAirplane && (
            <Image src="/assets/airplane.svg" alt="Avião" {...styles.BannerAirplane} />
          ) }
        </BaseContainer>
      </Flex>

      <BaseContainer mt="16">
        <Flex {...styles.Travels}>
          <TravelType icon="/assets/cocktail.svg" iconAlt="Coquetel">
            vida noturna
          </TravelType>
          <TravelType icon="/assets/surf.svg" iconAlt="Prancha de Surf">
            praia
          </TravelType>
          <TravelType icon="/assets/building.svg" iconAlt="Construção Moderna">
            moderno
          </TravelType>
          <TravelType icon="/assets/museum.svg" iconAlt="Museu">
            clássico
        </TravelType>
          <TravelType icon="/assets/earth.svg" iconAlt="Terra">
            e mais...
          </TravelType>
        </Flex>
      </BaseContainer>

      <Center>
        <Divider bg="text.headings.gray" h={0.5} w={90} my="10" />
      </Center>

      <Slider />
    </Box>
  )
}
