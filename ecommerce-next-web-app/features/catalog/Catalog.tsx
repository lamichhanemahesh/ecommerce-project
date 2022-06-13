import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import ProductList from './ProductList';
import {Product} from '../../app/models/product';
interface Props{
    products: Product[];
    addProduct: () => void;
}

function Catalog({products,addProduct}: Props){
    return (
      <>
        <ProductList products={products}/>
        <Button variant='contained' onClick={addProduct}>Add Product</Button>
      </>
    );
}
export default Catalog;