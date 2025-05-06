'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import 'aos/dist/aos.css';
import { 
  HandRaisedIcon,
  UserGroupIcon,
  BriefcaseIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 120,
      easing: 'ease-in-out-quad'
    });
  }, []);
  return null;
};

export default function GetInvolved() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <AOSInit />
      
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            data-aos="fade-up"
          >
            Become a Mental Health Champion
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-95 font-light"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Join a leading mental health movement and help create lasting change
          </p>
        </div>
      </section>

      {/* Involvement Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: HandRaisedIcon,
                title: 'Clinical Support',
                text: 'Volunteer at our clinics or community outreach programs',
                link: '/volunteer-application',
                color: 'bg-indigo-50'
              },
              { 
                icon: UserGroupIcon,
                title: 'Community Advocate',
                text: 'Help raise awareness and reduce mental health stigma',
                link: '/community-programs',
                color: 'bg-blue-50'
              },
              { 
                icon: BriefcaseIcon,
                title: 'Professional Partner',
                text: 'Corporate partnerships for employee mental health programs',
                link: '/corporate-partnerships',
                color: 'bg-purple-50'
              },
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`p-8 rounded-2xl ${item.color} transition-all duration-300 hover:translate-y-2 hover:shadow-xl border border-white`}
                data-aos="flip-up"
                data-aos-delay={index * 150}
              >
                <item.icon className="h-16 w-16 text-indigo-600 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.text}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
                >
                  Get Started
                  <span className="text-xl animate-pulse">→</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div 
            className="mt-20 max-w-2xl mx-auto text-center bg-white rounded-2xl p-8 shadow-lg"
            data-aos="zoom-in"
          >
            <HeartIcon className="h-16 w-16 text-red-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Cannot Volunteer? Consider Donating
            </h3>
            <p className="text-gray-600 mb-6">
              Your financial support helps us maintain clinics and expand services
            </p>
            <Link
              href="/donate"
              className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2"
            >
              <span>Make a Difference</span>
              <HeartIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}