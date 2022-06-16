import ProductList from './productlist/ProductList';
import { useState,useEffect } from "react";
import {Product} from '../../models/product';

function Catalog(){
  const [products, setProduct] = useState<Product[]>([]);


  useEffect(() => {
    fetch("http://localhost:8080/ecommerce/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
    return (
      <>
        <ProductList products={products} />
      </>
    );
}
export default Catalog;