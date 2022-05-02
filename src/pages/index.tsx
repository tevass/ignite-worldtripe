import { Box, Center, Divider, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BaseContainer } from "../components/BaseContainer";
import { TravelType } from "../components/TravelType";

import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import * as styles from './home.styles'
import { GetStaticProps } from "next";
import { SlideItem } from "../components/SlideItem";
import { api } from "../services/api";

type Continent = {
  title: string;
  caption: string;
  img: string;
  page: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
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

      <Center>
        <Heading as="h2" {...styles.Heading}>
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Center>

      <BaseContainer px={0}>
        <Box {...styles.SliderBox}>
          <Swiper
            effect="fade"
            style={styles.SliderSwiper}
            modules={[Navigation, Pagination, EffectFade]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            { continents.map((continent, i) => (
              <SwiperSlide key={i}>
                <SlideItem
                  altImg={continent.title}
                  img={continent.img}
                  href={continent.page}
                  title={continent.title}
                  caption={continent.caption}
                />
              </SwiperSlide>
            )) }
        </Swiper>
        </Box>
      </BaseContainer>
    </Box>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.get<Continent[]>("/continentes")
  const continents = response.data

  return {
    props: {
      continents
    },
    revalidate: 60 * 1 * 24 // 1 dia
  }
}
