import { Typography,Container, ButtonGroup, Button } from "@mui/material";
import Auxiliary from "../hoc/Auxiliary";
import error from "../api/error";
function AboutPageLayout() {
  return (
    <Auxiliary>
      <Container>
        <Typography gutterBottom variant="h2">
          Errors For Testing Purpose
        </Typography>
        <ButtonGroup fullWidth>
          <Button
            variant="contained"
            onClick={() =>
              error.TestError.get400Error()}
          >
            Test 400 Error
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              error.TestError.get401Error().catch((error) => console.log(error))
            }
          >
            Test 401 Error
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              error.TestError.get404Error().catch((error) => console.log(error))
            }
          >
            Test 404 Error
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              error.TestError.get500Error().catch((error) => console.log(error))
            }
          >
            Test 500 Error
          </Button>
          <Button
            variant="contained"
            onClick={() =>
              error.TestError.getValidationError().catch((error) =>
                console.log(error)
              )
            }
          >
            Test Validation Error
          </Button>
        </ButtonGroup>
      </Container>
    </Auxiliary>
  );
   
}
export default AboutPageLayout;