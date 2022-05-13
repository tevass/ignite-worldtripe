import { Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import * as styles from './styles'

interface CityProps {
  name: string;
  country: string;
}

type Image = {
  photos: {
    src: {
      landscape: string;
    },
    alt: string;
  }[]
}

export function City({ country, name }: CityProps) {
  const [image, setImage] = useState<Image>()

  useEffect(() => {
    async function fetchImage() {
      const url = `https://api.pexels.com/v1/search?query=${name}&per_page=1&locale=en-US`
      const { data: image } = await axios.get<Image>(url)

      setImage(image)
    }

    fetchImage()
  }, [name])

  const photo = image?.photos[0]

  return (
    <Box {...styles.Container}>
      <Image src={photo?.src.landscape} alt={photo?.alt} {...styles.CityImage}/>
      <Box {...styles.Content}>
        <Text {...styles.CityName}>{name}</Text>
        <Text {...styles.CityCountry}>{country}</Text>
      </Box>
    </Box>
  )
}