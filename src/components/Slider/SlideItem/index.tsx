import { Box, Flex, Heading, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'

import * as styles from './styles'

interface SlideItemProps {
  img: string;
  altImg: string;
  title: string;
  caption: string;
  href: string;
}

export function SlideItem({ altImg, caption, href, img, title }: SlideItemProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink as="a" {...styles.Container}>
        <Image src={img} alt={altImg} {...styles.Background} />
        <Box {...styles.Content}>
          <Heading {...styles.Heading}>
            {title}
          </Heading>
          <Text {...styles.Text}>
            {caption}
          </Text>
        </Box>
      </ChakraLink>
    </Link>
  )
}