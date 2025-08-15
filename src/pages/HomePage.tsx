import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import { getProductsByCategory } from '../data/products';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Apna Zone - Home';
  }, []);

  const featuredBooks = getProductsByCategory('books').slice(0, 4);
  const featuredAccessories = getProductsByCategory('accessories').slice(0, 4);
  const featuredElectronics = getProductsByCategory('electronics').slice(0, 4);

  return (
    <div>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid products={featuredBooks} title="Featured Books" />
        <ProductGrid products={featuredAccessories} title="Popular Accessories" />
        <ProductGrid products={featuredElectronics} title="Electronics for Projects" />
        
        <div className="bg-gray-100 rounded-lg p-8 my-10">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Why Choose Apna Zone?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Student-Friendly Prices</h3>
              <p className="text-gray-600">All products are priced keeping student budgets in mind.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Quality Products</h3>
              <p className="text-gray-600">Curated selection of high-quality study materials and tools.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Fast Delivery</h3>
              <p className="text-gray-600">Quick delivery to colleges and hostels across India.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;