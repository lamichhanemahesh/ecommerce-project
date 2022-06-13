export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  pictureurl: string;
  type?: string;
  brand: string;
  quantityinstock?: number;
}
