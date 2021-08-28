export interface IProducts {
  product: {
    name: string;
    image_url: string;
    price?: number;
    priceFormatted?: string;
    description: string;
    id?: number;
  }[];
}
