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
// Contact Page
export default function Contact() {
  return (
    <div className="bg-gray-50">
      <AOSInit />
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We would love to hear from you
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="p-8 bg-white rounded-2xl shadow-lg" data-aos="zoom-in">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full p-3 border rounded-lg h-32"></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
