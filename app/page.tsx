import React from "react";
import Head from "next/head";
import {
  Download,
  Users,
  BookOpen,
  Smartphone,
  Play,
  Send,
  Menu,
  Bell,
  ShieldCheck,
  ArrowRight,
  Zap,
  HeartHandshake,
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
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#48BB78] selection:text-white">
      {/* Hero Section */}
      <header className="pt-16 pb-12 px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Flex container: Column by default (mobile), Row on large screens */}
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content: flex-1 ensures it takes up equal space */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-6xl lg:text-[55px] font-black text-[#1A365D] leading-tight tracking-tight">
              Manage Your School. <br />
              <span className="text-[#48BB78]">Instantly.</span> Seamlessly.
            </h1>
            <p className="text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Dugsi unifies your entire institution on one powerful,
              mobile-first platform built for modern educators.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button className="bg-[#1A365D] text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-[#002045] transition-all">
                Download Now <Download size={18} />
              </button>
              <button className="border-2 border-slate-200 text-[#1A365D] px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
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

      {/* Why Choose Us - Streamlined */}
      <section id="about" className="py-16 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h3 className="text-[#48BB78] font-bold tracking-widest uppercase text-[10px]">
              The Dugsi Difference
            </h3>
            <h2 className="text-3xl md:text-4xl font-black text-[#1A365D]">
              A partner in your growth.
            </h2>
          </div>

          {/* Updated to a 3-column grid for moderate sizing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-[#48BB78]/30 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`shrink-0 w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  {React.cloneElement(item.icon as React.ReactElement, {
                    size: 22, // Moderated icon size
                  })}
                </div>

                <div className="space-y-2">
                  <h4 className="text-[#1A365D] font-bold text-xl group-hover:text-[#48BB78] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-auto pt-4 flex items-center text-[#48BB78] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black text-[#1A365D] leading-[1.1] mb-6">
              Designed for the <br />{" "}
              <span className="text-[#48BB78]">rhythm of school life.</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Digital solutions built for teachers, students, and parents.
            </p>
          </div>
          <button className="flex items-center gap-2 text-[#1A365D] font-bold border-b-2 border-[#48BB78] pb-1 hover:gap-4 transition-all">
            Explore all modules <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 bg-[#F8FAFC] rounded-[40px] p-10 flex flex-col justify-between group relative border border-slate-100 hover:shadow-2xl transition-all">
            <div className="max-w-md">
              <div className="w-12 h-12 bg-[#1A365D] rounded-2xl flex items-center justify-center mb-6 text-white">
                <Users size={24} />
              </div>
              <h3 className="text-3xl font-bold text-[#1A365D] mb-4">
                Total Institutional Control
              </h3>
              <p className="text-slate-500 text-lg">
                Manage roles, track attendance, and monitor performance from one
                dashboard.
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#48BB78]/5 rounded-full blur-3xl group-hover:bg-[#48BB78]/10 transition-all" />
          </div>

          <div className="md:col-span-4 bg-[#1A365D] rounded-[40px] p-10 text-white flex flex-col justify-between hover:scale-[1.02] transition-transform shadow-xl shadow-[#1A365D]/20">
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

          <div className="md:col-span-4 border-2 border-slate-50 rounded-[40px] p-10 flex flex-col justify-between hover:bg-slate-50 transition-colors">
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

          <div className="md:col-span-8 bg-[#48BB78]/10 rounded-[40px] p-10 flex flex-col lg:flex-row items-center gap-8 border border-[#48BB78]/20">
            <div className="flex-1">
              <div className="w-12 h-12 bg-[#48BB78] rounded-2xl flex items-center justify-center mb-6 text-white">
                <BookOpen size={24} />
              </div>
              <h3 className="text-3xl font-bold text-[#1A365D] mb-4">
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

            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1]">
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
          <div className="relative z-10 lg:absolute lg:-right-10 lg:-bottom-12 w-full lg:w-[40%] h-[400px] lg:h-[100%] flex justify-center items-end">
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
      <footer className="bg-slate-900 pt-24 pb-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-8 max-w-7xl mx-auto">
          <div className="space-y-6">
            <div className="text-3xl font-black tracking-tighter">dugsi</div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Pioneering the next generation of school management systems.
            </p>
            <div className="flex gap-3">
              <button className="bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-all">
                <Smartphone size={18} />
              </button>
              <button className="bg-white/5 p-3 rounded-xl hover:bg-white/10 transition-all">
                <Play size={18} />
              </button>
            </div>
          </div>

          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Parent Portal"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Support"],
            },
          ].map((col) => (
            <div key={col.title} className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-slate-500">
                {col.title}
              </h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                {col.links.map((link) => (
                  <li key={link}>
                    <a className="hover:text-[#48BB78] transition-all" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs text-slate-500">
              Stay Updated
            </h4>
            <div className="flex gap-2 bg-white/5 p-2 rounded-2xl focus-within:ring-2 ring-[#48BB78] transition-all">
              <input
                className="bg-transparent border-none p-2 text-sm w-full outline-none"
                placeholder="Enter your email"
              />
              <button className="bg-[#48BB78] text-white p-3 rounded-xl">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          © 2026 Dugsi School Management. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
