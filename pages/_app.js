import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, GlobalStyles, lightTheme } from '../config/ThemeConfig'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState('light')

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
