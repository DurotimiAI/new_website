import React from 'react';
import { Heart, Milestone, MapPin } from 'lucide-react';

export default function AboutView() {
  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER STORIES */}
      <section className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <Heart className="w-3.5 h-3.5 text-[#AF6B5E] fill-[#AF6B5E]/10" />
          <span>The Humanity behind Durotimi AI</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.12]">
          "Stay with me." <br/>
          <span className="text-[#3A5F4F] italic font-medium font-serif">Bridging oncology science & compassionate care.</span>
        </h1>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-sans">
          Technology can separate patient profiles from human clinicians under structural volume pressure. 
          Our company was founded to bring precision, representation, and empathy back to early diagnostic pathways.
        </p>
      </section>

      {/* CORE BRAND NARRATIVE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white border border-stone-200 p-6 md:p-12 rounded-3xl items-center shadow-xs">
        
        <div className="space-y-6">
          <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2 py-0.5 rounded border border-[#EBD6D1]">The Yoruba Paradigm</span>
          <h2 className="font-display font-semibold text-2xl text-[#222B27]">Why Durotimi?</h2>
          
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
            Our company name, <b>Durotimi</b>, is derived from the Yoruba expression meaning <b>&quot;Stay with me.&quot;</b> 
            It represents the visceral human promise we make to families navigating the initial, terrifying months of unexplained symptoms, 
            delayed specialist appointments, and late cancer diagnoses.
          </p>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
            In modern clinical pipelines, patients with subtle compound factors—often related to social determinants of health or genetic ancestry—are 
            frequently lost in general queues, resulting in diagnostic delays that compromise their outcomes.
          </p>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
            By building <b>localized clinical intelligence</b> indeed calibrated for populations too often completely missed, 
            we ensure that high-risk signs are flagged sooner. That is our mission: to apply rigorous mathematical logic so that 
            individuals obtain the early referral opportunity they deserve to stay with the people they love.
          </p>
        </div>

        <div className="p-6 md:p-8 bg-[#FAF8F5] border border-stone-200 rounded-2xl space-y-4 shadow-2xs">
          <span className="text-[10px] text-stone-550 font-mono uppercase tracking-wider block font-bold">Scientific Board Structure</span>
          <h3 className="font-display font-semibold text-[#222B27] text-sm">International Clinical Integration</h3>
          <p className="text-stone-600 text-xs leading-normal font-sans">
            Our team spans clinical informatics, oncology researchers, database specialists, and digital-health implementation 
            analysts, holding physical offices and research links across two central medical hubs:
          </p>

          <div className="space-y-4 pt-2 text-xs text-stone-700">
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#AF6B5E] shrink-0 mt-0.5 bg-white p-1 rounded-lg border border-stone-200" />
              <div>
                <h4 className="font-bold text-stone-900 font-mono uppercase text-[11px] tracking-wide">London, United Kingdom</h4>
                <p className="text-stone-550 text-[11px] mt-0.5 leading-relaxed">EHR compatibility studies, compliance mapping, and primary NHS network pilot trials.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <MapPin className="w-5 h-5 text-[#3A5F4F] shrink-0 mt-0.5 bg-white p-1 rounded-lg border border-stone-200" />
              <div>
                <h4 className="font-bold text-stone-900 font-mono uppercase text-[11px] tracking-wide">Lagos, Nigeria</h4>
                <p className="text-stone-550 text-[11px] mt-0.5 leading-relaxed">Demographic calibration, ancestral genome cohort representation, and low-resource clinic deployment.</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* STRATEGIC CAPABILITIES AND FOUNDERS PRINCIPLES */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <div className="border border-stone-200 bg-white p-6 rounded-2xl space-y-2 shadow-2xs">
          <div className="text-[#AF6B5E] text-xs font-bold font-mono uppercase tracking-wider">Empathy-Driven Metrics</div>
          <p className="text-stone-600 text-xs leading-relaxed font-sans mt-1">
            We measure our software accomplishments not by speculative model sizes, but by clinical stage shifts 
            and actual patient referral waitlist times saved.
          </p>
        </div>

        <div className="border border-stone-200 bg-[#FAF8F5] p-6 rounded-2xl space-y-2 shadow-2xs border-emerald-900/10">
          <div className="text-[#3A5F4F] text-xs font-bold font-mono uppercase tracking-wider">Sovereign EHR Integration</div>
          <p className="text-stone-600 text-xs leading-relaxed font-sans mt-1">
            Our technology was designed under standard HL7 FHIR metrics to enforce non-obtrusive, background clinical 
            checks, avoiding clinic clerk overhead.
          </p>
        </div>

        <div className="border border-stone-200 bg-white p-6 rounded-2xl space-y-2 shadow-2xs">
          <div className="text-[#3A5F4F] text-xs font-bold font-mono uppercase tracking-wider">Demographic Integrity</div>
          <p className="text-stone-600 text-xs leading-relaxed font-sans mt-1">
            We specifically integrate cohorts representing diverse ancestry, addressing clinical representation disparities 
            to democratize early diagnostic security.
          </p>
        </div>

      </section>

    </div>
  );
}
