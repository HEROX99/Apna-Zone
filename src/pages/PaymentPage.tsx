import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, ShieldCheck, CheckCircle } from 'lucide-react';

const PaymentPage: React.FC = () => {
  const { getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [paymentDetails, setPaymentDetails] = useState({
    name: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  
  const [address, setAddress] = useState({
    line1: '',
    line2: '',
    city: '',
    state: '',
    pincode: ''
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    document.title = 'Apna Zone - Payment';
  }, []);
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!paymentDetails.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!paymentDetails.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(paymentDetails.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Please enter a valid 16-digit card number';
    }
    
    if (!paymentDetails.expiry.trim()) {
      newErrors.expiry = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(paymentDetails.expiry)) {
      newErrors.expiry = 'Please use MM/YY format';
    }
    
    if (!paymentDetails.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(paymentDetails.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits';
    }
    
    if (!address.line1.trim()) {
      newErrors.line1 = 'Address line 1 is required';
    }
    
    if (!address.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!address.state.trim()) {
      newErrors.state = 'State is required';
    }
    
    if (!address.pincode.trim()) {
      newErrors.pincode = 'Pincode is required';
    } else if (!/^\d{6}$/.test(address.pincode)) {
      newErrors.pincode = 'Please enter a valid 6-digit pincode';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      
      // Redirect to home after success
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string,
    stateUpdater: React.Dispatch<React.SetStateAction<any>>
  ) => {
    stateUpdater((prev: any) => ({
      ...prev,
      [field]: e.target.value
    }));
  };
  
  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <CheckCircle size={64} className="mx-auto text-green-500" />
          <h2 className="mt-4 text-2xl font-bold text-gray-800">Payment Successful!</h2>
          <p className="mt-2 text-gray-600">
            Your order has been placed successfully. Thank you for shopping with Apna Zone!
          </p>
          <p className="mt-4 text-sm text-gray-500">
            You will be redirected to the homepage shortly...
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Address</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="line1" className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 1 *
                    </label>
                    <input
                      type="text"
                      id="line1"
                      value={address.line1}
                      onChange={(e) => handleInputChange(e, 'line1', setAddress)}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.line1 ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.line1 && <p className="mt-1 text-sm text-red-500">{errors.line1}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="line2" className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="line2"
                      value={address.line2}
                      onChange={(e) => handleInputChange(e, 'line2', setAddress)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={address.city}
                        onChange={(e) => handleInputChange(e, 'city', setAddress)}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.city ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.city && <p className="mt-1 text-sm text-red-500">{errors.city}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="state"
                        value={address.state}
                        onChange={(e) => handleInputChange(e, 'state', setAddress)}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.state ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.state && <p className="mt-1 text-sm text-red-500">{errors.state}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="pincode"
                      maxLength={6}
                      value={address.pincode}
                      onChange={(e) => handleInputChange(e, 'pincode', setAddress)}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.pincode ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.pincode && <p className="mt-1 text-sm text-red-500">{errors.pincode}</p>}
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Details</h2>
                
                <div className="flex items-center mb-4">
                  <CreditCard size={20} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-500">
                    We accept all major credit cards
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={paymentDetails.name}
                      onChange={(e) => handleInputChange(e, 'name', setPaymentDetails)}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      maxLength={19}
                      value={paymentDetails.cardNumber}
                      onChange={(e) => {
                        const formattedValue = formatCardNumber(e.target.value);
                        setPaymentDetails(prev => ({
                          ...prev,
                          cardNumber: formattedValue
                        }));
                      }}
                      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="XXXX XXXX XXXX XXXX"
                    />
                    {errors.cardNumber && <p className="mt-1 text-sm text-red-500">{errors.cardNumber}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        id="expiry"
                        maxLength={5}
                        value={paymentDetails.expiry}
                        onChange={(e) => {
                          const value = e.target.value;
                          // Format as MM/YY
                          let formatted = value.replace(/[^\d]/g, '');
                          if (formatted.length > 2) {
                            formatted = `${formatted.slice(0, 2)}/${formatted.slice(2, 4)}`;
                          }
                          setPaymentDetails(prev => ({
                            ...prev,
                            expiry: formatted
                          }));
                        }}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.expiry ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="MM/YY"
                      />
                      {errors.expiry && <p className="mt-1 text-sm text-red-500">{errors.expiry}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV *
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        maxLength={3}
                        value={paymentDetails.cvv}
                        onChange={(e) => {
                          const value = e.target.value.replace(/[^\d]/g, '');
                          setPaymentDetails(prev => ({
                            ...prev,
                            cvv: value
                          }));
                        }}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.cvv ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="XXX"
                      />
                      {errors.cvv && <p className="mt-1 text-sm text-red-500">{errors.cvv}</p>}
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <div className="bg-gray-50 p-4 rounded-md mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">₹{getCartTotal()}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">₹0</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between">
                      <span className="font-bold text-gray-800">Total</span>
                      <span className="font-bold text-gray-800">₹{getCartTotal()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <ShieldCheck size={20} className="text-green-500 mr-2" />
                    <span className="text-sm text-gray-500">
                      Your payment information is secure
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className={`w-full bg-[#FF6B35] hover:bg-[#FF8C55] text-white py-3 px-4 rounded-md transition-colors ${
                      isProcessing ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isProcessing ? 'Processing...' : `Pay ₹${getCartTotal()}`}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;