import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const product = {
  id: '1',
  name: 'Modern Leather Sofa',
  price: 1299,
  images: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800',
  ],
  rating: 4.8,
  description: 'Experience ultimate comfort with our modern leather sofa. Crafted with premium materials and designed for both style and durability.',
  features: [
    'Premium Italian leather',
    'Solid wood frame',
    'High-density foam cushions',
    'Stainless steel legs',
  ],
  dimensions: {
    width: 220,
    height: 85,
    depth: 95,
  },
};

const ProductDetails = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    addItem({ productId: product.id, quantity });
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <motion.img
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-900/80 p-2 rounded-full"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    currentImage === index
                      ? 'ring-2 ring-indigo-600'
                      : 'opacity-70'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    {product.rating}
                  </span>
                </div>
                <span className="text-gray-300 dark:text-gray-700">|</span>
                <span className="text-gray-600 dark:text-gray-400">
                  In Stock
                </span>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Features
              </h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Dimensions
              </h2>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="block text-sm text-gray-600 dark:text-gray-400">
                    Width
                  </span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {product.dimensions.width}cm
                  </span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="block text-sm text-gray-600 dark:text-gray-400">
                    Height
                  </span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {product.dimensions.height}cm
                  </span>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <span className="block text-sm text-gray-600 dark:text-gray-400">
                    Depth
                  </span>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {product.dimensions.depth}cm
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-32">
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Truck className="w-6 h-6 text-indigo-600" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Free Delivery
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    For orders over $999
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Shield className="w-6 h-6 text-indigo-600" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    2 Year Warranty
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Full coverage
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;