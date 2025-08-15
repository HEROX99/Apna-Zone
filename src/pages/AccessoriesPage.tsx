import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';

const AccessoriesPage: React.FC = () => {
  const [accessories, setAccessories] = useState<Product[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  
  useEffect(() => {
    document.title = 'Apna Zone - Accessories';
    const allAccessories = getProductsByCategory('accessories');
    setAccessories(allAccessories);
  }, []);
  
  const subcategories = ['all', ...new Set(accessories.map(item => item.subcategory || ''))];
  
  const filteredAccessories = selectedSubcategory === 'all' 
    ? accessories 
    : accessories.filter(item => item.subcategory === selectedSubcategory);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">College Accessories</h1>
        
        <div className="flex items-center">
          <label htmlFor="subcategory" className="mr-2 text-gray-700">Filter by:</label>
          <select 
            id="subcategory"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {subcategories.map(subcategory => (
              <option key={subcategory} value={subcategory}>
                {subcategory === 'all' ? 'All Categories' : subcategory}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="bg-orange-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Essential Accessories for Engineering Students</h2>
        <p className="text-gray-600">
          Find all the stationery, lab equipment, and essential accessories you need for your engineering courses.
          Quality products at affordable prices.
        </p>
      </div>
      
      <ProductGrid products={filteredAccessories} />
    </div>
  );
};

export default AccessoriesPage;