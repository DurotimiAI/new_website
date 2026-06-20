import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Cpu, Landmark, UserCheck, FileBadge2, ArrowRight } from 'lucide-react';

export default function GovernmentsView() {
  const [activeStage, setActiveStage] = useState(0);

  const STAGES = [
    {
      title: 'Phase I: Local Cohort Calibration',
      subtitle: 'Target: Retrospective Alignment',
      dur: 'Months 1 - 4',
      desc: 'Calibration of core Durotimi models on regional demographic datasets. Ensures standard risk scoring filters out diagnostic bias caused by local genetic variables, ancestral heritage, and environmental parameters.',
      deliverable: 'Localized Baseline Specificity Report'
    },
    {
      title: 'Phase II: Silent EHR Integration',
      subtitle: 'Target: Clinical Safety Audit',
      dur: 'Months 5 - 8',
      desc: 'Silent background pilot within 5-10 designated regional primary care sites. Measures clinical accuracy, verifies HL7 FHIR connection pipes, and captures GPs alert-fatigue thresholds.',
      deliverable: 'Workflow Feasibility and Safety Certificate'
    },
    {
      title: 'Phase III: Regional Triage Trial',
      subtitle: 'Target: Referrals Optimization',
      dur: 'Months 9 - 14',
      desc: 'Active referral-list optimization in a single state or healthcare regional district. Clinical outcomes (early stage diagnostic shift and diagnostic savings) are tracked and compared.',
      deliverable: 'Interim Health Economics & Utility Brief'
    },
    {
      title: 'Phase IV: National Scaled Pipeline',
      subtitle: 'Target: Population Impact',
      dur: 'Months 15+',
      desc: 'Full scaling across national primary care networks, synchronized with the Ministry of Health non-communicable disease registries and national cancer screening programs.',
      deliverable: 'AI-Ready National Cancer Registries Platform'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER SECTION - Option D Alignment */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <Globe className="w-3.5 h-3.5 text-[#AF6B5E]" />
          <span>National Early Detection Policy</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.15]">
          Building AI-ready cancer detection systems <br className="hidden sm:inline" />
          <span className="text-[#3A5F4F] italic font-medium font-serif">for national health and equity impact.</span>
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
          Durotimi AI partners with Ministries of Health, federal non-communicable disease councils, and public health trusts 
          to transition oncology pathways from late-stage crisis response to early, demographically calibrated detection.
        </p>
      </section>

      {/* THE PUBLIC PROBLEM VS DUROTIMI RESPONSE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Policy Problem Card */}
        <div className="bg-[#1C2C23] border border-[#2F4438]/60 p-8 rounded-2xl text-white space-y-6 shadow-md">
          <div className="text-[#AF6B5E] font-mono text-xs font-bold tracking-widest uppercase bg-white/5 px-2.5 py-1 rounded inline-block">The Policy Obstacle</div>
          <h3 className="font-display font-semibold text-xl text-white">The Status Quo: Delayed Registry Data & High Costs</h3>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
            Many public health sectors rely on lagging retrospective cancer registries that record incidence reports years after 
            the critical diagnostic opportunity window has closed. At the same time, regional access disparities mean specialized mammogram 
            or PSA centers are heavily concentrated in affluent urban hubs, leaving rural families under-screened while emergency-care costs skyrocket.
          </p>
          <div className="space-y-3 pt-2 text-xs font-sans border-t border-white/5">
            <div className="flex gap-2">
              <span className="text-[#AF6B5E] font-bold">Late Diagnosis:</span>
              <span className="text-stone-300">Stage IV cancer interventions drain public health budgets up to 10x more than preventive early-stage triage.</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#AF6B5E] font-bold">Training Disparities:</span>
              <span className="text-stone-300">Underrepresented diverse cohorts lack ancestral database calibration, causing false negatives in off-the-shelf Western models.</span>
            </div>
          </div>
        </div>

        {/* Public Health Solution Card */}
        <div className="bg-white border border-stone-200 p-8 rounded-2xl space-y-6 flex flex-col justify-between shadow-2xs">
          <div className="space-y-4">
            <div className="text-[#3A5F4F] font-mono text-xs font-bold tracking-widest uppercase bg-[#FAF8F5] px-2.5 py-1 rounded inline-block border border-stone-200">The Sovereign Solution</div>
            <h3 className="font-display font-semibold text-xl text-[#222B27]">Empowering National Cancer Control Priorities</h3>
            <p className="text-stone-605 text-xs sm:text-sm leading-relaxed font-sans">
              Durotimi AI bridges public healthcare gaps by establishing clinical risk triage software directly at the frontline 
              of primary care clinics. This provides public systems with the digital diagnostics infrastructure necessary to coordinate earlier 
              clinical investigations, optimize specialist resources, and establish localized data sovereignty without upfront capital outlay.
            </p>
          </div>
          <p className="text-[10.5px] text-stone-400 font-mono leading-relaxed pt-2 border-t border-stone-150">
            *Fully aligned with WHO guidelines promoting localized screening and cancer database representation models in developing healthcare systems.
          </p>
        </div>

      </section>

      {/* FOUR STAGES: NATIONAL IMPLEMENTATION TIMELINE */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2.5 py-1 rounded inline-block border border-[#EBD6D1]">The Delivery Playbook</span>
          <h2 className="font-display text-2xl font-semibold text-[#222B27] mt-3">National Implementation Model</h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-2xl mx-auto font-sans leading-relaxed">
            Our stage-by-stage deployment framework guarantees rigorous data safety, community coordination, 
            and zero friction for busy medical practitioners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          
          {/* Phase selector tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {STAGES.map((stage, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`w-full text-left p-4 rounded-xl border transition flex items-center justify-between gap-3 cursor-pointer focus:outline-none ${
                  activeStage === idx
                    ? 'bg-white border-[#AF6B5E] shadow-2xs ring-1 ring-[#AF6B5E]/10 text-[#AF6B5E]'
                    : 'bg-white/60 hover:bg-white border-stone-200 text-stone-600'
                }`}
              >
                <div>
                  <div className="text-xs font-bold text-[#222B27]">{stage.title}</div>
                  <div className="text-[10px] text-stone-500 font-mono mt-0.5">{stage.dur}</div>
                </div>
                <ArrowRight className={`w-4 h-4 transition ${activeStage === idx ? 'text-[#AF6B5E] scale-110' : 'text-stone-300'}`} />
              </button>
            ))}
          </div>

          {/* Phase Details Display */}
          <div className="lg:col-span-8 bg-[#FAF8F5] border border-stone-200 p-6 md:p-8 rounded-2xl space-y-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-4">
              <span className="text-[10px] bg-[#F6EEEC] text-[#AF6B5E] border border-[#EBD6D1] font-mono font-bold px-2.5 py-1 rounded">
                Active Track: {STAGES[activeStage].dur}
              </span>
              <h3 className="text-xl font-semibold font-display text-[#222B27]">{STAGES[activeStage].title}</h3>
              <p className="text-stone-400 font-mono text-[11px] font-bold uppercase tracking-wider">{STAGES[activeStage].subtitle}</p>
              <p className="text-stone-650 text-xs sm:text-sm leading-relaxed font-sans mt-2">
                {STAGES[activeStage].desc}
              </p>
            </div>

            <div className="mt-4 p-4 bg-white border border-stone-200 rounded-xl shadow-3xs">
              <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Phase Key Deliverable</span>
              <div className="flex items-center gap-2.5 pt-1.5">
                <FileBadge2 className="w-5 h-5 text-[#3A5F4F]" />
                <span className="text-xs font-bold text-stone-900 font-sans">{STAGES[activeStage].deliverable}</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HEALTH GOVERNANCE & ETHICS */}
      <section className="bg-white border border-stone-200 p-8 rounded-3xl space-y-8 shadow-2xs">
        <div className="max-w-3xl space-y-3">
          <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2.5 py-1 rounded inline-block border border-[#EBD6D1]">Ethics & Governance Framework</span>
          <h2 className="font-display text-2xl font-semibold text-[#222B27] mt-1">Rigorous Demographically Bound Calibration</h2>
          <p className="text-stone-650 text-xs sm:text-sm leading-relaxed font-sans">
            Durotimi AI is deeply committed to ethical digital oncology delivery, operating transparent clinical governance 
            boards in the regions we run. Our focus is addressing ancestral health disparities by specifically capturing 
            underrepresented cohorts, including West African demographic populations too often completely missed in global datasets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-[#AF6B5E]">
              <ShieldCheck className="w-4.5 h-4.5 text-[#AF6B5E]" />
              <h3 className="font-semibold text-[#222B27] text-sm font-sans">Data Protection Sovereignty</h3>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-sans">
              We operate standard GDPR and regional non-communicable disease database firewalls to verify patient privacy 
              never leaves federal custody.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-[#3A5F4F]">
              <Cpu className="w-4.5 h-4.5 text-[#3A5F4F]" />
              <h3 className="font-semibold text-[#222B27] text-sm font-sans">Continuous Bias Audits</h3>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-sans">
              Algorithms are evaluated monthly with statistical variance scoring to detect and fix racial or age-based 
              bias patterns.
            </p>
          </div>

          <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-[#3A5F4F]">
              <UserCheck className="w-4.5 h-4.5 text-[#3A5F4F]" />
              <h3 className="font-semibold text-[#222B27] text-sm font-sans">Clinical Oversight Panels</h3>
            </div>
            <p className="text-stone-600 text-xs leading-relaxed font-sans">
              All active regional deployments are overseen by an independent clinical committee made of regional oncologists and GPs.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
