'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

// Initialize AOS in all components
const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);
  return null;
};
// Donate Page
export default function Donate() {
  return (
    <div className="bg-gray-50">
      <AOSInit />
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Support Our Cause
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Your contribution makes a real difference
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6">Quick Donate</h2>
              <div className="space-y-4">
                {[50, 100, 250, 500].map((amount) => (
                  <button 
                    key={amount}
                    className="w-full bg-green-100 text-green-700 p-4 rounded-lg hover:bg-green-200 transition-colors"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg" data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-6">Custom Amount</h2>
              <input 
                type="number" 
                placeholder="Enter amount" 
                className="w-full p-4 border rounded-lg mb-4"
              />
              <button className="w-full bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}