import React from 'react';
import { motion } from 'framer-motion';
import { Sliders } from 'lucide-react';

interface FiltersProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  categories: string[];
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
}

const Filters: React.FC<FiltersProps> = ({
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
  categories,
  selectedCategories,
  setSelectedCategories,
}) => {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="lg:w-64 space-y-6"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Filters
          </h2>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="lg:hidden"
          >
            <Sliders className="w-5 h-5" />
          </button>
        </div>

        <div className={`space-y-6 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="rounded text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
              Price Range
            </h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="5000"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
              Sort By
            </h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md py-2 px-3 text-sm"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Filters;