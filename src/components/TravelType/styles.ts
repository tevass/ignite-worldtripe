import { BoxProps, ImageProps, StackProps, TextProps } from "@chakra-ui/react";

export const Container: StackProps = {
  py: "4",
  px: "6"
}

export const Icon: ImageProps = {
  w: "4.5rem",
}

export const Circle: BoxProps = {
  w: "2.5",
  h: "2.5",
  bg: "highlight.normal",
  borderRadius: "full"
}

export const Text: TextProps = {
  fontWeight: "medium",
  fontSize: "lg"
}