import { Box, HStack, Image, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

import * as styles from './styles'

interface TravelTypeProps {
  icon: string;
  iconAlt: string;
  children: ReactNode;
}

export function TravelType({ icon, iconAlt, children }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: true,
    sm: false
  })

  return (
    <VStack {...styles.Container}>
      { !isMobile && <Image src={icon} alt={iconAlt} {...styles.Icon}/> }
      <HStack>
        {isMobile && <Box {...styles.Circle} />} 
        <Text {...styles.Text}>{children}</Text>
      </HStack>
    </VStack>
  )
}