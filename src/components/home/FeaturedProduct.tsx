import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';
import { Product } from '../../types';

interface FeaturedProductProps {
  product: Product;
  index: number;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ product, index }) => {
  const addItem = useCartStore((state) => state.addItem);
  const [isHovered, setIsHovered] = React.useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ productId: product.id, quantity: 1 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={handleAddToCart}
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors group/btn"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover/btn:text-indigo-600 dark:group-hover/btn:text-indigo-400" />
            </button>
          </motion.div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              {product.name}
            </h3>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {product.rating}
              </span>
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            ${product.price}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {product.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeaturedProduct;