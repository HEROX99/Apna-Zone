import React, { useEffect } from 'react';
import { ShieldCheck, Truck, Users, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Apna Zone - About Us';
  }, []);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">About Apna Zone</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img 
            src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Engineering students" 
            className="w-full h-64 object-cover"
          />
          
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Apna Zone was founded in 2023 by a group of B.Tech under-graduates who understood the challenges 
              faced by engineering students in India. During our time at college, we often struggled 
              to find affordable textbooks, electronic components, and other essential items for our 
              studies and projects.
            </p>
            <p className="text-gray-600 mb-4">
              We created Apna Zone to solve this problem, offering a one-stop solution for all College
              students' needs at affordable prices. Our goal is to support the next generation of 
              engineers by providing easy access to quality educational materials and project components.
            </p>
            <p className="text-gray-600">
              Today, Apna Zone serves thousands of engineering students across India, and we're 
              continuously expanding our catalog to include more resources that help students excel 
              in their academic and project work.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">
                To empower engineering students with accessible, affordable, and quality educational 
                resources and project materials, enabling them to focus on learning and innovation 
                without worrying about availability or cost.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become India's leading online platform for engineering students, creating an 
                ecosystem that supports technical education and fosters a new generation of skilled 
                engineers and innovators.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex">
                <ShieldCheck size={24} className="text-[#3046C6] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Quality</h3>
                  <p className="text-gray-600 text-sm">
                    We ensure that all products meet high-quality standards and are relevant to 
                    engineering curriculum needs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <Truck size={24} className="text-[#3046C6] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Reliability</h3>
                  <p className="text-gray-600 text-sm">
                    We deliver what we promise, on time, and with excellent customer service.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <Users size={24} className="text-[#3046C6] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
                  <p className="text-gray-600 text-sm">
                    We build and nurture the engineering student community through our platform.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <Heart size={24} className="text-[#3046C6] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Passion</h3>
                  <p className="text-gray-600 text-sm">
                    We are passionate about education and technology, and helping students succeed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Team</h2>
            <p className="text-gray-600 text-center mb-6">
              We're a team of former B.Tech students who understand what engineering students need.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img src="/image/Himadri.jpg" alt="Himadri Mohan Sarkar" className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-md"/>
                <h3 className="font-semibold text-gray-800">Himadri Mohan Sarkar</h3>
                <p className="text-gray-500 text-sm">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <img src="/image/Ananaya.jpg" alt="Ananya" className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-md"/>
                <h3 className="font-semibold text-gray-800">Ananya Mukharjee</h3>
                <p className="text-gray-500 text-sm">Co-founder & Manager</p>
              </div>
              
              <div className="text-center">
                <img src="/image/Abhishek.jpg" alt="Abhishek" className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-md"/>
                <h3 className="font-semibold text-gray-800">Abhishek Modak</h3>
                <p className="text-gray-500 text-sm">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;