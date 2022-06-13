import { CssBaseline,Container } from '@material-ui/core';
import {useState,useEffect} from 'react';
import { Product } from '../app/models/product';
import Catalog from '../features/catalog/Catalog';
import Header from '../app/layout/header/Header';
function Home() {
  const [products,setProduct] = useState<Product[]>([]);

  function addProduct(){
    setProduct(prevState => [...prevState,
      {
        id:prevState.length+101,
        name:'product'+(prevState.length+1),
        price:(prevState.length*100)+100,
        brand:'some brand',
        description:'some description',
        pictureurl: 'http://picsum.photos/200'
      }])
  }

   const https = require("https");
   const agent = new https.Agent({
     rejectUnauthorized: false,
   });


  useEffect(() => {
    fetch("http://localhost:8080/ecommerce/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  },[])


  return (
    <>
      <CssBaseline />
      <Header />
      {/* <Typography variant="h1">Re-Store</Typography> */}
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  );
}
export default Home;
