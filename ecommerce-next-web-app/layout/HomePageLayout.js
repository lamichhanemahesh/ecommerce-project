import Auxiliary from '../hoc/Auxiliary';
import {
  CssBaseline,
  Container,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Header from '../components/header/Header';
import Catalog from '../components/catalog/Catalog';
import { useState } from "react";
function HomePageLayout(){

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
          <CssBaseline />
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          <Container>
            <Catalog />
          </Container>
        </ThemeProvider>
      </Auxiliary>
    );
}
export default HomePageLayout;