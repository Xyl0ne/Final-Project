import '@fontsource/roboto/300.css';
import Navbar from './components/Navbar.jsx';
import "./App.css"
import "./theme.js"
import { ThemeProvider } from '@emotion/react';
import theme from './theme.js';

import Home from './pages/Home.jsx';



function App() {
  

  return (
    <>
      <ThemeProvider theme={theme}>

        <Navbar />
        <Home/>
      </ThemeProvider>
      
    </>
  )
}

export default App
