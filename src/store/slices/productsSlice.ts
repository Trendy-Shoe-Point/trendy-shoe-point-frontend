import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  category: 'men' | 'women' | 'kids';
  sizes: number[];
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductsState {
  items: Product[];
  filteredItems: Product[];
  selectedCategory: 'all' | 'men' | 'women' | 'kids';
  priceRange: [number, number];
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Urban Runner Pro',
    price: 129.99,
    description: 'Lightweight running shoes with responsive cushioning for the modern urban athlete. Features breathable mesh upper and durable rubber outsole.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    category: 'men',
    sizes: [7, 8, 9, 10, 11, 12],
    isNew: true,
  },
  {
    id: '2',
    name: 'Classic White Sneaker',
    price: 89.99,
    description: 'Timeless white leather sneakers that go with everything. Premium leather construction with cushioned insole for all-day comfort.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80',
    category: 'women',
    sizes: [5, 6, 7, 8, 9, 10],
  },
  {
    id: '3',
    name: 'Kids Adventure Boot',
    price: 59.99,
    originalPrice: 79.99,
    description: 'Durable and comfortable boots perfect for outdoor adventures. Water-resistant with easy velcro closure for little explorers.',
    image: 'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=600&q=80',
    category: 'kids',
    sizes: [1, 2, 3, 4, 5],
    isSale: true,
  },
  {
    id: '4',
    name: 'Elite Basketball High',
    price: 159.99,
    description: 'Professional-grade basketball shoes with ankle support and superior grip. Designed for peak performance on the court.',
    image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=600&q=80',
    category: 'men',
    sizes: [8, 9, 10, 11, 12, 13],
    isNew: true,
  },
  {
    id: '5',
    name: 'Blush Pink Trainer',
    price: 109.99,
    description: 'Stylish and comfortable trainers in a beautiful blush pink. Perfect for gym sessions or casual outings.',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80',
    category: 'women',
    sizes: [5, 6, 7, 8, 9],
  },
  {
    id: '6',
    name: 'Junior Sport Flex',
    price: 49.99,
    description: 'Flexible and lightweight sports shoes for active kids. Easy slip-on design with secure fit for running and playing.',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&q=80',
    category: 'kids',
    sizes: [1, 2, 3, 4, 5, 6],
  },
  {
    id: '7',
    name: 'Leather Oxford Classic',
    price: 179.99,
    originalPrice: 219.99,
    description: 'Handcrafted leather oxford shoes for the distinguished gentleman. Perfect for formal occasions and business settings.',
    image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=600&q=80',
    category: 'men',
    sizes: [7, 8, 9, 10, 11, 12],
    isSale: true,
  },
  {
    id: '8',
    name: 'Platform Canvas Sneaker',
    price: 79.99,
    description: 'Trendy platform sneakers with canvas upper. Adds height while keeping you comfortable all day long.',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80',
    category: 'women',
    sizes: [5, 6, 7, 8, 9, 10],
    isNew: true,
  },
];

const initialState: ProductsState = {
  items: initialProducts,
  filteredItems: initialProducts,
  selectedCategory: 'all',
  priceRange: [0, 300],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<'all' | 'men' | 'women' | 'kids'>) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state.items, action.payload, state.priceRange);
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload;
      state.filteredItems = filterProducts(state.items, state.selectedCategory, action.payload);
    },
    resetFilters: (state) => {
      state.selectedCategory = 'all';
      state.priceRange = [0, 300];
      state.filteredItems = state.items;
    },
  },
});

function filterProducts(
  products: Product[],
  category: 'all' | 'men' | 'women' | 'kids',
  priceRange: [number, number]
): Product[] {
  return products.filter((product) => {
    const categoryMatch = category === 'all' || product.category === category;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });
}

export const { setCategory, setPriceRange, resetFilters } = productsSlice.actions;
export default productsSlice.reducer;
