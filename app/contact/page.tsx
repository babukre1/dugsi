import React from "react";
import { Mail, MessageSquare, Phone, MapPin, ArrowUpRight } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-white font-sans text-[#1A365D]">
      {/* SECTION 1: INNOVATIVE CLASSIC HERO */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        {/* Subtle Background Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_#48BB7808_0%,_transparent_70%)] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h3 className="text-[#48BB78] font-bold tracking-[0.3em] uppercase text-[10px] mb-8 animate-fade-in">
            Get In Touch
          </h3>

          <h1 className="text-6xl md:text-8xl font-black text-[#1A365D] leading-[0.95] tracking-tighter">
            Let’s start a <br />
            <span className="italic font-serif text-[#48BB78] font-light lowercase tracking-normal">
              conversation
            </span>
            <span className="inline-block ml-4">about</span> <br />
            your school.
          </h1>

          <p className="mt-10 text-slate-400 font-medium text-sm tracking-widest uppercase">
            The Scholarly Curator of Modern Education
          </p>

          {/* Decorative Centered Element */}
          <div className="mt-12 flex justify-center">
            <div className="w-px h-16 bg-gradient-to-b from-[#48BB78] to-transparent"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CONNECTION HUB (Asymmetric Split) */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Quick Connect Tiles (4 Columns) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 group hover:border-[#48BB78]/30 transition-all">
              <Mail className="text-[#48BB78] mb-4" size={24} />
              <h4 className="font-bold text-lg">Email us</h4>
              <p className="text-slate-500 text-sm mb-4">
                For general inquiries and partnerships.
              </p>
              <a
                href="mailto:info@dugsi.so"
                className="font-bold text-[#1A365D] flex items-center gap-2 group-hover:text-[#48BB78] transition-colors"
              >
                hello@dugsi.edu <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="p-8 rounded-[32px] bg-[#1A365D] text-white group transition-all">
              <MessageSquare className="text-[#48BB78] mb-4" size={24} />
              <h4 className="font-bold text-lg">Support Chat</h4>
              <p className="text-slate-300 text-sm mb-4">
                Already using Dugsi? We're here to help.
              </p>
              <button className="font-bold text-[#48BB78] flex items-center gap-2">
                Open Help Center <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Minimal Form (8 Columns) */}
          <div className="lg:col-span-8 bg-white border border-slate-100 p-10 rounded-[40px] shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#48BB78]/20 focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  School Name
                </label>
                <input
                  type="text"
                  placeholder="Academy High"
                  className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#48BB78]/20 focus:ring-0 transition-all outline-none"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="How can we help your institution?"
                  className="w-full p-4 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-[#48BB78]/20 focus:ring-0 transition-all outline-none resize-none"
                />
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="w-full md:w-auto bg-[#48BB78] text-white px-10 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-[#48BB78]/20 transition-all">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* SECTION 3: FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar - Title */}
            <div className="md:w-1/3 space-y-4">
              <h3 className="text-[#48BB78] font-bold tracking-widest uppercase text-[10px]">
                Support
              </h3>
              <h2 className="text-4xl font-black text-[#1A365D] leading-tight">
                Common <br />
                Questions.
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Can't find what you're looking for? <br />
                Our team typically responds to inquiries within 24 hours.
              </p>
            </div>

            {/* FAQ Grid (2 Columns) */}
            <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div className="space-y-3">
                <h4 className="font-bold text-[#1A365D]">
                  How long does implementation take?
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Most institutions are fully onboarded within 7 to 14 days,
                  depending on the volume of existing data migration.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#1A365D]">
                  Is our student data secure?
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Absolutely. We use bank-grade encryption and regional data
                  hosting to ensure full compliance with institutional privacy
                  standards.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#1A365D]">
                  Does Dugsi work offline?
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Yes. We’ve optimized the platform for low-bandwidth
                  environments, allowing core administrative tasks to sync once
                  a connection is restored.
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-[#1A365D]">
                  Can we customize the modules?
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Dugsi is modular. You can choose to enable only what your
                  school needs, from grade management to automated fee tracking.
                </p>
              </div>

              <div className="space-y-3 md:col-span-2 pt-6 border-t border-slate-200">
                <h4 className="font-bold text-[#1A365D]">
                  Do you offer on-site training?
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We provide both remote webinars and on-site workshops for
                  staff to ensure your team feels confident using every feature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
