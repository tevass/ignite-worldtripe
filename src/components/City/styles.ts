import { BoxProps, ImageProps, TextProps } from "@chakra-ui/react";

export const Container: BoxProps = {
  bg: "white"
}

export const CityImage: ImageProps = {
  borderRadius: "4px 4px 0px 0px",
  height: 170,
}

export const Content: BoxProps = {
  p: "4",
  borderColor: "highlight.alpha",
  borderWidth: 1,
  borderTop: "none",
  borderRadius: "0 0 4px 4px"
}

export const CityName: TextProps = {
  color: "test.headings.gray",
  fontWeight: "semibold",
  fontSize: "lg",
  mb: "4"
}

export const CityCountry: TextProps = {
  color: "text.info.normal",
  fontWeight: "medium",
  fontSize: "md",
}