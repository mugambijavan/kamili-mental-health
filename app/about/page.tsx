'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { 
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HandRaisedIcon,
  SparklesIcon } from '@heroicons/react/24/outline';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 150,
      easing: 'ease-in-out-quad',
    });
  }, []);

  const stats = [
    { id: 1, name: 'Clinics Nationwide', value: '30', suffix: '+' },
    { id: 2, name: 'Patients Supported', value: '14k', suffix: '+' },
    { id: 3, name: 'Trained Nurses', value: '156', suffix: '' },
  ];

  const values = [
    {
      icon: HeartIcon,
      title: 'Compassionate Care',
      description: 'Holistic approach focusing on emotional and psychological well-being',
      color: 'bg-pink-50',
      anim: 'fade-right'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Confidentiality',
      description: 'Safe space for healing with strict privacy standards',
      color: 'bg-blue-50',
      anim: 'fade-up'
    },
    {
      icon: UserGroupIcon,
      title: 'Community Support',
      description: 'Building strong support networks for lasting recovery',
      color: 'bg-green-50',
      anim: 'fade-left'
    },
  ];

  const team = [
    { 
      name: 'Melanie Blake',
      role: 'Founder & CEO',
      image: '/team/melanie.jpg',
      bio: 'MBE recipient for mental health advocacy'
    },
    { 
      name: 'Dr. Wanjiru Mwangi',
      role: 'Clinical Director',
      image: '/team/wanjiru.jpg',
      bio: '15+ years in psychiatric care'
    },
    { 
      name: 'Peter Kariuki',
      role: 'Community Outreach',
      image: '/team/peter.jpg',
      bio: 'Mental health awareness expert'
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Healing Minds, <br className="hidden md:block"/>Transforming Lives
          </h1>
          <p 
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto opacity-95 font-light"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Pioneering mental wellness in Kenya since 2009 through compassionate care and community empowerment
          </p>
          
          <div 
            className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 6000 }}
              pagination={{ clickable: true }}
              className="aspect-video"
            >
              {[1, 2, 3].map((slide) => (
                <SwiperSlide key={slide}>
                  <div className="relative h-full w-full">
                    <Image 
                      src={`/therapy-${slide}.jpg`}
                      fill
                      className="object-cover"
                      alt="Mental health care"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Statistics Grid */}
      <section className="py-20 bg-white/90 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50"
                data-aos="zoom-in"
                data-aos-delay={stat.id * 100}
              >
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {stat.value}
                  <span className="text-indigo-500">{stat.suffix}</span>
                </div>
                <div className="text-gray-600 font-medium">{stat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div 
              className="flex flex-col md:flex-row gap-8 items-center"
              data-aos="fade-right"
            >
              <div className="flex-1">
                <AcademicCapIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Foundation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2009 by Melanie Blake, Kamili began with two struggling clinics in Nairobi and underserved communities. 
                  What started as a mission to prevent clinic closures has grown into a national movement for mental health awareness and care.
                </p>
              </div>
              <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden">
                <Image src="/foundation.jpg" fill className="object-cover" alt="Clinic foundation" />
              </div>
            </div>

            <div 
              className="flex flex-col md:flex-row-reverse gap-8 items-center"
              data-aos="fade-left"
            >
              <div className="flex-1">
                <HandRaisedIcon className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-4">Holistic Approach</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our care model integrates clinical treatment with community education, family support, and vocational training. 
                  We believe true healing happens when individuals feel supported in all aspects of their lives.
                </p>
              </div>
              <div className="flex-1 relative aspect-video rounded-2xl overflow-hidden">
                <Image src="/therapy-session.jpg" fill className="object-cover" alt="Therapy session" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            data-aos="fade-up"
          >
            Our Care Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className={`p-8 rounded-2xl ${value.color} transition-all duration-500 hover:translate-y-2`}
                data-aos={value.anim}
                data-aos-delay={index * 200}
              >
                <value.icon className="h-16 w-16 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            data-aos="fade-up"
          >
            Healing Guardians
          </h2>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
            data-aos="zoom-in"
          >
            {team.map((member) => (
              <SwiperSlide key={member.name} className="pb-8">
                <div className="bg-white mx-4 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                    <Image 
                      src={member.image}
                      fill
                      className="object-cover"
                      alt={member.name}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white"
        data-aos="fade-up"
      >
        <div className="container mx-auto px-4 text-center">
          <SparklesIcon className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold mb-6">Join Our Healing Journey</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto font-light">
            Together, we can break the stigma and build a mentally healthier Kenya
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/volunteer"
              className="bg-white/10 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <HandRaisedIcon className="h-5 w-5" />
              Volunteer Now
            </Link>
            <Link
              href="/donate"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
            >
              <HeartIcon className="h-5 w-5" />
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}