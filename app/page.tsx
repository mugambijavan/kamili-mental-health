'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import { UserGroupIcon, BookOpenIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
      easing: 'ease-in-out-quad',
    });
  }, []);

  const initiatives = [
    {
      icon: ShieldCheckIcon,
      title: 'Clinical Services',
      description: 'Providing affordable mental health care through 30+ clinics nationwide',
      link: '/services',
      color: 'bg-blue-50',
    },
    {
      icon: UserGroupIcon,
      title: 'Nurse Training',
      description: 'Training mental health professionals across 44 counties',
      link: '/training',
      color: 'bg-green-50',
    },
    {
      icon: BookOpenIcon,
      title: 'Community Outreach',
      description: 'Educating communities about mental health awareness',
      link: '/outreach',
      color: 'bg-purple-50',
    },
  ];

  const stats = [
    { id: 1, value: '14,000+', label: 'Patients Supported' },
    { id: 2, value: '156', label: 'Trained Nurses' },
    { id: 3, value: '44', label: 'Counties Reached' },
  ];


  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      {/* Hero Section */}
<section className="relative h-screen">
  <div className="absolute inset-0 z-0">
    <Swiper
      modules={[Autoplay, Pagination, EffectFade]}
      effect="fade"
      speed={1000}
      loop={true}
      autoplay={{ 
        delay: 4000,
        disableOnInteraction: false,
        waitForTransition: true
      }}
      pagination={{ 
        clickable: true,
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination-bullet',
        bulletActiveClass: 'swiper-pagination-bullet-active'
      }}
      className="h-full"
    >
      {['/image030.jpeg', '/image031.jpeg'].map((img, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-full w-full">
            <Image 
              src={img}
              fill
              className="object-cover object-center"
              alt="Dairy Farming"
              priority
              quality={80}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <div className="relative z-10 h-full flex items-center">
    <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
            <h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-xl"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Transforming Mental Health<br className="hidden md:block"/> in Kenya
            </h1>
            <p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95 font-light"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Compassionate care and community education since 2009
            </p>
            <Link
              href="/donate"
              className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <span>Support Our Work</span>
              <span className="text-xl animate-pulse">→</span>
            </Link>
          </div>
  </div>

  {/* Pagination */}
  <div className="absolute bottom-10 left-0 right-0 z-20">
    <div className="container flex justify-center">
      <div className="swiper-pagination !relative !bottom-0" />
    </div>
  </div>
</section>


      {/* Mission Section */}
      <section className="py-20 bg-white/90 backdrop-blur-lg" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
              Our Vision for Kenya
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div 
                className="relative aspect-video rounded-2xl shadow-xl overflow-hidden"
                data-aos="zoom-in-right"
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/kamili-video"
                  title="Kamili Mission Video"
                  allowFullScreen
                />
              </div>
              
              <div className="space-y-6" data-aos="fade-left">
                <p className="text-lg leading-relaxed text-gray-700">
                  Founded in 2009 by Melanie Blake, Kamili has grown from two clinics to becoming a leading mental health provider. Our Nairobi model clinic offers comprehensive care including diagnosis, treatment, and family support.
                </p>
                <div 
                  className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3 className="text-xl font-bold mb-2 text-blue-800">Royal Recognition</h3>
                  <p className="text-gray-700">2017 MBE recipient for outstanding mental health services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-indigo-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Our Holistic Programs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div 
                key={initiative.title}
                className={`p-8 rounded-2xl ${initiative.color} transition-all duration-300 hover:translate-y-2 hover:shadow-xl border border-white`}
                data-aos="flip-up"
                data-aos-delay={index * 150}
              >
                <initiative.icon className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{initiative.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{initiative.description}</p>
                <Link
                  href={initiative.link}
                  className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
                >
                  Explore Program
                  <span className="text-xl">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-aos="fade-up">
            Nationwide Impact
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div 
                key={stat.id}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-blue-100"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}