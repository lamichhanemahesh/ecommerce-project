import Auxiliary from '../hoc/Auxiliary';
import {
  Container,
} from "@mui/material";
import Catalog from '../components/catalog/Catalog';
function HomePageLayout(){

    return (
      <Auxiliary>
          <Container>
            <Catalog />
          </Container>
      </Auxiliary>
    );
}
export default HomePageLayout;