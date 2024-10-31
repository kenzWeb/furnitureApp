import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FeaturedSection from '../components/home/FeaturedSection';
import { Product } from '../types';

const featuredProducts: Product[] = [
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
    description: 'Experience ultimate comfort with our modern leather sofa. Crafted with premium materials and designed for both style and durability.',
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
    description: 'Elegant dining table perfect for modern homes. Features solid wood construction and timeless design.',
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
    description: 'Premium office chair with ergonomic features for all-day comfort and productivity.',
    features: ['Adjustable height', 'Lumbar support', 'Breathable mesh'],
    dimensions: { width: 65, height: 120, depth: 65 },
    inStock: true,
  },
];

const categories = [
  {
    id: 'living-room',
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800',
    description: 'Elegant and comfortable living room furniture',
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800',
    description: 'Peaceful and stylish bedroom collections',
  },
  {
    id: 'dining',
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800',
    description: 'Modern dining sets for memorable meals',
  },
  {
    id: 'office',
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800',
    description: 'Professional and ergonomic office furniture',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000"
            alt="Luxury furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Elevate Your Living Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-gray-200 mb-8"
          >
            Discover our curated collection of premium furniture
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              to="/catalog"
              className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find the perfect furniture for every room
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Link to={`/${category.id}`}>
                  <div className="aspect-[4/5]">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedSection products={featuredProducts} />

      {/* Newsletter Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Get 10% Off Your First Order
            </h2>
            <p className="text-indigo-100 mb-8">
              Subscribe to our newsletter and receive exclusive offers
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;