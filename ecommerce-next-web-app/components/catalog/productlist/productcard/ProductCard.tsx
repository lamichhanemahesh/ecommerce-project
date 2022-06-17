import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "../../../../models/product";
import { Avatar, CardHeader } from "@mui/material";
import Link from 'next/link';
interface Props {
  product: Product;
}
function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader avatar={
        <Avatar sx={{bgcolor:'secondary.main'}}>
          {product.name.charAt(0).toUpperCase()}
        </Avatar>
      }
      title={product.name}
      titleTypographyProps={{
        sx:{fontWeight:'bold',color:'primary.main'}
      }}
      >

      </CardHeader>
      <CardMedia
        sx={{height:140,backgroundSize:'contain',bgcolor:'primary.light'}}
        image={product.pictureurl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}/{product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small">Add To Cart</Button>
        <Button  size="small">
          <Link href= {`/${product.id}`}>View</Link>
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProductCard;
