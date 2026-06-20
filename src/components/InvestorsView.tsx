import React, { useState } from 'react';
import { motion } from 'motion/react';
import { INVESTOR_CHAPTERS } from '../data';
import { Landmark, TrendingUp, DollarSign, Award, Target, PieChart, ShieldAlert, Check } from 'lucide-react';

export default function InvestorsView() {
  const [clinicsCount, setClinicsCount] = useState(24);
  const [screensPerClinicMonthly, setScreensPerClinicMonthly] = useState(800);
  const [feePerScreen, setFeePerScreen] = useState(6.5); // USD fee per screening

  // Calculate dynamic business calculations
  const totalScreensMonthly = clinicsCount * screensPerClinicMonthly;
  const monthlyRevenue = totalScreensMonthly * feePerScreen;
  const annualRunRate = monthlyRevenue * 12;

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <Landmark className="w-3.5 h-3.5 text-[#AF6B5E]" />
          <span>Investor Relations & Series Seed Prospectus</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.12]">
          Investing in localized cancer intelligence <br className="hidden sm:inline" />
          <span className="text-[#3A5F4F] italic font-medium font-serif">for the next generation of early detection.</span>
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
          Durotimi AI is delivering a highly defensible, ancestry-aware clinical SaaS platform addressing 
          one of medicine's largest and most economically impactful unmet needs: earlier, more equitable diagnostic triage.
        </p>
      </section>

      {/* CORE STRATEGY SLIDESHOW / COLLAPSIBLE CHAPTERS */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2.5 py-1 rounded inline-block border border-[#EBD6D1]">The Investment Thesis</span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#222B27] mt-3">Why Allocate to Durotimi AI Now?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INVESTOR_CHAPTERS.map((chapter, idx) => (
            <div key={idx} className="bg-white border border-stone-200 p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-2xs">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-stone-400 font-mono text-[10px] font-bold uppercase tracking-wider block">Slide 0{idx+1}</span>
                    <h3 className="font-display font-semibold text-[#222B27] text-base mt-1">{chapter.title}</h3>
                  </div>
                  {chapter.metric && (
                    <div className="text-right">
                      <span className="font-mono text-xl font-bold text-[#AF6B5E] block">{chapter.metric}</span>
                      <span className="text-[9px] text-stone-400 font-mono block tracking-normal uppercase">{chapter.metricLabel}</span>
                    </div>
                  )}
                </div>
                <div className="h-0.5 w-12 bg-[#AF6B5E]/30 rounded" />
                <p className="text-stone-500 text-[11px] font-serif italic">{chapter.subtitle}</p>
                <ul className="space-y-2.5 pt-2 text-xs text-stone-650 font-sans">
                  {chapter.points.map((point, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-[#AF6B5E] font-bold shrink-0 mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE COMPONENT: COMMERCIAL MARKET MODELER */}
      <section className="bg-[#1C2C23] text-white rounded-3xl p-8 md:p-12 space-y-8 relative overflow-hidden shadow-xl border border-[#2F4438]/50">
        <div className="absolute top-0 left-0 w-full h-full bg-[#3A5F4F]/10 pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#AF6B5E] text-xs font-mono font-bold uppercase tracking-wider block bg-white/5 px-2.5 py-1 rounded inline-block">Revenue Modeling Tool</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white">Market Capture & SaaS Modeler</h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
              Test deployment assumptions of regional primary care settings, screenings, and SaaS transactions 
              to model Durotimi&apos;s commercial software scale trajectory.
            </p>

            <div className="space-y-4 pt-2">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between text-xs text-stone-300 mb-1 font-sans">
                  <span>Deploying Primary Care Sites:</span>
                  <span className="font-mono font-bold text-[#AF6B5E]">{clinicsCount} clinics</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="120"
                  step="5"
                  value={clinicsCount}
                  onChange={(e) => setClinicsCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[#AF6B5E]"
                />
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between text-xs text-stone-300 mb-1 font-sans">
                  <span>Monthly Screenings Per Site:</span>
                  <span className="font-mono font-bold text-[#AF6B5E]">{screensPerClinicMonthly.toLocaleString()} screens</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={screensPerClinicMonthly}
                  onChange={(e) => setScreensPerClinicMonthly(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[#AF6B5E]"
                />
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between text-xs text-stone-300 mb-1 font-sans">
                  <span>Target Licensing Fee Per Screen:</span>
                  <span className="font-mono font-bold text-[#AF6B5E]">${feePerScreen.toFixed(2)} USD</span>
                </div>
                <input
                  type="range"
                  min="2.00"
                  max="20.00"
                  step="0.50"
                  value={feePerScreen}
                  onChange={(e) => setFeePerScreen(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-700 rounded-lg appearance-none cursor-pointer accent-[#AF6B5E]"
                />
              </div>
            </div>

          </div>

          <div className="lg:col-span-6 bg-[#24362B]/85 border border-[#2F4438] p-6 rounded-2xl space-y-4 flex flex-col justify-between h-full shadow-lg">
            <h4 className="text-xs text-stone-400 font-mono uppercase tracking-wider font-semibold">Projected Software Calculations</h4>
            
            <div className="space-y-4 py-2">
              <div>
                <span className="text-[10px] text-stone-400 block tracking-wider uppercase font-semibold">Total Monthly Diagnostic Screenings</span>
                <span className="font-mono text-2xl font-bold text-white mt-1 block">{totalScreensMonthly.toLocaleString()} searches</span>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-[#2F4438] pt-3">
                <div>
                  <span className="text-[10px] text-stone-400 block tracking-wider uppercase font-semibold">Monthly Software Run</span>
                  <span className="font-mono text-xl font-bold text-[#AF6B5E] mt-1 block">${monthlyRevenue.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-[10px] text-stone-400 block tracking-wider uppercase font-semibold">Estimated Annual ARR</span>
                  <span className="font-mono text-2xl font-bold text-white mt-0.5 block">${annualRunRate.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-[#1C2C23] border border-[#2F4438] p-3.5 rounded-lg flex items-start gap-2 text-xs">
              <ShieldAlert className="w-4 h-4 text-[#AF6B5E] shrink-0 mt-0.5" />
              <p className="text-[10.5px] text-stone-300 leading-relaxed font-sans">
                <b>Investor Note:</b> Calculations do not account for enterprise integration fees, custom regional calibration awards, 
                or pricing deviations under regional public health tenders. This tool serves purely as a helpful mathematical simulator.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COMMERCIAL DEFENSE/MOATS */}
      <section className="space-y-4">
        <h3 className="font-display font-semibold text-[#222B27] text-base">Key Defensive Moats</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          
          <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#222B27] font-semibold text-sm">Demographic Ancestry Datasets</h4>
            <p className="text-stone-605 leading-relaxed font-sans">
              Durotimi AI possesses proprietary access to clinical calibration cohorts representing diverse genetics 
              often completely neglected in Western databases. Correcting this representation is a substantial software barrier-to-entry.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#222B27] font-semibold text-sm">Workflow-Bound Integrations</h4>
            <p className="text-stone-655 leading-relaxed font-sans">
              Seamless background integration into the Electronic Health Record ensures zero clinical consultation time is lost. 
              Once active inside hospital pipelines, our triage software becomes deeply woven into clinical waitlist parameters.
            </p>
          </div>

          <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-2 shadow-2xs">
            <h4 className="font-bold text-[#222B27] font-semibold text-sm">Validated Peer Study Partnerships</h4>
            <p className="text-stone-605 leading-relaxed font-sans">
              Active agreements with leading NHS hospital trusts, federal ministries, and academic departments generate 
              a continuous layer of prospective utility data, building substantial regulatory defensibility.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
