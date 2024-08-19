export interface ProductModel {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    }
  
  totalProducts: number;
  total: 194,
  skip: 10,
  limit: 10
}