"use client";
import React from "react";
import {
  Download,
  Users,
  BookOpen,
  ShieldCheck,
  ArrowRight,
  Zap,
  HeartHandshake,
  Bell,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const highlights = [
    {
      title: "Built for Local Context",
      description:
        "Unlike generic global platforms, Dugsi is tailored for the specific administrative workflows of our region's schools.",
      icon: <HeartHandshake className="text-[#48BB78]" />,
      color: "bg-[#48BB78]/10",
    },
    {
      title: "Lightning Fast Performance",
      description:
        "Optimized for speed, ensuring that even on standard connections, your staff can manage records without lag.",
      icon: <Zap className="text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      title: "Security You Can Trust",
      description:
        "We use bank-grade encryption to ensure student data and financial records remain private and protected.",
      icon: <ShieldCheck className="text-[#1A365D]" />,
      color: "bg-[#1A365D]/5",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#48BB78] selection:text-white pt-20">
      {/* Hero Section */}
      <header className="py-12 lg:py-20 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A365D] leading-[1.1] tracking-tight">
              Manage Your School. <br />
              <span className="text-[#48BB78]">Instantly.</span> Seamlessly.
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Dugsi unifies your entire institution on one powerful,
              mobile-first platform built for modern educators.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2">
              <button className="bg-[#1A365D] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#002045] transition-all">
                Download Now <Download size={18} />
              </button>
              <button className="border-2 border-slate-200 text-[#1A365D] px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Book a Demo
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none flex justify-center relative">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-auto h-[300px] md:h-[450px] lg:h-[550px]">
              <Image
                alt="hero image"
                src="/hero-image.svg"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      {/* Why Choose Us */}
      <section id="about" className="py-20 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <h3 className="text-[#48BB78] font-bold tracking-widest uppercase text-xs">
              The Dugsi Difference
            </h3>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A365D]">
              A partner in your growth.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col gap-5 p-8 rounded-2xl bg-white border border-slate-100 hover:border-[#48BB78]/30 hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`shrink-0 w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  {item.icon}
                </div>
                <div className="space-y-3">
                  <h4 className="text-[#1A365D] font-bold text-xl group-hover:text-[#48BB78] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A365D] leading-[1.1] mb-6">
              Designed for the <br className="hidden sm:block" />
              <span className="text-[#48BB78]">rhythm of school life.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Digital solutions built for teachers, students, and parents.
            </p>
          </div>
          <button className="w-fit flex items-center gap-2 text-[#1A365D] font-bold border-b-2 border-[#48BB78] pb-1 hover:gap-4 transition-all">
            Explore all modules <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-[#F8FAFC] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col justify-between group relative border border-slate-100 hover:shadow-2xl transition-all min-h-[300px]">
            <div className="max-w-md relative z-10">
              <div className="w-12 h-12 bg-[#1A365D] rounded-2xl flex items-center justify-center mb-6 text-white">
                <Users size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">
                Total Institutional Control
              </h3>
              <p className="text-slate-500 text-base md:text-lg">
                Manage roles, track attendance, and monitor performance from one
                dashboard.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#48BB78]/5 rounded-full blur-3xl group-hover:bg-[#48BB78]/10 transition-all" />
          </div>

          <div className="md:col-span-4 bg-[#1A365D] rounded-[32px] md:rounded-[40px] p-8 md:p-10 text-white flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-xl shadow-[#1A365D]/20">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} className="text-[#48BB78]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Secure by Default</h3>
              <p className="text-slate-300 text-sm">
                Bank-grade encryption for all institutional records.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 border-2 border-slate-50 rounded-[32px] md:rounded-[40px] p-8 md:p-10 flex flex-col justify-between hover:bg-slate-50 transition-colors min-h-[250px]">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600">
              <Bell size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1A365D] mb-2">
                Smart Alerts
              </h3>
              <p className="text-slate-500 text-sm">
                Instant notifications for fee reminders and announcements.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 bg-[#48BB78]/10 rounded-[32px] md:rounded-[40px] p-8 md:p-10 flex flex-col lg:flex-row items-center gap-8 border border-[#48BB78]/20">
            <div className="flex-1">
              <div className="w-12 h-12 bg-[#48BB78] rounded-2xl flex items-center justify-center mb-6 text-white">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1A365D] mb-4">
                Academic Tracker
              </h3>
              <p className="text-slate-600">
                Visualize progress with smart charts and automated report cards.
              </p>
            </div>
            <div className="w-full lg:w-1/3 h-32 bg-white rounded-2xl border-2 border-dashed border-[#48BB78]/30 flex items-center justify-center text-[#48BB78] font-bold text-sm">
              Live Analytics
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="relative bg-[#1A365D] rounded-[40px] flex flex-col lg:flex-row items-center px-8 lg:px-20 py-16 lg:py-14 min-h-[400px] lg:min-h-[500px] overflow-hidden lg:overflow-visible">
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

            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1]">
              Start Managing <br />
              Schools with <br />
              <span className="text-[#48BB78]">Dugsi</span> Today
            </h2>

            <div className="pt-4">
              <button className="bg-[#48BB78] text-white hover:bg-[#3da66a] px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#48BB78]/20 active:scale-95 transition-all">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Right Image Side - Now hidden on mobile, flex on desktop */}
          <div className="hidden lg:flex relative z-10 lg:absolute lg:-right-10 lg:-bottom-12 w-full lg:w-[40%] h-[400px] lg:h-[110%] justify-center items-end">
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
    </div>
  );
}
