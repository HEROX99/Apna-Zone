import React from 'react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-semibold truncate">{product.name}</h3>
          </div>
          {product.subcategory && (
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
              {product.subcategory}
            </span>
          )}
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">₹{product.price}</span>
            <button 
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation on button click
                addToCart(product);
              }}
              className="flex items-center space-x-1 bg-[#FF6B35] hover:bg-[#FF8C55] text-white py-1 px-3 rounded-md transition-colors"
            >
              <ShoppingCart size={16} />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
