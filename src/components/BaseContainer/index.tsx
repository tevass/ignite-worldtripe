import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

import * as styles from './styles'

interface BaseContainerProps extends FlexProps {
  children: ReactNode;
}

export function BaseContainer({ children, ...props }: BaseContainerProps) {
  return (
    <Flex as="section" {...styles.Container} {...props}>
      { children }
    </Flex>
  )
}