export type StoreInfo = {
  name: 'blinkit' | 'zepto' | 'instamart';
  price: number;
  available: boolean;
};

export type Product = {
  id: string;
  title: string;
  image: any;
  tags: string[];
  stores: StoreInfo[];
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Daawat Basmati Rice - Rozana Super',
    image: require('../assets/products/product1.jpg'),
    tags: ['1kg', 'Basmati'],
    stores: [
      { name: 'blinkit', price: 82, available: true },
      { name: 'zepto', price: 84, available: true },
      { name: 'instamart', price: 86, available: true },
    ],
  },
  {
    id: '2',
    title: 'Makhana – Roasted & Salted',
    image: require('../assets/products/product2.jpg'),
    tags: ['100g', 'Snacks'],
    stores: [
      { name: 'blinkit', price: 110, available: true },
      { name: 'zepto', price: 115, available: true },
      { name: 'instamart', price: 108, available: true },
    ],
  },
  {
    id: '3',
    title: 'Tata Salt Vacuum Evaporated Iodised',
    image: require('../assets/products/product3.jpg'),
    tags: ['1kg', 'Salt'],
    stores: [
      { name: 'blinkit', price: 26, available: true },
      { name: 'zepto', price: 25, available: true },
      { name: 'instamart', price: 24, available: true },
    ],
  },
];
