import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';

const ElectronicsPage: React.FC = () => {
  const [electronics, setElectronics] = useState<Product[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  
  useEffect(() => {
    document.title = 'Apna Zone - Electronics';
    const allElectronics = getProductsByCategory('electronics');
    setElectronics(allElectronics);
  }, []);
  
  const subcategories = ['all', ...new Set(electronics.map(item => item.subcategory || ''))];
  
  const filteredElectronics = selectedSubcategory === 'all' 
    ? electronics 
    : electronics.filter(item => item.subcategory === selectedSubcategory);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Electronics & Components</h1>
        
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
      
      <div className="bg-purple-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Electronics for Engineering Projects</h2>
        <p className="text-gray-600">
          Browse our selection of Arduino boards, Raspberry Pi, electronic components, and project kits.
          Everything you need for your engineering labs and projects.
        </p>
      </div>
      
      <ProductGrid products={filteredElectronics} />
    </div>
  );
};

export default ElectronicsPage;