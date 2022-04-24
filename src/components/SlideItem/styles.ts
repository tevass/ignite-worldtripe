import { BoxProps, FlexProps, HeadingProps, ImageProps, LinkProps, TextProps } from "@chakra-ui/react";

export const Container: LinkProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  w: "100%",
  h: "100%",
  _hover: {
    textDecoration: "none"
  },
  bgPosition: "center",
  bgRepeat: "no-repeat",
}

export const Content: BoxProps = {
  zIndex: 1,
  textAlign: "center",
  color: "text.headings.light"
}

export const Heading: HeadingProps = {
  fontWeight: "bold",
  fontSize: "5xl",
  mb: "4"
}

export const Text: TextProps = {
  fontWeight: "bold",
  fontSize: "lg"
}