import React from "react";
import { ArrowRight, Target, Eye, ShieldCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white font-sans text-[#1A365D]">
      {/* SECTION 1: EDITORIAL HERO */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-[#48BB78] font-bold tracking-[0.2em] uppercase text-xs">
            Our Story
          </h3>
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            Designed for the{" "}
            <span className="italic font-serif text-[#48BB78]">rhythm</span> of
            school life.
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We didn’t just build a database. We built a digital home where
            educators, students, and parents stay connected through intuitive
            design.
          </p>
        </div>
      </section>

      {/* SECTION 2: THE BENTO PILLARS (Mission, Vision, Difference) */}
      {/* SECTION 2: THE CLASSIC PURPOSE (Mission & Vision) */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Mission Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#48BB78] font-bold tracking-widest uppercase text-[10px] bg-[#48BB78]/10 px-3 py-1 rounded-full">
                <Target size={14} />
                Our Mission
              </div>
              <h2 className="text-4xl font-black text-[#1A365D]">
                Empowering the <br />
                next generation.
              </h2>
              <div className="w-12 h-1 bg-[#48BB78] rounded-full"></div>
              <p className="text-slate-500 text-lg leading-relaxed">
                To provide educational institutions with the digital
                infrastructure needed to thrive in a modern world, ensuring that
                administrative complexity never stands in the way of student
                success.
              </p>
            </div>

            {/* Vision Side */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-[#1A365D] font-bold tracking-widest uppercase text-[10px] bg-[#1A365D]/5 px-3 py-1 rounded-full">
                <Eye size={14} />
                Our Vision
              </div>
              <h2 className="text-4xl font-black text-[#1A365D]">
                The foundation of <br />
                modern learning.
              </h2>
              <div className="w-12 h-1 bg-[#1A365D] rounded-full"></div>
              <p className="text-slate-500 text-lg leading-relaxed">
                We envision a future where every school—regardless of its
                location—is powered by an intelligent, seamless, and local-first
                operating system that bridges the gap between tradition and
                innovation.
              </p>
            </div>
          </div>

          {/* Subtle Institutional Note (Optional) */}
          <div className="mt-20 pt-10 border-t border-slate-200 text-center">
            <p className="text-slate-400 text-sm italic font-medium">
              "Trust, Transparency, and Technological Excellence" — The Dugsi
              Standard
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: IMPACT CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#48BB78] rounded-[40px] p-12 text-center text-white relative overflow-hidden">
          {/* Subtle Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
            <span className="text-[12vw] font-black italic">DUGSI</span>
          </div>

          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black">
              Ready to elevate your institution?
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-[#48BB78] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg">
                Get Started
              </button>
              <button className="bg-[#1A365D] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#1A365D]/90 transition-all">
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
