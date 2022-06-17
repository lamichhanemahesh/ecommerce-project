import '../styles/globals.css'
import Auxiliary from '../hoc/Auxiliary';
import Header from '../components/header/Header';
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {
  CssBaseline,
  createTheme,
  ThemeProvider,
} from "@mui/material";
function MyApp({ Component, pageProps }) {

  const [darkMode, setDarkMode] = useState(false);

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }
  const paletteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });


  return (
    <Auxiliary>
      <ThemeProvider theme={theme}>
        <ToastContainer position='bottom-right' hideProgressBar/>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />;
        <Component {...pageProps} />;
      </ThemeProvider>
    </Auxiliary>
  );
  
  
}

export default MyApp
