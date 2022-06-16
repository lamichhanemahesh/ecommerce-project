import { Typography } from "@mui/material";
import Auxiliary from "../hoc/Auxiliary";
import Header from '../components/header/Header';
function AboutPageLayout() {
  return (
    <Auxiliary>
      <Header/>
      <Typography variant="h2">About Page</Typography>;
    </Auxiliary>
    );
   
}
export default AboutPageLayout;