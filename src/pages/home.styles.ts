import { FlexProps, HeadingProps, ImageProps, TextProps } from "@chakra-ui/react";

export const Banner: FlexProps = {
  position: "relative",
  py: "8",
}

export const BannerBackground: ImageProps = {
  position: "absolute",
  inset: 0,
  h: "100%",
  w: "100%"
}

export const BannerContainer: FlexProps = {
  align: "center",
  justify: "space-between"
}

export const BannerHeading: HeadingProps = {
  color: "text.headings.light",
  fontWeight: "medium",
  fontSize: ["lg", "xl", "4xl"],
  lineHeight: ["8", "10", "2xl"],
  px: "4",
  mb: "4",
}

export const BannerText: TextProps = {
  color: "text.headings.light",
  fontWeight: "400",
  fontSize: ["sm", "md", "lg"],
  px: "4",
}

export const BannerAirplane: ImageProps = {
  position: "relative",
  top: "16"
}

export const Travels: FlexProps = {
  w: "100%",
  align: "center",
  justify: "space-evenly",
  wrap: "wrap",
  flex: 1,
}