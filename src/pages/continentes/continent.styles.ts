import { BoxProps, HeadingProps, SimpleGridProps, StackProps, TextProps } from "@chakra-ui/react";

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
  py: "8",
  alignItems: "center",
  placeItems: "center",
  minChildWidth: 310,
}

export const Text: TextProps = {
  textAlign: "justify",
  fontSize: "lg",
}

export const Stats: StackProps = {
  w: "100%",
  justify: "space-around",
}

export const Stat: BoxProps = {
  display: "flex",
  flexDir: "column",
  alignItems: "center"
}

export const StatHeader: HeadingProps = {
  color: "highlight.normal",
  fontWeight: "semibold",
  fontSize: "6xl",
  lineHeight: "2xl"
}

export const StatText: TextProps = {
  fontWeight: "semibold",
}