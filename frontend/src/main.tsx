import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from './Theme.tsx'
import { CssBaseline } from '@mui/material'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </CssBaseline>
  </StrictMode>
)
