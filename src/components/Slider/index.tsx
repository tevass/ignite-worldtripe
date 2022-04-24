import { Box, Center, Heading } from "@chakra-ui/react";
import { BaseContainer } from "../BaseContainer";

import { Navigation, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "swiper/css/effect-fade";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import * as styles from './styles'
import { SlideItem } from "./SlideItem";

export function Slider() {
  const slides = [
    { title: 'América do Sul', caption: 'O continente da diversidade de pessoas, etnias e línguas', img: '/assets/south-america.png', page: '/continents/america-do-sul' },
    { title: "África", caption: 'O berço da humanidade', img: '/assets/africa.png', page: '/continents/africa' },
    { title: 'América do Norte', caption: "Onde o Tio Sam reina", img: '/assets/north-america.png', page: '/continents/america-do-norte' },
    { title: 'Europa', caption: 'O continente mais antigo.', img: '/assets/europe.png', page: '/continents/europa'  },
    { title: 'Oceania', caption: 'O continente mais isolado', img: '/assets/oceania.png', page: '/continents/oceania' }
  ]

  return (
    <>
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
            { slides.map((continent, i) => (
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
    </>
  )
}