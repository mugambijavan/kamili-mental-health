'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';

import { Autoplay, Pagination } from 'swiper/modules';

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

// Success Stories Page
export default function SuccessStories() {
  return (
    <div className="bg-gray-50">
      <AOSInit />
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            Impact Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Discover how we are transforming lives together
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            pagination={{ clickable: true }}
            className="max-w-4xl mx-auto"
            data-aos="zoom-in"
          >
            {[1, 2, 3].map((slide) => (
              <SwiperSlide key={slide} className="p-8 bg-gray-100 rounded-2xl">
                <div className="text-center">
                  <p className="text-lg italic mb-6">This program completely changed my life and gave me hope for the future.</p>
                  <h4 className="font-bold">— Story #{slide}</h4>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}