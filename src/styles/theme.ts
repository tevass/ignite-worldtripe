import { extendTheme } from '@chakra-ui/react'

const colors = {
  highlight: {
    normal: "#FFBA08",
    alpha: "rgba(255, 186, 8, 0.5)",
  },
  text: {
    headings: {
      gray: "#47585B",
      light: "#F5F8FA"
    },
    info: {
      normal: "#999999",
      alpha: "rgba(153, 153, 153, 0.5)",
      light: "#DADADA"
    }
  }
}

const fonts = {
  heading: 'Poppins',
  body: 'Poppins',
  cards: 'Barlow'
}

const lineHeights = {
  "2xl": "3.25rem"
}

const styles = {
  global: {
    body: {
      bg: 'text.headings.light',
      color: 'text.headings.gray'
    },
  }
}

export const theme = extendTheme({ colors, fonts, lineHeights, styles  })