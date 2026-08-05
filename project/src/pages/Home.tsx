import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  HeartPulse,
  Wallet,
  Star,
  ArrowRight,
  Sparkles,
  Award,
  Users,
  Calendar,
  Stethoscope,
  GraduationCap,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Smile,
  Shield,
  BadgeCheck,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import AppointmentForm from "@/components/AppointmentForm";
import StarAnalytics from "@/components/StarAnalytics";

const heroBg = "https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const clinicImage = "https://images.pexels.com/photos/305567/pexels-photo-305567.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2";

// Cartoonic smiley doctor dummy illustrations
const doctor1Image = "https://img.freepik.com/free-vector/cute-doctor-holding-stethoscope-cartoon-vector-icon-illustration-people-healthcare-icon-concept-isolated_138676-5692.jpg";
const doctor2Image = "https://img.freepik.com/free-vector/cute-female-doctor-with-stethoscope-cartoon-vector-icon-illustration-people-medical-icon-concept-isolated_138676-5704.jpg";

const damagedToothImg = "https://everysmile.co.za/wp-content/uploads/2023/02/decayed-teeth.webp";
const repairedToothImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcwd0Gykk350pt0E47dT7TC16A-InXVG4e93dIqLr0ew&s=10";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Professional Navigation Bar */}
      <div className="bg-navy-950 text-white py-2 px-4 sm:px-6 lg:px-8 border-b border-navy-900 text-xs sm:text-sm">
        <div className="container-max flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <div className="flex items-center gap-1.5 text-navy-200">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Sadiqabad & Bangla Manthar</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-navy-200 border-l border-navy-800 pl-4">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Mon-Sat: 9AM - 9PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:03086838555" 
              className="flex items-center gap-1.5 text-navy-200 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-amber-400 shrink-0 animate-pulse" />
              <span>Call Us Now: <strong className="text-white tracking-wide">0308-6838555</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section with Enhanced Layout */}
      <section
        className="relative overflow-hidden pt-12 lg:pt-20 pb-16 lg:pb-24"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 29, 66, 0.94) 0%, rgba(22, 40, 90, 0.90) 50%, rgba(30, 58, 122, 0.88) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 grid-bg-dark opacity-50" />
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-navy-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-navy-300/10 blur-3xl" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-sm animate-fade-in">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs sm:text-sm font-medium text-navy-100 tracking-wide">
                  {t.hero?.badge || "Trusted Dental Care in Sadiqabad"}
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 text-balance animate-fade-in-up">
                Your Smile, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-navy-100 to-amber-200">
                  Our Ultimate Passion
                </span>
              </h1>
              
              <p className="text-base sm:text-lg text-navy-200 leading-relaxed mb-8 max-w-xl animate-fade-in-up delay-100">
                {t.hero?.subtitle || "Experience world-class dental care with modern, pain-free treatments, advanced technology, and a dedicated patient-first approach."}
              </p>

              <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-200">
                <a
                  href="#appointment"
                  className="flex items-center gap-2.5 bg-white text-navy-950 hover:bg-navy-50 font-bold px-7 py-4 rounded-2xl transition-all duration-300 shadow-xl shadow-navy-950/30 hover:-translate-y-0.5 text-sm sm:text-base group"
                >
                  <Calendar className="w-5 h-5 text-navy-700 group-hover:scale-110 transition-transform" />
                  <span>{t.hero?.cta || "Book Appointment"}</span>
                </a>
                
                <Link
                  to="/services"
                  className="flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-6 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base backdrop-blur-sm"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Indicators / Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/15 animate-fade-in-up delay-300">
                {[
                  { icon: Users, value: "5,000+", label: "Happy Patients" },
                  { icon: Award, value: "5+", label: "Years Experience" },
                  { icon: HeartPulse, value: "9+", label: "Specialist Services" },
                  { icon: Star, value: "4.9", label: "Patient Rating" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                    <stat.icon className="w-4 h-4 text-amber-400 mb-1" />
                    <div className="text-xl font-extrabold text-white">{stat.value}</div>
                    <div className="text-[11px] text-navy-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-5 animate-slide-in-right" id="appointment">
              <div className="bg-white/95 backdrop-blur-xl p-2 rounded-3xl shadow-2xl border border-white/20">
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white relative grid-bg-fine">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader title={t.whyChoose.title} subtitle={t.whyChoose.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: ShieldCheck, title: t.whyChoose.f1Title, desc: t.whyChoose.f1Desc },
              { icon: HeartPulse, title: t.whyChoose.f2Title, desc: t.whyChoose.f2Desc },
              { icon: Wallet, title: t.whyChoose.f3Title, desc: t.whyChoose.f3Desc },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-navy-100 p-7 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1.5 transition-all duration-400 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-navy-900 flex items-center justify-center mb-5 transition-all duration-400 shadow-sm">
                  <feature.icon className="w-7 h-7 text-navy-800 group-hover:text-amber-400 transition-colors duration-400" />
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-2">{feature.title}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER TRANSFORMATIONS SECTION WITH INTERACTIVE SLIDER */}
      <section className="section-padding bg-navy-50/60 relative overflow-hidden">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader 
            title={t.gallery?.title || "Real Patient Results"} 
            subtitle={t.gallery?.subtitle || "Explore our actual case studies featuring interactive before & after sliders showing incredible restoration transformations."} 
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                id: 1,
                title: "Case Study 01",
                procedure: "Complete Restoration",
                description: "Remarkable transformation resolving structural decay and severe damage with a clean, flawless finish.",
                damagedImg: damagedToothImg,
                betterImg: repairedToothImg,
              },
              {
                id: 2,
                title: "Case Study 02",
                procedure: "Aesthetic Enhancement",
                description: "Subtle yet striking improvements correcting previous wear and alignment to achieve peak appearance.",
                damagedImg: damagedToothImg,
                betterImg: repairedToothImg,
              },
              {
                id: 3,
                title: "Case Study 03",
                procedure: "Advanced Correction",
                description: "Complex structural corrections completed seamlessly with long-lasting healthy functional results.",
                damagedImg: damagedToothImg,
                betterImg: repairedToothImg,
              }
            ].map((caseItem) => (
              <InteractiveSliderCard key={caseItem.id} item={caseItem} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section - Completely Redesigned & Enhanced UI */}
      <section className="section-padding bg-gradient-to-b from-white via-navy-50/30 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-navy-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title={t.doctors.title} subtitle={t.doctors.subtitle} />
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mt-12">
            <DoctorCard
              image={doctor1Image}
              name={t.doctors.doctor1Name}
              role={t.doctors.doctor1Role}
              bio={t.doctors.doctor1Bio}
              bio2={t.doctors.doctor1Bio2}
              badge="Lead Consultant"
              experience="8+ Years Experience"
              specialization="Orthodontics & Implantology"
              delay={0}
            />
            <DoctorCard
              image={doctor2Image}
              name={t.doctors.doctor2Name}
              role={t.doctors.doctor2Role}
              bio={t.doctors.doctor2Bio}
              bio2={t.doctors.doctor2Bio2}
              badge="Senior Dental Surgeon"
              experience="6+ Years Experience"
              specialization="Cosmetic & Restorative Dentistry"
              delay={0.15}
            />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-8 border-t border-navy-100/80">
            {[
              { icon: Award, title: t.doctors.exp1Title, desc: t.doctors.exp1Desc },
              { icon: GraduationCap, title: t.doctors.exp2Title, desc: t.doctors.exp2Desc },
              { icon: HeartPulse, title: t.doctors.exp3Title, desc: t.doctors.exp3Desc },
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-start gap-4 p-6 rounded-3xl bg-white border border-navy-100 shadow-sm hover:shadow-xl hover:border-navy-200 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-amber-400 shadow-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-navy-950 text-base mb-1.5">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-navy-50/50 relative grid-bg-fine">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader title={t.services.title} subtitle={t.services.subtitle} />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {t.services.items.map((service, i) => (
              <Link
                key={i}
                to="/services"
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-navy-100 hover:border-navy-300 hover:shadow-xl hover:shadow-navy-900/10 hover:-translate-y-1.5 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.04}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-navy-50 group-hover:bg-navy-900 flex items-center justify-center mb-4 transition-all duration-300 shadow-sm">
                  <Sparkles className="w-6 h-6 text-navy-700 group-hover:text-amber-400 transition-colors" />
                </div>
                <h3 className="font-bold text-navy-950 text-base mb-1.5">{service.name}</h3>
                <p className="text-xs text-navy-600 leading-relaxed line-clamp-2">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold">
              {t.nav.services}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Analytics Preview */}
      <section className="section-padding bg-white relative grid-bg">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader title={t.reviews.title} subtitle={t.reviews.subtitle} />
          <div className="mt-10">
            <StarAnalytics />
          </div>
          <div className="text-center mt-10">
            <Link to="/reviews" className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold shadow-lg">
              {t.reviews.seeAll}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vision / About preview */}
      <section className="section-padding bg-navy-50/50 relative grid-bg-fine">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionHeader title={t.vision.title} subtitle={t.vision.subtitle} left />
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {t.vision.items.slice(0, 4).map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-navy-100 hover:shadow-md transition-all animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <h4 className="font-bold text-navy-950 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-navy-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-navy-900/20 animate-scale-in">
              <img src={clinicImage} alt="TM&DC Clinic" className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent flex items-end p-8">
                <blockquote className="text-white">
                  <p className="text-base font-semibold italic mb-2">"{t.vision.quote}"</p>
                  <p className="text-sm text-navy-200 font-medium">— {t.vision.quoteAuthor}</p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Location Section */}
      <section className="section-padding bg-white relative">
        <div className="container-max px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader 
            title="Visit Our Clinic" 
            subtitle="Find us easily at our main branch location near Rahim Yar Khan." 
          />
          <div className="mt-10 bg-white p-4 rounded-3xl border border-navy-100 shadow-xl overflow-hidden">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4 px-3 py-2 bg-navy-50 rounded-2xl text-navy-950">
              <div className="flex items-center gap-2.5 font-bold text-sm sm:text-base">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>9, Club Road, Sadiqabad, near Rahim Yar Khan</span>
              </div>
              <a
                href="https://maps.google.com/?q=9,+Club+Road,+Sadiqabad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold bg-navy-900 text-white px-4 py-2 rounded-xl hover:bg-navy-800 transition-colors"
              >
                Open in Google Maps
              </a>
            </div>
            <div className="w-full h-[420px] rounded-2xl overflow-hidden border border-navy-100 shadow-inner">
              <iframe
                title="Clinic Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3489.123456789!2d70.123456!3d28.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3MMKwMDcnMjQuNCJF!5e0!3m2!1sen!2spk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy-950 py-12 lg:py-16 relative overflow-hidden grid-bg-dark">
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-navy-500/10 blur-3xl" />
        <div className="container-max px-4 sm:px-6 lg:px-8 relative text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3">Ready to Transform Your Smile?</h2>
          <p className="text-navy-200 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Book your appointment today and experience gentle, professional dental care tailored to your needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#appointment"
              className="flex items-center gap-2 bg-white text-navy-950 hover:bg-navy-50 font-bold px-7 py-4 rounded-2xl transition-all duration-300 shadow-2xl hover:-translate-y-0.5 text-sm sm:text-base"
            >
              <Calendar className="w-5 h-5 text-navy-800" />
              {t.hero.cta}
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-7 py-4 rounded-2xl transition-all duration-300 text-sm sm:text-base"
            >
              <Stethoscope className="w-5 h-5" />
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function InteractiveSliderCard({ item }: { item: any }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    let x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  return (
    <div className="bg-white rounded-3xl border border-navy-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 flex flex-col p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-navy-500">{item.title}</span>
        <span className="text-xs font-semibold bg-navy-50 text-navy-800 px-3 py-1 rounded-full">{item.procedure}</span>
      </div>

      {/* Before / After Slider Component Container */}
      <div 
        className="relative h-52 sm:h-56 rounded-2xl overflow-hidden select-none cursor-ew-resize border border-navy-100 mb-5 group shadow-inner"
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseDown={(e) => {
          setIsDragging(true);
          const rect = e.currentTarget.getBoundingClientRect();
          handleSliderMove(e.clientX, rect);
        }}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image (Background Layer) */}
        <img 
          src={item.betterImg} 
          alt="After Treatment"
          className="absolute inset-0 w-full h-full object-cover bg-navy-50 pointer-events-none"
        />
        <div className="absolute bottom-3 right-3 bg-emerald-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-md z-10">
          After (Repaired)
        </div>

        {/* Before Image (Foreground Clipped Layer) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={item.damagedImg} 
            alt="Before Treatment"
            className="absolute inset-0 w-full h-full object-cover bg-navy-50 max-w-none"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="absolute bottom-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-md z-10">
            Before (Damaged)
          </div>
        </div>

        {/* Draggable Divider Handle Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-navy-950 flex items-center justify-center shadow-lg font-bold text-xs border-2 border-navy-900">
            ↔
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-base font-bold text-navy-950 mb-1.5">Clinical Case Breakdown</h3>
          <p className="text-sm text-navy-600 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function DoctorCard({
  image,
  name,
  role,
  bio,
  bio2,
  badge,
  experience,
  specialization,
  delay,
}: {
  image: string;
  name: string;
  role: string;
  bio: string;
  bio2: string;
  badge: string;
  experience: string;
  specialization: string;
  delay: number;
}) {
  return (
    <div
      className="group bg-white rounded-3xl border border-navy-100 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row relative transform hover:-translate-y-1"
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Cartoonic Avatar Section */}
      <div className="md:w-5/12 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950 p-6 flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-12 -left-12 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl" />
        
        {/* Cartoon Doctor Avatar Frame */}
        <div className="relative z-10 w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1.5 bg-gradient-to-tr from-amber-400 via-white to-amber-200 shadow-xl group-hover:scale-105 transition-transform duration-500">
          <div className="w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center shadow-inner">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Floating Smile / Status Badge */}
        <div className="mt-4 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold shadow-md">
          <Smile className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="md:w-7/12 p-6 sm:p-8 flex flex-col justify-between bg-white">
        <div>
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200/50">
              {role}
            </span>
            <span className="text-[11px] font-medium text-navy-500 bg-navy-50 px-2.5 py-1 rounded-lg">
              {experience}
            </span>
          </div>

          <h3 className="text-2xl font-extrabold text-navy-950 mt-1 mb-3 group-hover:text-navy-800 transition-colors">
            {name}
          </h3>

          <div className="flex items-center gap-1.5 text-xs font-semibold text-navy-700 mb-4 bg-navy-50/80 p-2 rounded-xl">
            <BadgeCheck className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Specialization: {specialization}</span>
          </div>

          <p className="text-xs sm:text-sm text-navy-600 leading-relaxed mb-3">
            {bio}
          </p>
          <p className="text-xs sm:text-sm text-navy-600 leading-relaxed">
            {bio2}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-navy-100 flex items-center justify-between text-xs font-bold text-navy-900">
          <span className="flex items-center gap-1.5 text-emerald-600">
            <CheckCircle2 className="w-4 h-4" /> Available for Consultation
          </span>
          <a
            href="#appointment"
            className="text-navy-900 hover:text-amber-600 transition-colors inline-flex items-center gap-1 underline underline-offset-4"
          >
            Book Slot &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({
  title,
  subtitle,
  left,
}: {
  title: string;
  subtitle: string;
  left?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${left ? "" : "mx-auto text-center"} animate-fade-in`}>
      <div className={`flex items-center gap-2 mb-2.5 ${left ? "" : "justify-center"}`}>
        <div className="w-10 h-1.5 rounded-full bg-navy-900" />
        <div className="w-3.5 h-1.5 rounded-full bg-amber-400" />
      </div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-950 mb-3 text-balance">{title}</h2>
      <p className="text-sm sm:text-base text-navy-600 leading-relaxed">{subtitle}</p>
    </div>
  );
}