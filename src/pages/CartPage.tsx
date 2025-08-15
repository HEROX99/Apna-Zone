  import React, { useEffect } from 'react';
  import { Link, useNavigate } from 'react-router-dom';
  import { useCart } from '../context/CartContext';
  import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';

  const CartPage: React.FC = () => {
    const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();
    const navigate = useNavigate();
    
    useEffect(() => {
      document.title = 'Apna Zone - Cart';
    }, []);
    
    if (items.length === 0) {
      return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag size={64} className="mx-auto text-gray-400" />
            <h2 className="mt-4 text-2xl font-bold text-gray-800">Your cart is empty</h2>
            <p className="mt-2 text-gray-600">Looks like you haven't added any products to your cart yet.</p>
            <Link 
              to="/" 
              className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      );
    }
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Product</th>
                      <th className="text-center py-2">Quantity</th>
                      <th className="text-right py-2">Price</th>
                      <th className="text-right py-2">Total</th>
                      <th className="text-right py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr key={item.product.id} className="border-b">
                        <td className="py-4">
                          <div className="flex items-center">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-16 h-16 object-cover rounded-md mr-4 hidden sm:block"
                            />
                            <div>
                              <h3 className="font-medium text-gray-800">{item.product.name}</h3>
                              <p className="text-sm text-gray-500">{item.product.category}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-l-md"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-10 h-8 flex items-center justify-center bg-gray-50 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-r-md"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-right">₹{item.product.price}</td>
                        <td className="py-4 text-right font-medium">
                          ₹{item.product.price * item.quantity}
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">₹0</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="text-lg font-bold text-gray-800">Total</span>
                    <span className="text-lg font-bold text-gray-800">₹{getCartTotal()}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => navigate('/payment')}
                  className="w-full mt-6 bg-[#FF6B35] hover:bg-[#FF8C55] text-white py-3 px-4 rounded-md transition-colors"
                >
                  Proceed to Payment
                </button>
                
                <Link 
                  to="/"
                  className="w-full mt-4 block text-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default CartPage;