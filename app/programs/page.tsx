'use client';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import { 
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChatBubbleLeftRightIcon,
  FaceSmileIcon } from '@heroicons/react/24/outline';
import { BrainIcon } from 'lucide-react';

export default function Programs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 200,
    });
  }, []);


  return (
    <div className="bg-slate-50">
      {/* Clinical Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-800 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Comprehensive Mental Health Care
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95 font-light">
            Evidence-based treatments and compassionate support for lasting wellness
          </p>
          
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 6000 }}
              className="aspect-video bg-gray-900"
            >
              {[1, 2, 3].map((slide) => (
                <SwiperSlide key={slide}>
                  <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                    <span className="text-2xl">Clinical Environment Preview {slide}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>



      {/* Clinical Programs Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-800">
            Our Treatment Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: BrainIcon,
                title: 'Anxiety Disorders',
                desc: 'Cognitive Behavioral Therapy & mindfulness techniques',
                color: 'bg-blue-50'
              },
              { 
                icon: HeartIcon,
                title: 'Mood Disorders',
                desc: 'Depression & bipolar disorder management programs',
                color: 'bg-rose-50'
              },
              { 
                icon: ChatBubbleLeftRightIcon,
                title: 'Trauma Therapy',
                desc: 'EMDR and trauma-focused CBT treatments',
                color: 'bg-teal-50'
              },
              { 
                icon: UserGroupIcon,
                title: 'Group Therapy',
                desc: 'Support groups for various mental health challenges',
                color: 'bg-indigo-50'
              },
              { 
                icon: AcademicCapIcon,
                title: 'Youth Programs',
                desc: 'Specialized care for children and adolescents',
                color: 'bg-amber-50'
              },
              { 
                icon: ShieldCheckIcon,
                title: 'Crisis Intervention',
                desc: '24/7 emergency psychiatric services',
                color: 'bg-purple-50'
              },
            ].map((program, idx) => (
              <div 
                key={idx}
                className={`p-8 rounded-xl ${program.color} transition-all hover:shadow-lg border border-transparent hover:border-blue-200`}
                data-aos="fade-up"
              >
                <program.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{program.title}</h3>
                <p className="text-slate-600 leading-relaxed">{program.desc}</p>
                <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  View Treatment Options →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" data-aos="fade-up">
              Our Clinical Philosophy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Evidence-Based', desc: 'Clinically proven treatment methods' },
                { title: 'Holistic Care', desc: 'Mind-body wellness integration' },
                { title: 'Continuity', desc: 'Long-term recovery planning' },
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="p-6 bg-white/10 rounded-xl backdrop-blur-sm"
                  data-aos="zoom-in"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-blue-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Care CTA */}
      <section className="py-20 bg-rose-100">
        <div className="container mx-auto px-4 text-center">
          <div 
            className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-xl"
            data-aos="zoom-in"
          >
            <ShieldCheckIcon className="h-16 w-16 text-rose-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              24/7 Crisis Support Available
            </h2>
            <p className="text-slate-600 mb-8">
              Immediate help for mental health emergencies
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/emergency"
                className="bg-rose-600 text-white px-8 py-4 rounded-full font-bold hover:bg-rose-700 transition-colors"
              >
                Emergency Contact
              </a>
              <a
                href="/therapists"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
              >
                Speak to a Therapist
              </a>
            </div>
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