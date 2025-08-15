import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, BookOpen, LogIn } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartAnimating, setIsCartAnimating] = useState(false);
  const { getItemCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Run animation when cart count changes
  const itemCount = getItemCount();

  useEffect(() => {
    if (itemCount > 0) {
      setIsCartAnimating(true);
      const timeout = setTimeout(() => setIsCartAnimating(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [itemCount]);

  return (
    <nav className="bg-[#3046C6] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BookOpen size={24} />
              <span className="text-xl font-bold">Apna Zone</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center flex-1">
            <SearchBar />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors">Home</Link>
            <Link to="/books" className="px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors">Books</Link>
            <Link to="/accessories" className="px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors">Accessories</Link>
            <Link to="/electronics" className="px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors">Electronics</Link>
            <Link to="/about" className="px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors">About Us</Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors">Contact</Link>
            <Link to="/login" className="px-3 py-2 flex items-center space-x-1 rounded-md hover:bg-[#4056D6] transition-colors">
              <LogIn size={18} />
              <span>Login</span>
            </Link>

            <Link
              to="/cart"
              className={`px-3 py-2 flex items-center space-x-1 rounded-md bg-[#FF6B35] hover:bg-[#FF8C55] transition-transform duration-300 ${
                isCartAnimating ? 'animate-bounce' : ''
              }`}
            >
              <ShoppingCart size={18} />
              <span>Cart ({itemCount})</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Link
              to="/cart"
              className={`p-2 mr-2 flex items-center rounded-full bg-[#FF6B35] hover:bg-[#FF8C55] transition-transform duration-300 ${
                isCartAnimating ? 'animate-bounce' : ''
              }`}
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && <span className="ml-1">{itemCount}</span>}
            </Link>

            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3046C6]">
          <div className="px-4 py-2">
            <SearchBar />
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/books" className="block px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors" onClick={() => setIsMenuOpen(false)}>Books</Link>
            <Link to="/accessories" className="block px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors" onClick={() => setIsMenuOpen(false)}>Accessories</Link>
            <Link to="/electronics" className="block px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors" onClick={() => setIsMenuOpen(false)}>Electronics</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="block px-3 py-2 rounded-md hover:bg-[#4056D6] transition-colors flex items-center" onClick={() => setIsMenuOpen(false)}>
              <LogIn size={18} className="mr-2" />
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
