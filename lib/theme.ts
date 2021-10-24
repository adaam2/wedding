import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html, #__next, .app, .container {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Baskervville', serif;
  }

  body {
    background: white;
  }
`

export default {
  text: '#2a2a2a',
  background: 'white',
  mobileBreakpoint: '1200px',
}