import React from "react";
import Head from "next/head";
import {
  Download,
  Calendar,
  CreditCard,
  CheckCircle,
  Users,
  BookOpen,
  Briefcase,
  Smartphone,
  Play,
  Send,
  Check,
  Menu,
  Bell,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Comprehensive Management",
      description:
        "Effortlessly manage students, teachers, and classes from a single, intuitive admin portal.",
      icon: <Users className="w-6 h-6 text-[#1A365D]" />,
      accent: "bg-[#1A365D]/10",
    },
    {
      title: "Academic Excellence",
      description:
        "Organize subjects, track timetables, and monitor student progress across all grades.",
      icon: <BookOpen className="w-6 h-6 text-[#48BB78]" />,
      accent: "bg-[#48BB78]/10",
    },
    {
      title: "Real-time Communication",
      description:
        "Send instant notices and smart announcements to parents and faculty via integrated links.",
      icon: <Bell className="w-6 h-6 text-orange-500" />,
      accent: "bg-orange-500/10",
    },
    {
      title: "Secure Data Handling",
      description:
        "Your school's data is protected with enterprise-grade security and encrypted backups.",
      icon: <ShieldCheck className="w-6 h-6 text-[#1A365D]" />,
      accent: "bg-[#1A365D]/10",
    },
  ];

  return (
    <div className="min-h-screen bg-[#ffffff] font-sans text-[#333333] selection:bg-[#48BB78] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#F7F7F7] backdrop-blur-xl ">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={200}
            height={0}
            style={{ height: "auto" }}
          />

          <div className="hidden md:flex gap-8 items-center">
            <a
              className="text-[#1A365D] font-bold border-b-2 border-[#1A365D] transition-colors"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-slate-600 font-medium hover:text-[#1A365D] transition-colors"
              href="#curriculum"
            >
              About
            </a>
            <a
              className="text-slate-600 font-medium hover:text-[#1A365D] transition-colors"
              href="#pricing"
            >
              Contact
            </a>
            <a
              className="text-slate-600 font-medium hover:text-[#1A365D] transition-colors"
              href="#resources"
            >
              Resources
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:block text-slate-600 font-medium px-4 py-2 hover:text-[#1A365D] transition-all">
              Login
            </button>
            <button className="bg-[#48BB78] text-white px-6 py-2.5 rounded-xl font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-[#48BB78]/20">
              Get Started
            </button>
            <button className="md:hidden text-[#1A365D]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-28 pb-20 px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Flex container: Column by default (mobile), Row on large screens */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content: flex-1 ensures it takes up equal space */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-[#1A365D] leading-[1.1] tracking-tight">
              Manage Your School. <br />
              <span className="text-[#48BB78]">Instantly.</span> Seamlessly.
            </h1>
            <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From registration to report cards, dugsi unifies your entire
              institution on one powerful, mobile-first platform. Built for the
              modern educational curator.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-[#1A365D] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-[#002045] transition-all active:scale-95 shadow-xl shadow-[#1A365D]/10">
                Download Now
                <Download size={20} />
              </button>
              <button className="border-2 border-slate-200 text-[#1A365D] px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                Book a Demo
              </button>
            </div>
          </div>

          {/* Image Container: flex-1 ensures it takes up equal space */}
          <div className="flex-1 w-full flex justify-center relative pt-16">
            <Image
              alt="hero image"
              width={430}
              height={0} // Changed from 0 to 600 for better aspect ratio handling
              // style={{ height: "auto", width: "100%" }}
              src={"/hero-image.svg"}
              className="relative "
              priority // Good practice for hero images
            />
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#1A365D]">
              Institutional Excellence
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every tool you need to run a high-performing school, refined for
              clarity and speed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar />,
                title: "Scheduling",
                desc: "Prevent timetable conflicts and assign subjects effortlessly with our scheduler.",
              },
              {
                icon: <CreditCard />,
                title: "Fee Collection",
                desc: "Track payments and reduce late fees with automated digital reminders.",
              },
              {
                icon: <CheckCircle />,
                title: "Attendance",
                desc: "Mark students present from any phone. Real-time sync with parent portal.",
              },
              {
                icon: <Users />,
                title: "Staff Management",
                desc: "Direct oversight of teacher performance, payroll, and class loads.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#48BB78]/10 text-[#48BB78] rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A365D] mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-200">
            <div className="absolute inset-0 flex items-center justify-center text-slate-500 italic">
              Teacher Experience Image
            </div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl flex items-center gap-4 shadow-lg">
              <div className="bg-[#48BB78] text-white p-2 rounded-lg">
                <Check size={20} />
              </div>
              <span className="font-bold text-[#1A365D]">
                Teacher Added Successfully
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-[#48BB78] font-bold tracking-widest uppercase text-sm">
              Adaptive Systems
            </span>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1A365D] leading-tight">
              Tailored Curriculum, Smart Assignments.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Customize class subjects on the fly and map teachers to specific
              grades instantly. Total curricular flexibility designed for
              institutions that value precision.
            </p>
            <ul className="space-y-4">
              {[
                "Dynamic subject creation",
                "Automated teacher load balance",
                "Custom grading scale support",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-medium text-[#1A365D]"
                >
                  <CheckCircle size={20} className="text-[#48BB78]" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Core Features */}

      <section className="py-20 px-6 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#1A365D]/5 text-[#1A365D] text-sm font-bold uppercase tracking-wider">
            Why Choose Dugsi
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-[#1A365D]">
            Everything you need,{" "}
            <span className="text-[#48BB78]">nothing you don't.</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Powerful tools designed to streamline school operations and enhance
            the learning experience for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-[32px] border border-slate-100 hover:border-[#48BB78]/30 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${feature.accent} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#1A365D] mb-4">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-lg">
                {feature.description}
              </p>
              <div className="mt-6 w-12 h-1 bg-slate-100 group-hover:bg-[#48BB78] group-hover:w-24 transition-all duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 max-w-7xl mx-auto mt-24">
        {/* Main Container - Updated to Brand Navy Blue */}
        <div className="relative bg-[#1A365D] rounded-[40px] flex flex-col lg:flex-row items-center px-8 lg:px-20 py-8 lg:py-14 min-h-[500px] overflow-hidden lg:overflow-visible">
          {/* Background Watermark Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden rounded-[40px]">
            <span className="text-white/5 text-[10rem] md:text-[20rem] font-black tracking-tighter uppercase">
              DUGSI
            </span>
          </div>

          {/* Left Content Side */}
          <div className="relative z-20 flex-1 text-white space-y-6 text-center lg:text-left lg:max-w-xl">
            <p className="text-lg font-medium text-[#48BB78] tracking-wide">
              Join the educational revolution — simple, secure, rewarding
            </p>

            <h2 className="text-4xl lg:text-7xl font-bold leading-[1.1]">
              Start Managing <br />
              Schools with <br />
              <span className="text-[#48BB78]">Dugsi</span> Today
            </h2>

            <div className="pt-4">
              {/* Button - Updated to Brand Green */}
              <button className="bg-[#48BB78] text-white hover:bg-[#3da66a] px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#48BB78]/20 active:scale-95 transition-all">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Right Image Side */}
          <div className="relative z-10 lg:absolute lg:-right-10 lg:-bottom-12 w-full lg:w-[40%] h-[400px] lg:h-[110%] flex justify-center items-end">
            <div className="relative w-full h-full">
              <Image
                src="/holding-phone.svg"
                alt="Dugsi App Mockup"
                fill
                className="object-contain object-bottom scale-110 lg:scale-125 origin-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-2xl font-black tracking-tighter">dugsi</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pioneering the next generation of school management systems for
              the visionary educator.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-800 p-2 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-all text-xs">
                <Smartphone size={14} /> App Store
              </button>
              <button className="bg-slate-800 p-2 rounded-lg flex items-center gap-2 hover:bg-slate-700 transition-all text-xs">
                <Play size={14} /> Play Store
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a className="hover:text-[#48BB78] transition-all" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-[#48BB78] transition-all" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-[#48BB78] transition-all" href="#">
                  Parent Portal
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a className="hover:text-[#48BB78] transition-all" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-[#48BB78] transition-all" href="#">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:text-[#48BB78] transition-all" href="#">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white">Newsletter</h4>
            <div className="flex gap-2">
              <input
                className="bg-slate-800 border-none rounded-lg p-2 text-sm w-full focus:ring-1 focus:ring-[#48BB78]"
                placeholder="Email"
              />
              <button className="bg-[#48BB78] text-white p-2 rounded-lg">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © 2026 dugsi School Management. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
