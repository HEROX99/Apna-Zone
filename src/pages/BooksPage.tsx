import React, { useEffect, useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { getProductsByCategory } from '../data/products';
import { Product } from '../types';

const BooksPage: React.FC = () => {
  const [books, setBooks] = useState<Product[]>([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  
  useEffect(() => {
    document.title = 'Apna Zone - Books';
    const allBooks = getProductsByCategory('books');
    setBooks(allBooks);
  }, []);
  
  const subcategories = ['all', ...new Set(books.map(book => book.subcategory || ''))];
  
  const filteredBooks = selectedSubcategory === 'all' 
    ? books 
    : books.filter(book => book.subcategory === selectedSubcategory);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Academic Books</h1>
        
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
      
      <div className="bg-blue-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Find Your B.Tech Textbooks</h2>
        <p className="text-gray-600">
          Explore our comprehensive collection of engineering textbooks, reference materials, and study guides.
          All books are available at student-friendly prices with delivery to colleges across India.
        </p>
      </div>
      
      <ProductGrid products={filteredBooks} />
    </div>
  );
};

export default BooksPage;