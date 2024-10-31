import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/catalog/ProductCard';
import Filters from '../components/catalog/Filters';
import SearchBar from '../components/catalog/SearchBar';
import Scene from '../components/3d/Scene';
import { Product } from '../types';

const products: Product[] = [
  {
    id: '1',
    name: 'Modern Leather Sofa',
    price: 1299,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800',
    ],
    rating: 4.8,
    category: 'living-room',
    description: 'Luxurious leather sofa with modern design',
    features: ['Premium leather', 'Ergonomic design', 'Durable frame'],
    dimensions: { width: 200, height: 85, depth: 95 },
    inStock: true,
  },
  {
    id: '2',
    name: 'Minimalist Dining Table',
    price: 899,
    images: [
      'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800',
    ],
    rating: 4.9,
    category: 'dining',
    description: 'Elegant dining table for modern homes',
    features: ['Solid wood', 'Seats 6-8', 'Easy assembly'],
    dimensions: { width: 180, height: 75, depth: 90 },
    inStock: true,
  },
  {
    id: '3',
    name: 'Ergonomic Office Chair',
    price: 499,
    images: [
      'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800',
    ],
    rating: 4.7,
    category: 'office',
    description: 'Comfortable office chair with ergonomic features',
    features: ['Adjustable height', 'Lumbar support', 'Breathable mesh'],
    dimensions: { width: 65, height: 120, depth: 65 },
    inStock: true,
  },
  // Add more products...
];

const categories = ['living-room', 'bedroom', 'dining', 'office', 'outdoor'];

const Catalog = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = React.useState('');
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 5000]);
  const [sortBy, setSortBy] = React.useState('featured');
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    category ? [category] : []
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            {category
              ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
              : 'All Products'}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover our collection of premium furniture
          </p>
        </motion.div>

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex flex-col lg:flex-row gap-8">
          <Filters
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            sortBy={sortBy}
            setSortBy={setSortBy}
            categories={categories}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />

          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  No products found matching your criteria
                </p>
                <Scene />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;