import React, { useEffect } from 'react';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Apna Zone - Terms & Conditions';
  }, []);
  
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Terms and Conditions</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <p className="text-gray-600 mb-6">
            Last updated: June 15, 2023
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">1. Introduction</h2>
              <p className="text-gray-600">
                Welcome to Apna Zone ("we," "our," or "us"). These Terms and Conditions govern your use of our website and services. 
                By accessing or using our website, you agree to be bound by these Terms. If you disagree with any part of these terms, 
                you may not access our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">2. Definitions</h2>
              <p className="text-gray-600">
                "User," "You," and "Your" refers to you, the person accessing this website and accepting these Terms and Conditions.<br />
                "Company," "Ourselves," "We," "Our," and "Us," refers to Apna Zone.<br />
                "Party," "Parties," or "Us," refers to both the User and ourselves.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">3. Products</h2>
              <p className="text-gray-600">
                We sell academic books, stationery, accessories, and electronic components primarily for B.Tech students. 
                All product descriptions, including prices, are subject to change at any time without notice. 
                We reserve the right to discontinue any product at any time.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">4. Purchases and Payment</h2>
              <p className="text-gray-600">
                All prices are in Indian Rupees (₹). Payment can be made through the methods provided on our website. 
                By making a purchase, you warrant that:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
                <li>You are legally capable of entering into binding contracts;</li>
                <li>You are at least 18 years old;</li>
                <li>All information you provide to us is true, accurate, current, and complete.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">5. Shipping and Delivery</h2>
              <p className="text-gray-600">
                We ship to all major cities in India. Delivery times are estimated and not guaranteed. 
                We are not responsible for delays beyond our control, such as customs or postal delays. 
                Risk of loss and title for items purchased passes to you upon delivery.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">6. Returns and Refunds</h2>
              <p className="text-gray-600">
                You may return most new, unopened items within 7 days of delivery for a full refund. 
                Books must be in their original condition with no marks or damage. 
                Electronic components and accessories must be unopened and in their original packaging. 
                Refunds will be processed within 14 business days of receiving the returned item.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">7. User Account</h2>
              <p className="text-gray-600">
                You may need to create an account to make purchases. You are responsible for maintaining the confidentiality 
                of your account and password. You agree to accept responsibility for all activities that occur under your account.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">8. Prohibited Uses</h2>
              <p className="text-gray-600">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4 mt-2 space-y-1">
                <li>Use our website in any way that could damage, disable, or impair the site;</li>
                <li>Use any robot, spider, or other automatic device to access the site;</li>
                <li>Introduce viruses, trojans, worms, or other harmful material;</li>
                <li>Attempt to gain unauthorized access to any part of our website.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">9. Intellectual Property</h2>
              <p className="text-gray-600">
                The content, organization, graphics, design, and other matters related to our website are protected by 
                applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication 
                of any such content or any part of our site is prohibited without our express permission.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">10. Disclaimer of Warranties</h2>
              <p className="text-gray-600">
                Our website is provided "as is". We make no warranties, expressed or implied, and hereby disclaim all implied 
                warranties, including any warranty of merchantability and warranty of fitness for a particular purpose.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">11. Limitation of Liability</h2>
              <p className="text-gray-600">
                We shall not be liable for any direct, indirect, incidental, special, or consequential damages that result 
                from the use of, or the inability to use, our website or services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">12. Governing Law</h2>
              <p className="text-gray-600">
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its 
                conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">13. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these Terms at any time. We will notify of significant changes by posting 
                a notice on our website. Your continued use of the site after changes means you accept the new Terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-3">14. Contact Information</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:<br />
                Email: legal@apnazone.com<br />
                Phone: +91 98765 43210<br />
                Address: 123 College Road, Tech City, IN 400001
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;