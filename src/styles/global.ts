'use client'

import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  // Para ver mais fontes
  // https://gwfh.mranftl.com/fonts/
  @font-face {
    font-display: swap;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/raleway-v29-latin-regular.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/raleway-v29-latin-500.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/raleway-v29-latin-700.woff2') format('woff2');
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

`

export default GlobalStyles
