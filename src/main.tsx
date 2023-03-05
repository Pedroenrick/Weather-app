import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/global.styles'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { Theme } from './styles/theme/default.styles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
