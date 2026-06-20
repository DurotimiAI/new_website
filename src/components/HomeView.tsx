import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldAlert, ArrowUpRight, BarChart3, Activity, Heart, ArrowRight, ClipboardCheck, Sparkles, AlertCircle, ShieldCheck, HeartPulse } from 'lucide-react';
import { PageId } from '../types';

interface HomeViewProps {
  setCurrentPage: (page: PageId) => void;
}

export default function HomeView({ setCurrentPage }: HomeViewProps) {
  return (
    <div className="pt-24 pb-16 space-y-24">
      
      {/* SECTION 1: HERO - Warm, Emotional and Clinically Sophisticated */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6EEEC] via-[#FAF8F5] to-transparent py-14 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold"
          >
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Advancing Representative Patient-First Care</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6.5xl tracking-tight font-semibold text-[#222B27] leading-[1.12]"
          >
            A more compassionate way to detect risk, <br/>
            <span className="text-[#AF6B5E] italic font-medium">built for the lives too often left behind.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-stone-650 leading-relaxed font-sans"
          >
            Durotimi AI bridges state-of-the-art oncology data science with human empathy. By safely translating 
            routine clinical observations and diverse ancestral records into clear, early warning risk signals, we help clinicians 
            provide every patient with the timely diagnostic referral they truly deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4"
          >
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#3A5F4F] hover:bg-[#2F4E41] text-white rounded-xl font-semibold text-sm transition shadow-lg shadow-emerald-950/10 flex items-center justify-center gap-2 cursor-pointer"
            >
              Request Clinical Validation Brief
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white border border-stone-200/80 hover:border-stone-300 text-stone-700 hover:text-stone-900 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
            >
              Our Humanity Story
            </button>
            <button
              onClick={() => setCurrentPage('investors')}
              className="w-full sm:w-auto px-6 py-3.5 bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-950 rounded-xl font-medium text-sm transition flex items-center justify-center cursor-pointer"
            >
              Investor Overview
            </button>
          </motion.div>
          
          {/* Heartwarming Yoruba Focus Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto bg-stone-50 border border-stone-200/85 p-5 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-left mt-8 shadow-xs"
          >
            <div className="w-12 h-12 bg-[#F6EEEC] rounded-full flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6 text-[#AF6B5E] fill-[#AF6B5E]/10" />
            </div>
            <div>
              <p className="text-stone-500 font-mono text-[10px] tracking-wider uppercase font-bold">The Meaning of Durotimi</p>
              <p className="text-xs text-stone-750 font-serif italic mt-0.5 leading-relaxed">
                "Our name, <b>Durotimi</b>, is a beautiful Yoruba expression that means <b>'Stay with me.'</b> It is our visceral promise to protect families and keep loved ones together through earlier, culturally aware diagnostics."
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2: THE CRITICAL PROBLEM - Warm, deep protective forest shade */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1C2C23] text-[#FAF8F5] rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-xl border border-[#2F4438]/50">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3A5F4F]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold text-[#A3B899] font-mono tracking-widest uppercase">The Clinical Imperative</span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                Closing the diagnostic ancestry gap.
              </h2>
              <div className="h-0.5 w-16 bg-[#AF6B5E]" />
              
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                Early cancer detection leads to five times higher survival rates. Yet millions of patients face delayed referrals 
                because their initial high-risk signatures develop through subtle, slow-burning physical changes that go undetected in brief 10-minute doctor consultations.
              </p>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
                Crucially, **less than 3% of global clinical datasets** represent patients of non-European genetic ancestry. 
                This leads to tragic clinical blind spots. Durotimi AI fundamentally rectifies this imbalance by centering ancestral and socio-demographic indicators to protect the historically unseen.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-[#243A2F] border border-[#2F4438] p-5 rounded-2xl relative shadow-xs">
                  <div className="p-2 w-8 h-8 rounded-lg bg-[#AF6B5E]/20 text-[#E09586] mb-4 flex items-center justify-center">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-2xl font-bold text-white">5x Survival</h3>
                  <p className="text-[11px] text-[#A3B899] font-medium mt-1">Relative clinical survival when patient risks are stratified and addressed in early stages.</p>
                </div>

                <div className="bg-[#243A2F] border border-[#2F4438] p-5 rounded-2xl relative shadow-xs">
                  <div className="p-2 w-8 h-8 rounded-lg bg-yellow-600/20 text-[#DDD] mb-4 flex items-center justify-center">
                    <ShieldAlert className="w-4 h-4 text-[#DDD]" />
                  </div>
                  <h3 className="font-mono text-2xl font-bold text-stone-200">1.6 Years</h3>
                  <p className="text-[11px] text-[#A3B899] font-medium mt-1">Average wait time delay from initial compound symptoms to appropriate specialist therapy globally.</p>
                </div>

                <div className="bg-[#243A2F] border border-[#2F4438] p-5 rounded-2xl relative shadow-xs">
                  <div className="p-2 w-8 h-8 rounded-lg bg-[#3A5F4F]/45 text-[#A3B899] mb-4 flex items-center justify-center">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="font-mono text-2xl font-bold text-[#EBD6D1]">&lt; 3% Data</h3>
                  <p className="text-[11px] text-[#A3B899] font-medium mt-1">Oncological registry profiles derived from diverse African or minority populations globally today.</p>
                </div>

                <div className="bg-[#243A2F] border border-[#2F4438] p-5 rounded-2xl relative shadow-xs col-span-1 sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <Activity className="w-5 h-5 text-[#E09586]" />
                    <div>
                      <p className="text-xs text-stone-200 font-bold font-mono uppercase tracking-wide">Physician Relief</p>
                      <p className="text-[11px] text-stone-300 mt-0.5">Quiet background calculations prevent clerical alert fatigue. Clear diagnostic triage indicators build clinician confidence.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE DUROTIMI AI SOLUTION - Soft, high-comfort card groupings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-[#AF6B5E] font-mono tracking-widest uppercase">The Essence of Our Software Suite</span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#222B27]">
            Intuitive, supportive tools that restore clinical focus.
          </h2>
          <p className="text-stone-650 text-sm sm:text-base">
            Durotimi's clinical technology integrates seamlessly into existing healthcare records. We analyze patterns of complex 
            medical variables, family timelines, and ancestry metrics to present actionable, clear, explainable care insights.
          </p>
        </div>

        {/* Blueprint displays */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          
          <div className="bg-white border border-stone-200/80 hover:border-emerald-900/10 p-8 rounded-2xl shadow-xs transition duration-300 space-y-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#3A5F4F] font-bold font-mono text-sm leading-none">01</div>
            <h3 className="font-display font-semibold text-[#222B27] text-lg">Compassionate Cohort Calibration</h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              We continually refine and calibrate risk models on real-world representative demographics. 
              This filters out geographical blind spots, giving doctors reliable early detection logic suited for their actual communities.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 hover:border-emerald-900/10 p-8 rounded-2xl shadow-xs transition duration-300 space-y-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#F6EEEC] text-[#AF6B5E] font-bold font-mono text-sm leading-none">02</div>
            <h3 className="font-display font-semibold text-[#222B27] text-lg">Transparent & Explainable Risk</h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              We reject opaque, black-box clinical calculations. Durotimi presents traceable medical rationales so general 
              practitioners instantly understand the exact symptom metrics driving a safety flag.
            </p>
          </div>

          <div className="bg-white border border-stone-200/80 hover:border-emerald-900/10 p-8 rounded-2xl shadow-xs transition duration-300 space-y-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[#FAF8F5] text-[#3A5F4F] font-bold font-mono text-sm leading-none">03</div>
            <h3 className="font-display font-semibold text-[#222B27] text-lg">EHR-Ready Waitlist Reduction</h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              A healthcare product must save clinician time, not drain it. Our background technology works within FHIR EHR grids, 
              supplying prioritizations on general patient boards without disrupting face-to-face care.
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 4: SELECT BY STAKEHOLDER - Warm cream wrapper */}
      <section className="bg-[#FAF8F5] border-y border-stone-200/55 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="max-w-xl space-y-2">
              <span className="text-xs font-bold text-[#3A5F4F] font-mono tracking-widest uppercase">Targeted Gateways</span>
              <h2 className="font-display text-2.5xl sm:text-3xl font-semibold text-[#222B27]">
                Tailored pathways for collaborative success
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm">
                Empowering the entire clinical circle—from local healthcare providers to municipal ministries of health.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Clinician Card */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#AF6B5E] font-bold">For Clinicians</div>
                <h3 className="text-lg font-semibold text-[#222B27] font-display">A mindful diagnostic assistant</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Screen patients thoroughly and discover subtle compound factors without typing fatigue. Review medical records, 
                  ancestry variables, and micro-histories in a clear, cohesive style.
                </p>
              </div>
              <button
                onClick={() => setCurrentPage('clinicians')}
                className="w-full text-left py-2.5 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F6EEEC] text-[#3A5F4F] hover:text-[#AF6B5E] text-xs font-semibold transition flex items-center justify-between cursor-pointer"
              >
                Clinician Portal
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Health Systems Card */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#AF6B5E] font-bold">For Health Systems</div>
                <h3 className="text-lg font-semibold text-[#222B27] font-display">Sophi-care referral & fluid clinical paths</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Support oncology workflows, enhance diagnostic triage queues, reduce specialist system gridlock, 
                  and maximize primary-care coordination.
                </p>
              </div>
              <button
                onClick={() => setCurrentPage('health-systems')}
                className="w-full text-left py-2.5 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F6EEEC] text-[#3A5F4F] hover:text-[#AF6B5E] text-xs font-semibold transition flex items-center justify-between cursor-pointer"
              >
                Health Systems Portal
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Government Card */}
            <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-xs flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="font-mono text-[10px] uppercase tracking-wider text-[#AF6B5E] font-bold">For Governments</div>
                <h3 className="text-lg font-semibold text-[#222B27] font-display">Ethical digital oncology frameworks</h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Acquire sovereign, locally calibrated registries. Empower public general health channels, protect 
                  local datasets, and realize true diagnostic health equity.
                </p>
              </div>
              <button
                onClick={() => setCurrentPage('governments')}
                className="w-full text-left py-2.5 px-3 rounded-lg bg-[#FAF8F5] hover:bg-[#F6EEEC] text-[#3A5F4F] hover:text-[#AF6B5E] text-xs font-semibold transition flex items-center justify-between cursor-pointer"
              >
                Governments Portal
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: CLINICAL EVIDENCE INTEGRITY BANNER - Compassionate Ivory tone */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 md:p-12 border border-stone-200/80 bg-white rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FAF8F5] text-[#3A5F4F] border border-[#3A5F4F]/10 text-xs font-semibold">
              <ClipboardCheck className="w-4 h-4 text-[#AF6B5E]" />
              <span>Evidence-Led Validation</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-semibold text-[#222B27]">
              Rigorous science, verified study protocols.
            </h2>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              We completely discard unbacked, hyper-commercialized claims. We support absolute clinical transparency. 
              Review our validated clinical models, cohort definitions, ancestral calibration, and ROC-AUC scores 
              within our global registry study files.
            </p>
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('evidence')}
                className="px-5 py-2.5 bg-[#3A5F4F] text-white font-semibold text-xs rounded-xl transition hover:bg-[#2F4E41] flex items-center gap-1.5 cursor-pointer"
              >
                Access Model Registry
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-4 bg-[#FAF8F5] border border-stone-200 p-5 rounded-2xl flex flex-col justify-between h-full">
            <p className="text-xs text-stone-500 font-mono tracking-widest uppercase font-semibold">Study Cohort Insights</p>
            <div className="py-4 space-y-2">
              <div className="flex justify-between border-b border-stone-250 pb-1.5 text-xs">
                <span className="text-stone-600 font-sans">Accumulated Dataset:</span>
                <span className="font-mono font-bold text-stone-850">512,000+ files</span>
              </div>
              <div className="flex justify-between border-b border-stone-250 pb-1.5 text-xs">
                <span className="text-stone-600 font-sans">Stratifier AUC Avg:</span>
                <span className="font-mono font-bold text-[#3A5F4F]">0.89</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-stone-600 font-sans">Active Partners:</span>
                <span className="font-mono font-bold text-stone-850">London, Lagos</span>
              </div>
            </div>
            <p className="text-[10px] text-stone-400 leading-normal">All stats reflect documented prospective and academic validation studies.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: RESPONSIBLE MEDICINE AT HEART */}
      <section className="bg-[#FAF8F5] border-t border-stone-200/60 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="p-1.5 inline-block rounded-lg bg-[#F6EEEC] text-[#AF6B5E] border border-[#EBD6D1] text-xs font-bold font-mono">
              Responsible Medical AI Governance
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#222B27]">
              Trust is not just a digital standard. <br />
              <span className="text-[#3A5F4F] italic">It is our clinical duty of care.</span>
            </h2>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              We design medical software around high-risk clinical duties. This demands patient safety 
              mitigations, representative localization models, regular demographic audit protocols, 
              strict boundaries of intended use, and unconditional clinical autonomy.
            </p>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-white border border-stone-200 rounded-xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-700 shrink-0" />
                <span className="text-stone-750">Designed as an EHR companion, maintaining 100% <b>Physician-in-the-Loop</b> agency.</span>
              </div>
              <div className="p-3 bg-white border border-stone-200 rounded-xl flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#AF6B5E] shrink-0" />
                <span className="text-stone-750 font-sans">Complete regional sovereignty and absolute GDPR/HIPAA integrity standards.</span>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('responsible-ai')}
              className="text-xs font-bold text-[#3A5F4F] hover:text-[#AF6B5E] transition flex items-center gap-1.5 cursor-pointer"
            >
              Review our clinical safety guidelines
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-6 h-full flex flex-col justify-between shadow-xs">
            <h3 className="font-display font-semibold text-[#222B27] text-lg">Indication Boundaries for Clinicians</h3>
            <p className="text-stone-650 text-xs sm:text-sm leading-relaxed">
              We declare precise operational limits to ensure our algorithms are placed where they add true medical value.
            </p>
            
            <div className="space-y-3 pt-2">
              <div className="flex gap-3">
                <div className="text-emerald-700 font-bold text-xs shrink-0 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">✓ Indicated Use</div>
                <p className="text-stone-650 text-xs">Assisting primary care general practitioners with risk stratification and referral waitlist prioritization.</p>
              </div>
              <div className="border-t border-stone-150 my-2" />
              <div className="flex gap-3">
                <div className="text-[#AF6B5E] font-bold text-xs shrink-0 bg-[#F6EEEC] px-2 py-0.5 rounded border border-[#EBD6D1]">✗ Non-Indicated Use</div>
                <p className="text-stone-650 text-xs animate-pulse">Replacing human clinical diagnostics or driving autonomous, loop-free specialist appointments.</p>
              </div>
            </div>
            <p className="text-[10px] text-stone-400 font-mono mt-4">Aligned with standard international High-Risk Medical Software regulations.</p>
          </div>

        </div>
      </section>

      {/* SECTION 7: PRIMARY ACTION BOARD - Beautiful deep pine aesthetic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-16 bg-[#1C2C23] text-white rounded-3xl text-center space-y-6 relative overflow-hidden border border-[#2F4438]/60 shadow-xl">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#243A2F]/30 to-[#1C2C23]/30 pointer-events-none" />
          <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight relative z-10 text-white">
            Help us ensure that no patient is forgotten.
          </h2>
          <p className="max-w-2xl mx-auto text-stone-300 text-xs sm:text-sm leading-relaxed relative z-10 font-sans">
            Whether you are a local community practitioner, a hospital group safety administrator, a public health director, 
            or an equity-first impact investor — partner with Durotimi AI to deliver sovereign, representative cancer triage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4 relative z-10">
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-5 py-3 bg-white text-[#1C2C23] font-semibold text-xs rounded-lg transition hover:bg-stone-100 cursor-pointer"
            >
              Request a Clinical Brief
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-5 py-3 bg-[#3A5F4F] hover:bg-[#2F4E41] text-white font-semibold text-xs rounded-lg transition cursor-pointer"
            >
              Discuss a Pilot Integration
            </button>
            <button
              onClick={() => setCurrentPage('contact')}
              className="w-full sm:w-auto px-5 py-3 border border-stone-450 hover:bg-white/5 text-stone-200 font-semibold text-xs rounded-lg transition cursor-pointer"
            >
              Inquire as Investor
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
