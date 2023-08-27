import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ClerkProvider } from '@clerk/clerk-react';
import { ThemeProvider } from './components/theme-providers.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(

  // <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <ClerkProvider publishableKey={import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY}>

      <App />
    </ClerkProvider>,

  {/* </ThemeProvider> */}
)
