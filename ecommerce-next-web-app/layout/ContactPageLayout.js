import { Typography } from "@mui/material";
import Header from '../components/header/Header';
import Auxiliary from "../hoc/Auxiliary";
function ContactPageLayout() {
  return (
    <Auxiliary>
      <Header />
      <Typography variant="h2">Contact Page</Typography>
    </Auxiliary>
  ); 
}
export default ContactPageLayout;
