'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import { AcademicCapIcon, HeartIcon, BriefcaseIcon, BookOpenIcon, GlobeAltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Programs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);

  const stats = [
    { id: 1, name: 'Children Supported', value: '1.2k', suffix: '+' },
    { id: 2, name: 'Youth Employed', value: '650', suffix: '+' },
    { id: 3, name: 'Trees Planted', value: '15k', suffix: '+' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-center overflow-hidden">
        <div className="container mx-auto px-4" data-aos="fade-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 transform transition duration-500 hover:scale-105">
            Our Programs & Initiatives
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90" data-aos="fade-up" data-aos-delay="200">
            Empowering Communities, Transforming Lives
          </p>
          
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper max-w-4xl mx-auto rounded-xl shadow-2xl"
          >
            {[1, 2, 3].map((slide) => (
              <SwiperSlide key={slide}>
                <div className="h-64 bg-black/20 flex items-center justify-center">
                  <span className="text-xl">Program Highlight {slide}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Statistics Grid */}
      <div className="relative py-12 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                data-aos="zoom-in"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                  <span className="text-purple-600">{stat.suffix}</span>
                </div>
                <div className="text-gray-600">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="programSwiper mb-20"
          >
            {[
              { icon: HeartIcon, title: 'Orphans', color: 'bg-pink-100' },
              { icon: UserGroupIcon, title: 'Vulnerable Children', color: 'bg-blue-100' },
              { icon: BriefcaseIcon, title: 'Unemployed Youth', color: 'bg-green-100' },
              { icon: BookOpenIcon, title: 'School Dropouts', color: 'bg-yellow-100' },
              { icon: GlobeAltIcon, title: 'Environmental Care', color: 'bg-teal-100' },
              { icon: AcademicCapIcon, title: 'Single Mothers', color: 'bg-purple-100' },
            ].map((program, idx) => (
              <SwiperSlide key={idx}>
                <div 
                  className={`p-8 rounded-2xl ${program.color} transform transition duration-500 hover:scale-105 min-h-[400px]`}
                  data-aos="flip-left"
                >
                  <program.icon className="h-16 w-16 text-gray-800 mb-6" />
                  <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
                  <p className="text-gray-600 mb-4">
                    Explore our comprehensive support programs designed to empower and uplift.
                  </p>
                  <button className="mt-auto bg-white text-gray-800 px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow">
                    Learn More →
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Enhanced Conclusion Section */}
          <div 
            className="py-12 bg-blue-600 text-white text-center rounded-2xl shadow-2xl"
            data-aos="zoom-in"
          >
            <h2 className="text-4xl font-bold mb-6">Together, We Can Make a Difference!</h2>
            <p className="mb-8 text-xl max-w-2xl mx-auto">
              At <strong>Kamili</strong>, every effort contributes to a brighter future. Join our movement today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {[
                { label: 'Contact Us', href: '/contact' },
                { label: 'Donate Now', href: '/donate' },
                { label: 'Get Involved', href: '/get-involved' },
              ].map((btn, idx) => (
                <a
                  key={idx}
                  href={btn.href}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>

          {/* Animated Call to Action */}
          <div 
            className="py-16 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-bold mb-4">Join Our Mission Today</h2>
            <p className="mb-8 text-gray-600 max-w-xl mx-auto">
              Discover how you can create lasting change in your community. Let us build a better future together!
            </p>
            <div className="space-y-4">
              <p className="text-lg font-semibold hover:text-blue-600 transition-colors">
                ✉️ info@kamili.org
              </p>
              <p className="text-lg font-semibold hover:text-purple-600 transition-colors">
                📱 +1 (555) 123-4567
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
                  <button
                    key={platform}
                    className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}