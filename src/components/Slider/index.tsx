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
  return (
    <>
      <Center>
        <Heading as="h2" {...styles.Heading}>
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
      </Center>

      <BaseContainer>
        <Box {...styles.SliderBox}>
          <Swiper
            effect="fade"
            style={styles.SliderSwiper}
            modules={[Navigation, Pagination, EffectFade]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <SlideItem
                altImg="Europa"
                img="/assets/banner.png"
                href="/teste"
                title="Europa"
                caption="O continente mais antigo."
              />
            </SwiperSlide>
            <SwiperSlide>
              <SlideItem
                altImg="Europa"
                img="/assets/banner.png"
                href="/teste"
                title="Europa"
                caption="O continente mais antigo."
              />
            </SwiperSlide>
        </Swiper>
        </Box>
      </BaseContainer>
    </>
  )
}