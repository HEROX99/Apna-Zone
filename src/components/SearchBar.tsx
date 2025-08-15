import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.length > 0) {
      const filtered = products
        .filter(product => 
          product.name.toLowerCase().includes(term.toLowerCase()) ||
          product.category.toLowerCase().includes(term.toLowerCase()) ||
          (product.subcategory && product.subcategory.toLowerCase().includes(term.toLowerCase()))
        )
        .map(product => product.name);
      setSuggestions([...new Set(filtered)]);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setIsOpen(false);
    // Navigate to the product's category page
    const product = products.find(p => p.name === suggestion);
    if (product) {
      navigate(`/${product.category}`);
    }
  };

  return (
    <div className="relative flex-1 max-w-xl mx-4" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for books, accessories, electronics..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search 
          size={20} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
      
      {isOpen && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul className="py-1">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;