export interface IProduct {
  product: {
    name: string;
    image_url: string;
    price: number;
    priceFormatted?: number;
    description: string;
    id?: number;
  };
  name: string;
  image_url: string;
  price: number;
  priceFormatted?: number;
  description: string;
  id?: number;
}
