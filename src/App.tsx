import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import AccessoriesPage from './pages/AccessoriesPage';
import ElectronicsPage from './pages/ElectronicsPage';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { CartProvider } from './context/CartContext';
import ProductDetailsPage from './pages/ProductDetailsPage';


function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/electronics" element={<ElectronicsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage/>}/>
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;