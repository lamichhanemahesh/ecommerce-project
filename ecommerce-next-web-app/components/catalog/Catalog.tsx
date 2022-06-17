import ProductList from './productlist/ProductList';
import { useState,useEffect } from "react";
import {Product} from '../../models/product';
import agent from '../../api/agent';
function Catalog(){
  const [products, setProduct] = useState<Product[]>([]);


  useEffect(() => {
    agent.catalog.list().then(products => setProduct(products));
  }, []);
    return (
      <>
        <ProductList products={products} />
      </>
    );
}
export default Catalog;