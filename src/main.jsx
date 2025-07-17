import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider, createTheme } from "@mantine/core";
import './index.css'
import App from './App.jsx'

const theme = createTheme({
    fontFamily: 'Verdana, sans-serif',
    fontFamilyMonospace: 'Monaco, Courier, monospace',
    headings: { fontFamily: 'Outfit, sans-serif' },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{theme}}>
          <App/>
      </MantineProvider>
  </StrictMode>,
)
