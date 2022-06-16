import { Grid } from "@mui/material";
import {Product} from '../../../models/product';
import ProductCard from './productcard/ProductCard';

interface Props {
  products: Product[]
}

function ProductList({products}:Props) {

  return (
    <Grid container spacing={4}>
      
      { products.map((product) => (
        <Grid item xs={3} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}

    </Grid>
  );
}
export default ProductList;
