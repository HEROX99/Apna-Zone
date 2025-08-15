import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { ShoppingCart, ArrowLeft, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const imgContainerRef = useRef<HTMLDivElement | null>(null);

  if (!product) return <div className="text-center mt-10 text-red-600">Product not found!</div>;

  const images = product.images || [product.image];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWheelZoom = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!isFullscreen) return;
    e.preventDefault();
    setZoom((prevZoom) => {
      const newZoom = prevZoom + e.deltaY * -0.001;
      return Math.min(Math.max(newZoom, 1), 3);
    });
  };

  useEffect(() => {
    if (!isFullscreen) setZoom(1);
  }, [isFullscreen]);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative" ref={imgContainerRef}>
          <img
            src={images[currentImageIndex]}
            alt={product.name}
            className="rounded-lg shadow-lg object-contain w-full max-h-[500px] cursor-pointer"
            onClick={() => setIsFullscreen(true)}
          />
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow"
              >
                ‹
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow"
              >
                ›
              </button>
            </>
          )}
          <div className="flex justify-center mt-2 space-x-1">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === currentImageIndex ? 'bg-orange-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-sm text-gray-500 mb-4">Subcategory: {product.subcategory}</p>
            <p className="text-2xl font-bold text-orange-600 mb-6">₹{product.price}</p>

            {product.features && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Features:</h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                  {product.features.map((f, idx) => <li key={idx}>{f}</li>)}
                </ul>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-[#FF6B35] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#ff874d] transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button
              onClick={() => navigate(-1)}
              className="bg-[#FF6B35] text-white px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#ff874d] transition"
            >
              <ArrowLeft size={20} />
              Back
            </button>
          </div>
        </div>
      </div>

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center"
          onWheel={handleWheelZoom}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>

          <img
            src={images[currentImageIndex]}
            alt="fullscreen-img"
            className="object-contain rounded shadow-xl"
            style={{ transform: `scale(${zoom})`, transition: 'transform 0.2s ease-in-out', maxWidth: '90%', maxHeight: '90%' }}
          />

          {images.length > 1 && (
            <div className="flex gap-6 mt-4 text-white text-3xl">
              <button onClick={handlePrevImage} className="hover:text-orange-400">‹</button>
              <button onClick={handleNextImage} className="hover:text-orange-400">›</button>
            </div>
          )}

          <div className="flex mt-4 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${currentImageIndex === index ? 'bg-orange-500' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
