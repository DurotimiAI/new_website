import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, Database, LayoutDashboard, Lock, Layers, CheckCircle2, ChevronRight, Activity } from 'lucide-react';

export default function TechnologyView() {
  const [activeStep, setActiveStep] = useState(0);

  const PRODUCT_SUITE = [
    {
      id: 'detect',
      icon: Cpu,
      name: 'Durotimi® Detect',
      tier: 'On-Premise / Hybrid Plug-In',
      desc: 'The empathetic background listening engine. Integrates seamlessly with standard Electronic Health Records (EHR) to parse combinations of chronic diagnostic histories, demographic vulnerability indexes, and subtle symptoms, avoiding any procedural overhead for physicians.',
      features: ['Background event listening', 'Vulnerability index weighting', 'HL7/FHIR query mapping']
    },
    {
      id: 'guide',
      icon: LayoutDashboard,
      name: 'Durotimi® Guide',
      tier: 'Clinician Safety Interface',
      desc: 'The explainable medical panel. Translates risk signals into clean, supportive diagrams showing why the patient profile was stratified, list-tracing the specific clinical indicators alongside prompt referral guideline checklists.',
      features: ['Direct input tracing', 'Guideline checklist generation', 'Physician feedback integration']
    },
    {
      id: 'cloud',
      icon: ShieldCheck,
      name: 'Durotimi® Cloud',
      tier: 'Sovereign Enclave Execution',
      desc: 'Our secure cloud processing environment. Patient coordinates are completely de-identified prior to diagnostic calculation, honoring clinical boundaries and regional National Data Sovereignty rules.',
      features: ['Zero-knowledge encryption', 'Regional database silo matching', 'Server-side audited telemetry']
    },
    {
      id: 'net',
      icon: Database,
      name: 'Durotimi® Net',
      tier: 'Collaborative Calibration Network',
      desc: 'Provides structured, anonymous, de-identified model updates. Aggregates demographic outcomes across clinics to actively tackle ancestral training disparities and home in on early risk factors.',
      features: ['Federal study aggregation', 'Ancestry model updates', 'Model drift mitigation']
    }
  ];

  const PIPELINE_FLOW = [
    {
      id: 'ingestion',
      name: '1. FHIR Ingestion',
      desc: 'EHR streams standard clinic events. Patient indicators (symptoms, age, labs) are quietly indexed without manual physician logging.'
    },
    {
      id: 'anonymization',
      name: '2. De-identification',
      desc: 'Cryptographic pipelines isolate name and identity, matching only demographic, genetic, and longitudinal indices.'
    },
    {
      id: 'evaluation',
      name: '3. Model Stratification',
      desc: 'Durotimi models matching localized risk matrices score the data points under zero-knowledge server paths.'
    },
    {
      id: 'explanation',
      name: '4. Explainable Response',
      desc: 'A comprehensive, math-backed prioritization signal is returned to the clinic waitlist dashboard for physician review.'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Core Technology Infrastructure</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.12]">
          The Durotimi® Suite: <br className="hidden sm:inline" />
          <span className="text-[#3A5F4F] italic font-medium font-serif">Localized clinical intelligence workflows.</span>
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
          We replace black-box buzzwords with high-integrity software architecture designed to fit with absolute safety 
          inside modern hospital guidelines. Our systems range from silent, background EHR interfaces to secure, ancestry-calibrated cloud enclaves.
        </p>
      </section>

      {/* PRODUCT PORTFOLIO DETAILED */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2.5 py-1 rounded border border-[#EBD6D1]">The Suite</span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#222B27] mt-3">Durotimi® Product Landscape</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRODUCT_SUITE.map((product) => (
            <div key={product.id} className="bg-white border border-stone-200 p-6 md:p-8 rounded-2xl flex flex-col justify-between space-y-6 shadow-2xs hover:border-stone-300 transition duration-300">
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#FAF8F5] text-[#3A5F4F] rounded-xl border border-stone-200">
                    <product.icon className="w-5 h-5 text-[#3A5F4F]" />
                  </div>
                  <span className="text-[10px] bg-[#F6EEEC] text-[#AF6B5E] border border-[#EBD6D1] px-2 py-0.5 rounded font-mono font-bold">
                    {product.tier}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-[#222B27] text-lg">{product.name}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{product.desc}</p>
                </div>

              </div>

              <div className="border-t border-stone-150 pt-4 space-y-2">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 font-semibold block">Key Architectural Modules</span>
                <div className="flex flex-wrap gap-1.5">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="bg-[#FAF8F5] text-stone-750 text-[10.5px] px-2.5 py-1 rounded-md border border-stone-200">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* THE PIPELINE DUAL TIMELINE INTERACTIVE */}
      <section className="bg-[#1C2C23] text-white rounded-3xl p-8 md:p-12 space-y-8 relative overflow-hidden shadow-xl border border-[#2F4438]/50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3A5F4F]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl space-y-2">
          <span className="text-[#AF6B5E] text-xs font-mono font-bold uppercase tracking-wider block bg-[#FAF8F5]/10 px-2 py-1.5 rounded inline-block">Security Pipeline In Action</span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white mt-1">Patient Data Protection Journey</h2>
          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
            Review how demographic risk events securely process from a local clinic triage into a stratified waitlist priority calculation, 
            conforming with absolute rigor to HIPAA, GDPR, and regional National Data Sovereignty laws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4">
          {PIPELINE_FLOW.map((flow, idx) => (
            <button
              key={flow.id}
              onClick={() => setActiveStep(idx)}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-44 cursor-pointer focus:outline-none ${
                activeStep === idx
                  ? 'bg-[#3A5F4F]/30 border-[#AF6B5E] text-white ring-1 ring-[#AF6B5E]/30'
                  : 'bg-[#24362B]/60 border-[#2F4438] text-stone-350 hover:border-stone-500'
              }`}
            >
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase font-mono tracking-wide">{flow.name}</div>
                <p className="text-[11.5px] text-stone-200 leading-relaxed font-sans mt-0.5 line-clamp-3">
                  {flow.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-white/5">
                <span className="text-[10px] text-stone-400 font-mono">Stage 0{idx+1}</span>
                {activeStep === idx && (
                  <span className="text-[10px] bg-[#AF6B5E] text-white font-mono px-1.5 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider">Active</span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-[#24362B]/75 border border-[#2F4438] p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#1C2C23] text-[#AF6B5E] rounded-lg shrink-0 border border-[#2F4438]">
              <Lock className="w-5 h-5 text-[#AF6B5E]" />
            </div>
            <div>
              <p className="text-xs font-bold font-sans text-white">Zero-Patient-Identifier Infrastructure</p>
              <p className="text-[11px] text-stone-300 leading-normal mt-0.5 max-w-xl font-sans">
                Durotimi AI models are strictly prohibited from accessing, processing, or transmitting direct biological metadata like names or physical addresses. 
                Our secure cloud architecture ensures only anonymized variables enter mathematical calculations.
              </p>
            </div>
          </div>
          <span className="text-[10px] border border-[#2F4438]/80 px-2.5 py-1 text-stone-300 rounded font-mono shrink-0 bg-[#1C2C23]">
            Sovereign Encryption Calibrated
          </span>
        </div>
      </section>

    </div>
  );
}
