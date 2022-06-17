import { Divider,Container ,Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import {useRouter} from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import {Product} from '../models/product';
import agent from "../api/agent";

function ProductDetail() {
  const router = useRouter();
  const { productId } = router.query;


  const[product,setProduct] = useState<Product | null>(null);
  const[loading,setLoading] = useState(true);


  useEffect(()=>{
    agent.catalog.details(parseInt(productId.toString()))
    .then(response => setProduct(response))
    .catch(error => console.log(error))
    .finally(() => setLoading(false));
  },[productId]);

  if(loading) return <h3>Loading...</h3>
  if(!product) return <h3>Product Not Found</h3>




  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <img
            src={product.pictureurl}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h3">{product.name}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h4" color="secondary">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{product.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>{product.type}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{product.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Quantity In Stock</TableCell>
                  <TableCell>{product.quantityinstock}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
export default ProductDetail;
