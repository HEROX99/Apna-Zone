import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, Cpu } from 'lucide-react';
import smilingMan from '../image/Smiling_man.jpg'; 
const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Apna Zone</h1>
            <p className="text-xl mb-8">Your one-stop solution for all Collage needs. Quality products at affordable prices.</p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/books" 
                className="flex items-center bg-[#FF6B35] hover:bg-[#FF8C55] text-white px-6 py-3 rounded-md transition-colors"
              >
                <BookOpen className="mr-2" size={20} />
                Explore Books
              </Link>
              <Link 
                to="/electronics" 
                className="flex items-center bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-md transition-colors"
              >
                <Cpu className="mr-2" size={20} />
                College Essentials
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FF6B35] rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500 rounded-full opacity-30"></div>
              <img 
                src={smilingMan}
                alt="Students studying" 
                className="relative z-10 rounded-lg shadow-lg max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <BookOpen className="text-[#3046C6]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Academic Books</h3>
              <p className="text-gray-600">Find all your B.Tech textbooks and reference materials at student-friendly prices.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-orange-100 p-3 rounded-full mb-4">
                <PenTool className="text-[#FF6B35]" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Stationery & Accessories</h3>
              <p className="text-gray-600">Quality stationery, lab equipment, and everyday college accessories.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full mb-4">
                <Cpu className="text-purple-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Electronics & Components</h3>
              <p className="text-gray-600">Arduino, Raspberry Pi, electronic components, and project kits for engineering students.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;