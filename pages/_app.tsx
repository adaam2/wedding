import theme, { GlobalStyle } from '@lib/theme'
import { ThemeProvider } from 'styled-components'

function Application({ Component, pageProps }) {
  return (
    <div className="app">
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default Application
