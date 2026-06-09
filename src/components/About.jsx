import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/about/srividya.png';

const statusChips = [
  { tag: 'Investigated', label: 'ATO Fraud', color: '#D4AF37' },
  { tag: 'Screened', label: 'OFAC · EU · UN · HMT', color: '#60a5fa' },
  { tag: 'Filed', label: 'SAR · STR', color: '#a78bfa' },
  { tag: 'Verified', label: 'KYC · EDD', color: '#34d399' },
];

const About = () => (
  <section id="about" className="py-28 relative overflow-hidden"
    style={{
      background:
        'linear-gradient(180deg, #F7E7CE 0%, #DBEAFE 34%, #EDE9FE 72%, #F8FAFC 100%)',
    }}>

    {/* ambient glows */}
    <div className="absolute top-1/3 -left-20 w-96 h-96 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />
    <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 70%)' }} />

    <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT — photo ID card with floating chips */}
        <div data-aos="fade-right" className="relative flex justify-center lg:justify-start">
          <div className="relative">
            {/* gold halo behind card */}
            <div className="absolute -inset-6 rounded-[2rem] pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)' }} />

            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass rounded-3xl p-4 w-72 relative">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="mono text-[10px] tracking-[0.2em] text-white/40">INVESTIGATOR ID</span>
                <span className="mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-blink" /> ONLINE
                </span>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#D4AF37]/30 mb-3" style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.4)' }}>
                <img src={profileImage} alt="Sri Vidya Deshaboina" className="w-full h-72 object-cover object-top" />
              </div>
              <p style={{ fontFamily: 'Playfair Display, serif' }} className="text-xl font-black text-white leading-none">Sri Vidya</p>
              <p className="mono text-[11px] text-[#D4AF37] mt-1">Lead Fraud Investigator</p>
            </motion.div>

            {/* floating chips */}
            <motion.div className="absolute -right-5 top-8 glass-gold rounded-xl px-3 py-2"
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}>
              <p className="mono text-[9px] text-white/50">experience</p>
              <p className="text-sm font-bold text-[#D4AF37]">5+ yrs</p>
            </motion.div>
            <motion.div className="absolute -left-5 bottom-16 glass rounded-xl px-3 py-2"
              animate={{ y: [0, -8, 0] }} transition={{ duration: 4.6, repeat: Infinity, delay: 0.8 }}>
              <p className="mono text-[9px] text-white/50">cases reviewed</p>
              <p className="text-sm font-bold text-emerald-400">1000+</p>
            </motion.div>
          </div>
        </div>

        {/* RIGHT — heading + bio + status chips */}
        <div data-aos="fade-left" className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #D4AF37, transparent)' }} />
            <span className="mono text-xs tracking-[0.3em] uppercase text-[#D4AF37]">The Analyst Behind the Cases</span>
          </div>

          <h2 style={{ fontFamily: 'Playfair Display, serif' }} className="text-5xl md:text-6xl font-black text-white leading-tight">
            Hello, I'm <span className="text-gold-gradient">Sri Vidya</span>
          </h2>

          <p className="text-white/55 leading-relaxed">
            I'm a <span className="text-white/90 font-medium">Fraud Investigation Analyst with 5+ years of experience</span> protecting
            global payment ecosystems. As an SME on the Trust &amp; Safety Payments team at Cognizant (Google Pay), I lead
            Account Takeover investigations, run AML/KYC due diligence, and screen against OFAC, EU, UN &amp; HMT sanctions lists.
          </p>
          <p className="text-white/45 leading-relaxed text-sm">
            Across engagements with PwC / USAA Bank, TCS / YouTube TV, Wipro, and UnitedHealth, I've mastered the full
            investigation lifecycle — transaction monitoring, EDD on high-risk PEPs, SAR/STR drafting, and regulatory escalation.
            Based in Hyderabad, India · open to remote / relocation.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {statusChips.map((c) => (
              <div key={c.tag} className="glass rounded-2xl p-3 text-center" style={{ borderColor: `${c.color}26` }}>
                <p className="text-sm font-bold" style={{ color: c.color }}>{c.tag}</p>
                <p className="mono text-[9px] text-white/40 mt-1 leading-tight">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
