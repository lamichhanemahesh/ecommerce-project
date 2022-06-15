import ProductList from './ProductList';
import { useState,useEffect } from "react";
import {Product} from '../../app/models/product';

function Catalog(){
  const [products, setProduct] = useState<Product[]>([]);

  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  useEffect(() => {
    fetch("http://localhost:8080/ecommerce/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
    return (
      <>
        <ProductList products={products}/>
      </>
    );
}
export default Catalog;