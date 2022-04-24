import { BoxProps, HeadingProps, SimpleGridProps, TextProps } from "@chakra-ui/react";

export const Header: BoxProps = {
  position: "relative",
  bgPosition: "center",
  bgRepeat: "no-repeat",
  bgSize: "cover",
  h: 300,
  color: "text.headings.light"
}

export const Heading: HeadingProps = {
  position: "absolute",
  bottom: "8",
}

export const Info: SimpleGridProps = {
  columns: 2,
  spacing: "10",
  w: "100%",
  py: "8",
  alignItems: "center",
  minChildWidth: 310,
}

export const Text: TextProps = {
  textAlign: "justify",
  fontSize: "lg",
}