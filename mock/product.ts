export type StoreInfo = {
  name: 'blinkit' | 'zepto' | 'jio' | 'instamart';
  price: number;
  available: boolean;
};

export type Product = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  stores: StoreInfo[];
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Daawat Basmati Rice - Rozana Super',
    image: 'https://via.placeholder.com/100x100.png?text=Rice',
    tags: ['1kg', 'Basmati'],
    stores: [
      { name: 'blinkit', price: 82, available: true },
      { name: 'zepto', price: 84, available: true },
      { name: 'jio', price: 80, available: false },
    ],
  },
  {
    id: '2',
    title: 'Makhana – Roasted & Salted',
    image: 'https://via.placeholder.com/100x100.png?text=Makhana',
    tags: ['100g', 'Snacks'],
    stores: [
      { name: 'blinkit', price: 110, available: true },
      { name: 'zepto', price: 115, available: true },
      { name: 'instamart', price: 108, available: true },
    ],
  },
];
