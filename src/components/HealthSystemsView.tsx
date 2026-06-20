import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Layers, CheckCircle2, TrendingUp, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function HealthSystemsView() {
  const [patientVolume, setPatientVolume] = useState(5000);
  const [averageDelayDays, setAverageDelayDays] = useState(48);

  // Simple mathematical modeling for health system backlog impact
  const potentialEarlySaves = Math.round(patientVolume * 0.015); 
  const reducedSystemDelay = Math.round(averageDelayDays * 0.35); // 35% reduction in wait delay

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <Building2 className="w-3.5 h-3.5 text-[#AF6B5E]" />
          <span>For Hospital Groups & Integrated Care Networks</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.12]">
          Strengthening early cancer referral pathways, <br className="hidden sm:inline" />
          <span className="text-[#3A5F4F] italic font-medium font-serif">reducing clinical diagnostic bottle-necks.</span>
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
          Durotimi AI helps hospital networks prioritize clinic lists, optimize diagnostic 
          imaging schedules, and shorten patient wait times by identifying compound risks that are otherwise 
          diluted or lost within high-volume, unstratified general queues.
        </p>
      </section>

      {/* COMPARATIVE ROADMAPS */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="font-display font-semibold text-2xl text-[#222B27]">Comparing Diagnostic Referral Journeys</h2>
          <p className="text-stone-605 text-xs sm:text-sm max-w-2xl mx-auto font-sans">
            Review how our localized clinical intelligence restructures symptomatic queues to prioritize high-risk families safely.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
          
          {/* Traditional Path */}
          <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-6 relative shadow-2xs">
            <div className="absolute top-4 right-4 bg-red-50 text-red-700 text-[10px] font-mono px-2 py-0.5 rounded border border-red-100 uppercase tracking-wider font-semibold">
              Traditional Linear Sequence
            </div>
            
            <div className="space-y-1 pb-2 border-b border-stone-150">
              <h3 className="font-display font-semibold text-[#222B27] text-base">Linear Unstratified Queue</h3>
              <p className="text-stone-500 text-xs font-sans">Patients sorted strictly by intake date, regardless of multi-system clinical risk combinations.</p>
            </div>

            <div className="space-y-4">
              <div className="relative pl-6 border-l border-red-200 space-y-6 text-xs">
                
                <div className="relative">
                  <div className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-red-100 border border-red-400 flex items-center justify-center text-[10px] font-bold text-red-700">1</div>
                  <div className="font-semibold text-stone-800">Primary Care Encounter</div>
                  <p className="text-stone-550 mt-0.5 font-sans leading-relaxed">GP assesses individual signs. Subtle combined demographic factors are recorded but go unflagged.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-red-100 border border-red-400 flex items-center justify-center text-[10px] font-bold text-red-700">2</div>
                  <div className="font-semibold text-stone-800">Standard Queue Placement</div>
                  <p className="text-stone-550 mt-0.5 font-sans leading-relaxed">Patient enters massive general clinical referral backlog. Typical wait time of 48+ days.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-red-100 border border-red-400 flex items-center justify-center text-[10px] font-bold text-red-700">3</div>
                  <div className="font-semibold text-stone-800">Late Diagnostics & Imaging</div>
                  <p className="text-stone-550 mt-0.5 font-sans leading-relaxed">Symptom escalation finally prompts biopsy, often identifying cancer at Stage III or IV.</p>
                </div>

              </div>
            </div>

            <div className="bg-[#F6EEEC] p-4 rounded-xl border border-[#EBD6D1] flex gap-3 text-xs text-stone-750">
              <AlertTriangle className="w-5 h-5 text-[#AF6B5E] shrink-0 mt-0.5" />
              <p className="font-sans leading-relaxed text-stone-700">
                <span className="font-bold">Systemic Obstacle:</span> Delays lead to challenging therapeutic outcomes, elevated critical-care bed costs, and deep family distress.
              </p>
            </div>

          </div>

          {/* Durotimi Stratified Path */}
          <div className="bg-[#FAF8F5] border border-stone-200 p-6 rounded-2xl space-y-6 relative shadow-2xs">
            <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-800 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-200 uppercase tracking-wider font-semibold">
              Stratified Referral Triage
            </div>
            
            <div className="space-y-1 pb-2 border-b border-stone-150">
              <h3 className="font-display font-semibold text-[#222B27] text-base">Prioritized Adaptive Queue</h3>
              <p className="text-stone-500 text-xs font-sans">Continuous risk synthesis automatically bubbles high-priority clinical warnings for primary doctor evaluation.</p>
            </div>

            <div className="space-y-4">
              <div className="relative pl-6 border-l border-[#3A5F4F]/30 space-y-6 text-xs">
                
                <div className="relative">
                  <div className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-emerald-100 border border-[#3A5F4F] flex items-center justify-center text-[10px] font-bold text-[#3A5F4F]">1</div>
                  <div className="font-semibold text-stone-800 flex items-center gap-2">
                    Ambient Background Analysis
                    <span className="bg-emerald-50 text-emerald-850 text-[9px] px-1.5 rounded-sm font-mono border border-emerald-200">Durotimi® Active</span>
                  </div>
                  <p className="text-stone-550 mt-0.5 font-sans leading-relaxed">EHR extracts clinical variables and flags subtle shifts quietly during the physician consultation.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-emerald-100 border border-[#3A5F4F] flex items-center justify-center text-[10px] font-bold text-[#3A5F4F]">2</div>
                  <div className="font-semibold text-stone-800">Explainable Triage Routing</div>
                  <p className="text-stone-550 mt-0.5 font-sans leading-relaxed">Alerts clinician to coordinate priority diagnostic slots, avoiding broad general queues.</p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] top-0 w-4 h-4 rounded-full bg-emerald-100 border border-[#3A5F4F] flex items-center justify-center text-[10px] font-bold text-[#3A5F4F]">3</div>
                  <div className="font-semibold text-stone-800">Earlier Specialist Evaluation</div>
                  <p className="text-stone-550 mt-0.5 font-sans leading-relaxed">Biopsy captured at Stage I or II, where intervention survival probabilities statistically exceed 85%.</p>
                </div>

              </div>
            </div>

            <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-150 flex gap-3 text-xs text-stone-750">
              <CheckCircle2 className="w-5 h-5 text-emerald-850 shrink-0 mt-0.5" />
              <p className="font-sans leading-relaxed text-stone-700">
                <span className="font-bold">Systemic Outcome:</span> Accelerates appropriate referrals, mitigates regional healthcare disparities, and optimizes hospital bed capacities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE CLINICAL BACKLOG ESTIMATOR */}
      <section className="bg-white border border-stone-200 p-6 md:p-10 rounded-2xl shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2.5 py-1 rounded inline-block border border-[#EBD6D1]">System Impact Modeler</span>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#222B27] mt-2">
              Review Expected Impact on Your Patient Backlog
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
              Adjust clinic cohort parameters to model how much early triage assistance and delay reduction Durotimi AI can unlock for your network.
            </p>

            {/* Backlog volume slider */}
            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs text-stone-700 mb-1 font-semibold">
                  <span>Annual Clinic Patient Intake:</span>
                  <span className="font-mono font-bold text-[#AF6B5E]">{patientVolume.toLocaleString()} cases</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={patientVolume}
                  onChange={(e) => setPatientVolume(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#3A5F4F]"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs text-stone-700 mb-1 font-semibold">
                  <span>Baseline General Referral Delay:</span>
                  <span className="font-mono font-bold text-[#3A5F4F]">{averageDelayDays} days</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="120"
                  step="2"
                  value={averageDelayDays}
                  onChange={(e) => setAverageDelayDays(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#3A5F4F]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1" />

          <div className="lg:col-span-6 bg-[#FAF8F5] border border-stone-200 p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 shadow-2xs">
            
            <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-1 shadow-3xs">
              <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase font-semibold block">Triage Saved Time</span>
              <div className="font-mono text-3xl font-bold text-[#AF6B5E] flex items-baseline gap-1">
                -{reducedSystemDelay} <span className="text-xs text-stone-500 font-medium">days</span>
              </div>
              <p className="text-[10.5px] text-stone-500 leading-relaxed pt-1 font-sans">
                Estimated reduction in critical diagnostic bottlenecks through immediate secondary flagging.
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-1 shadow-3xs">
              <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase font-semibold block">Stage Shift Capture</span>
              <div className="font-mono text-3xl font-bold text-[#3A5F4F] flex items-baseline gap-1">
                {potentialEarlySaves} <span className="text-xs text-stone-500 font-medium font-sans">patients</span>
              </div>
              <p className="text-[10.5px] text-stone-500 leading-relaxed pt-1 font-sans">
                Estimated high-risk patient profiles prioritized clinical follow-up rather than decaying in unstratified general waitlists.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ENTERPRISE STANDARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-2xs">
          <div className="p-2 w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#3A5F4F] flex items-center justify-center border border-stone-200">
            <ShieldCheck className="w-4.5 h-4.5 text-[#3A5F4F]" />
          </div>
          <h3 className="font-display font-semibold text-[#222B27] text-sm">Strict Auditable Standards</h3>
          <p className="text-stone-600 text-xs leading-relaxed font-sans">
            Fully HIPAA and GDPR compliant. Patient access logs, model runs, and clinical metrics are strictly encrypted 
            and held within the health system's regional database silo.
          </p>
        </div>

        <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-2xs">
          <div className="p-2 w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#3A5F4F] flex items-center justify-center border border-stone-200">
            <Layers className="w-4.5 h-4.5 text-[#3A5F4F]" />
          </div>
          <h3 className="font-display font-semibold text-[#222B27] text-sm">Low-Resource Scalability</h3>
          <p className="text-stone-600 text-xs leading-relaxed font-sans">
            Optimized for tiered municipal networks, supporting disconnected or high-latency rural clinics 
            without interrupting local diagnostic loops.
          </p>
        </div>

        <div className="bg-white border border-stone-200 p-6 rounded-2xl space-y-3 shadow-2xs">
          <div className="p-2 w-8 h-8 rounded-lg bg-[#FAF8F5] text-[#3A5F4F] flex items-center justify-center border border-stone-200">
            <TrendingUp className="w-4.5 h-4.5 text-[#3A5F4F]" />
          </div>
          <h3 className="font-display font-semibold text-[#222B27] text-sm">Clinical Quality Audits</h3>
          <p className="text-stone-600 text-xs leading-relaxed font-sans">
            Supports randomized clinical trial studies, output validity feedback, and transparent sensitivity reports 
            directly shared with hospital medical ethics boards.
          </p>
        </div>

      </section>

    </div>
  );
}
