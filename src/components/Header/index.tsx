import { Flex, Img, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BaseContainer } from "../BaseContainer";

import * as styles from './styles'

export function Header() {
  let buttonToBack = false

  const { asPath } = useRouter()

  if(asPath !== "/") buttonToBack = true

  return (
    <Flex {...styles.Header} >
      <BaseContainer h="100%">
        <Flex {...styles.HeaderContent} >

          { buttonToBack && (
            <Link href="/" passHref>
              <ChakraLink as="a" position="absolute" left={0}>
                <Img src="/assets/arrow-back.svg" alt="Voltar" />
              </ChakraLink>
            </Link>
          ) }

          <Link href="/" passHref>
            <ChakraLink as="a">
              <Img src="/assets/logo.svg" alt="World Tripe" p="2" />
            </ChakraLink>
          </Link>

        </Flex>
      </BaseContainer>
    </Flex>
  )
}