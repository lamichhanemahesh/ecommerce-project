import { CssBaseline, Container, createTheme, ThemeProvider } from "@mui/material";
import Catalog from '../features/catalog/Catalog';
import Header from '../app/layout/header/Header';
import { useState } from "react";
function Home() {
  const [darkMode,setDarkMode] = useState(false);

  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  const paletteType= darkMode ? 'dark':'light';
  const theme = createTheme({
    palette:{
      mode:paletteType,
      background:{
        default:paletteType === 'light' ? '#eaeaea': '#121212'
      }
    }
  })


  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
        <Container>
          <Catalog /> 
        </Container>
        </ThemeProvider>
      
    </>
  );
}
export default Home;
