'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { 
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  SparklesIcon,
  BuildingLibraryIcon,
  ChartBarIcon,
  ScaleIcon, 
  HandRaisedIcon,
  HeartIcon,
  FaceSmileIcon} from '@heroicons/react/24/outline';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      offset: 150,
      easing: 'ease-in-out-quad',
    });
  }, []);

  const milestones = [
    { year: '2009', title: 'Founded in Nairobi', description: 'Established first two community mental health clinics' },
    { year: '2012', title: 'National Expansion', description: 'Opened clinics in 5 major counties' },
    { year: '2015', title: 'Award-Winning Programs', description: 'Received UN Public Service Award' },
    { year: '2020', title: 'Digital Innovation', description: 'Launched telepsychiatry platform' },
    { year: '2023', title: 'Regional Leadership', description: 'Recognized as East Africa\'s top mental health provider' },
  ];

  const services = [
    { icon: ScaleIcon, title: 'Crisis Intervention', stats: '2.1k+ cases annually' },
    { icon: ChartBarIcon, title: 'Therapy Sessions', stats: '45k+ hours delivered' },
    { icon: BuildingLibraryIcon, title: 'Community Training', stats: '320+ workshops' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/image011.jpeg"
            fill
            className="object-cover object-center"
            alt="Mental health professionals"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />
        </div>
        
        <div className="relative h-full flex items-end pb-20 container px-4">
          <div className="max-w-4xl text-white" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Compassionate Mental Wellness Solutions
            </h1>
            <div className="flex gap-8 text-lg">
              <div className="border-l-4 border-white/30 pl-4">
                <p className="font-light">14+ Years</p>
                <p className="font-bold">of Trusted Care</p>
              </div>
              <div className="border-l-4 border-white/30 pl-4">
                <p className="font-light">98%</p>
                <p className="font-bold">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-blue-50">
        <div className="container px-4 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <service.icon className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-blue-600 font-semibold">{service.stats}</p>
              <p className="text-gray-600 mt-4">Comprehensive support programs tailored to individual needs</p>
            </div>
          ))}
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
                <Image src="/image011.jpeg" fill className="object-cover" alt="Clinic foundation" />
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
                <Image src="/image016.jpeg" fill className="object-cover" alt="Therapy session" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 container px-4">
        <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up">
          Our Journey of Care
        </h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 w-1 bg-blue-100 h-full -translate-x-1/2" />
          {milestones.map((milestone, index) => (
            <div 
              key={milestone.year}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div className="w-1/2 px-8">
                <div className="bg-white p-6 rounded-xl shadow-md border border-blue-50">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</h3>
                  <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
              Our Core Principles
            </h2>
            <p className="text-xl text-blue-200" data-aos="fade-up" data-aos-delay="200">
              Guiding every decision and interaction in our care ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              data-aos="zoom-in"
            >
              <ShieldCheckIcon className="h-12 w-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Ethical Practice</h3>
              <p className="text-blue-200">Adherence to highest medical standards with regular audits</p>
            </div>
            <div 
              className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <UserGroupIcon className="h-12 w-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Community Focus</h3>
              <p className="text-blue-200">Grassroots programs addressing cultural needs</p>
            </div>
            <div 
              className="p-8 bg-white/5 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <AcademicCapIcon className="h-12 w-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Continuous Learning</h3>
              <p className="text-blue-200">Annual staff training on latest therapies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 container px-4">
        <h2 className="text-4xl font-bold mb-16 text-center" data-aos="fade-up">
          Leadership Team
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div 
            className="group relative overflow-hidden rounded-2xl bg-blue-50"
            data-aos="flip-left"
          >
            <Image
              src="/team/melanie.jpg"
              width={600}
              height={800}
              className="object-cover group-hover:scale-105 transition-transform"
              alt="Melanie Blake"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent p-6 flex flex-col justify-end">
              <h3 className="text-2xl font-bold text-white mb-2">Melanie Blake</h3>
              <p className="text-blue-200 font-semibold">Founder & CEO</p>
              <p className="text-white/90 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Mental health advocate with 20+ years experience
              </p>
            </div>
          </div>
          {/* Repeat similar structure for other team members */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-gray-900 text-white overflow-hidden">
        <Image
          src="/image014.jpeg"
          fill
          className="object-cover opacity-20"
          alt="Community support"
        />
        <div className="relative container px-4 text-center">
          <SparklesIcon className="h-16 w-16 mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl font-bold mb-6" data-aos="fade-up">
            Become Part of the Change
          </h2>
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
      {/* Professional Accreditation */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center text-slate-600 max-w-3xl mx-auto">
            <FaceSmileIcon className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <p className="text-xl mb-4">
              Kamili Clinic is accredited by the Kenya Mental Health Association
              and staffed with licensed psychiatric professionals
            </p>
            <div className="flex justify-center gap-8 mt-8">
              {/* Accreditation logos would go here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}