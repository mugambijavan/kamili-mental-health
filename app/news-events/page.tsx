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
// News & Events Page
export default function NewsEvents() {
  return (
    <div className="bg-gray-50">
      <AOSInit />
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-pink-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Latest Updates
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Stay informed about our initiatives and community events
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((post) => (
            <article 
              key={post}
              className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
            >
              <div className="h-48 bg-gray-200 rounded-xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Community Event #{post}</h3>
              <p className="text-gray-600 mb-4">Join us for our upcoming community development workshop</p>
              <button className="text-blue-600 hover:underline">Read More →</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
