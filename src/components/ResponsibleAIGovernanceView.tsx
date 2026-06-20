import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, ShieldCheck, CheckCircle2, ShieldAlert, Heart, Users, Eye, HelpCircle } from 'lucide-react';

export default function ResponsibleAIGovernanceView() {
  const [activeChecklist, setActiveChecklist] = useState({
    dataQuality: true,
    biasMitigation: true,
    explainability: true,
    humanOversight: true,
    regulatoryAdherence: false
  });

  const toggleCheck = (key: keyof typeof activeChecklist) => {
    setActiveChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <Scale className="w-3.5 h-3.5 text-[#AF6B5E]" />
          <span>Clinical Governance & Trust Portal</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.12]">
          Responsible Clinical AI & Governance. <br className="hidden sm:inline" />
          <span className="text-[#3A5F4F] italic font-medium font-serif">Trust is built on safety bounds.</span>
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
          Diagnostic triage software demands the highest levels of safety and scientific accountability. We design our algorithms to align 
          directly with strict risk oversight, model verification, data protection, and human-in-the-loop pathways of world-class healthcare regulators.
        </p>
      </section>

      {/* REACTION TO THE EU AI ACT & HIGH-RISK HEALTHCARE AI PATHWAY */}
      <section className="bg-[#1C2C23] text-white rounded-3xl p-8 md:p-12 space-y-6 relative overflow-hidden border border-[#2F4438]/50 shadow-xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3A5F4F]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-white/5 px-2.5 py-1 rounded inline-block">Regulatory Alignment</span>
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white mt-1">Class-Leading High-Risk Medical Specifications</h2>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed font-sans">
              Clinical decision systems are rightly classified under **High-Risk AI Systems** 
              by the European Parliament, UK MHRA, and US FDA. These protective frameworks protect patients 
              from diagnostic bias and protect medical staff from undue alert fatigue.
            </p>
            <p className="text-stone-400 text-xs leading-relaxed font-sans mt-2">
              Our continuous validation roadmap is meticulously calibrated around these rigorous parameters, mapping out 
              complete clinical data cards, ancestral cohort representation, and zero-knowledge model encryption.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#24362B]/75 border border-[#2F4438] rounded-2xl p-6 space-y-4 shadow-xl">
            <h4 className="font-display font-semibold text-white text-sm flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#AF6B5E]" />
              Sovereign Compliance Grid
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between border-b border-[#2F4438] pb-1.5 font-sans">
                <span className="text-stone-300">Risk Management Program:</span>
                <span className="text-[#AF6B5E] font-mono font-bold">Active System</span>
              </div>
              <div className="flex justify-between border-b border-[#2F4438] pb-1.5 font-sans">
                <span className="text-stone-300">Representative Cohorts:</span>
                <span className="text-[#AF6B5E] font-mono font-bold">Diverse Genomes</span>
              </div>
              <div className="flex justify-between border-b border-[#2F4438] pb-1.5 font-sans">
                <span className="text-stone-300">Auditable Model History:</span>
                <span className="text-[#AF6B5E] font-mono font-bold">Fully Traceable</span>
              </div>
              <div className="flex justify-between font-sans">
                <span className="text-stone-300">Clinical Agency:</span>
                <span className="text-[#AF6B5E] font-mono font-bold">Human-in-the-Loop</span>
              </div>
            </div>
            <p className="text-[10px] text-stone-450 font-mono text-center block pt-1 border-t border-white/5">
              *Designed to satisfy the European Union's High-Risk AI System Guidelines.
            </p>
          </div>

        </div>
      </section>

      {/* INTERACTIVE COMPONENT: HEALTHCARE CHECKPOINT GATEWAY */}
      <section className="bg-white border border-stone-200 p-6 md:p-10 rounded-2xl shadow-2xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2.5 py-1 rounded border border-[#EBD6D1]">Self-Audit Simulator</span>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-[#222B27]">The Clinical Checklist Pipeline</h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-sans">
              Understand how Durotimi AI models satisfy key clinical safety criteria before any stratified cancer-risk indicator is safely displayed on a clinician's panel. 
              Click steps below to toggle compliance parameters.
            </p>

            <div className="flex flex-wrap gap-2 text-[10px] font-mono border-t border-stone-150 pt-3">
              <span className="text-stone-500">Ethics Process Status:</span>
              {Object.values(activeChecklist).every(Boolean) ? (
                <span className="text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">System Fully Formed</span>
              ) : (
                <span className="text-[#AF6B5E] font-bold bg-[#F6EEEC] px-2 py-0.5 rounded border border-[#EBD6D1]">Final Verification Gate</span>
              )}
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#FAF8F5] border border-stone-200 p-6 rounded-xl space-y-3 shadow-2xs">
            
            {/* Step 1 */}
            <button 
              onClick={() => toggleCheck('dataQuality')}
              className="w-full text-left p-3 rounded-lg bg-white border border-stone-200 flex items-center justify-between gap-3 text-xs cursor-pointer hover:border-[#3A5F4F]"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className={`w-4 h-4 transition ${activeChecklist.dataQuality ? 'text-[#3A5F4F] fill-[#3A5F4F]/10' : 'text-stone-300'}`} />
                <span className="font-semibold text-[#222B27]">1. Data Representative Verification</span>
              </div>
              <span className="text-[10px] text-stone-500 font-mono">Cohort N &gt; 50,000</span>
            </button>

            {/* Step 2 */}
            <button 
              onClick={() => toggleCheck('biasMitigation')}
              className="w-full text-left p-3 rounded-lg bg-white border border-stone-200 flex items-center justify-between gap-3 text-xs cursor-pointer hover:border-[#3A5F4F]"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className={`w-4 h-4 transition ${activeChecklist.biasMitigation ? 'text-[#3A5F4F] fill-[#3A5F4F]/10' : 'text-stone-300'}`} />
                <span className="font-semibold text-[#222B27]">2. Demographics Ancestry Variance Scan</span>
              </div>
              <span className="text-[10px] text-stone-500 font-mono">African datasets prioritized</span>
            </button>

            {/* Step 3 */}
            <button 
              onClick={() => toggleCheck('explainability')}
              className="w-full text-left p-3 rounded-lg bg-white border border-stone-200 flex items-center justify-between gap-3 text-xs cursor-pointer hover:border-[#3A5F4F]"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className={`w-4 h-4 transition ${activeChecklist.explainability ? 'text-[#3A5F4F] fill-[#3A5F4F]/10' : 'text-stone-300'}`} />
                <span className="font-semibold text-[#222B27]">3. Explainable Mathematical Graph Output</span>
              </div>
              <span className="text-[10px] text-stone-500 font-mono">Zero 'black-box' algorithms</span>
            </button>

            {/* Step 4 */}
            <button 
              onClick={() => toggleCheck('humanOversight')}
              className="w-full text-left p-3 rounded-lg bg-white border border-stone-200 flex items-center justify-between gap-3 text-xs cursor-pointer hover:border-[#3A5F4F]"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className={`w-4 h-4 transition ${activeChecklist.humanOversight ? 'text-[#3A5F4F] fill-[#3A5F4F]/10' : 'text-stone-300'}`} />
                <span className="font-semibold text-[#222B27]">4. Physician-in-the-Loop Safeguard</span>
              </div>
              <span className="text-[10px] text-stone-500 font-mono">Clinician remains accountable</span>
            </button>

            {/* Step 5 */}
            <button 
              onClick={() => toggleCheck('regulatoryAdherence')}
              className="w-full text-left p-3 rounded-lg bg-white border border-stone-200 flex items-center justify-between gap-3 text-xs cursor-pointer hover:border-[#3A5F4F]"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className={`w-4 h-4 transition ${activeChecklist.regulatoryAdherence ? 'text-[#3A5F4F] fill-[#3A5F4F]/10' : 'text-stone-300'}`} />
                <span className="font-semibold text-[#222B27]">5. Multi-Region Regulatory Clearance</span>
              </div>
              <span className="text-[10px] font-mono font-bold text-[#AF6B5E] bg-[#F6EEEC] px-1.5 py-0.5 rounded border border-[#EBD6D1]">CE / MHRA Registration</span>
            </button>

          </div>

        </div>
      </section>

      {/* DETAILED GOVERNANCE PILLARS */}
      <section className="space-y-4">
        <h3 className="font-display font-semibold text-[#222B27] text-lg">Key Structural Guardrails</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          <div className="p-6 border border-stone-200 bg-white rounded-xl space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-[#AF6B5E]">
              <Users className="w-4.5 h-4.5 text-[#AF6B5E]" />
              <h4 className="font-semibold text-[#222B27] text-sm">Representation & Local Calibration</h4>
            </div>
            <p className="text-stone-600 leading-relaxed font-sans">
              Training cancer algorithms solely on Western datasets creates models that miscalculate molecular risk signals for patients across rest of the world. 
              By specifically calibrating models with diverse validation cohorts, we ensure results maintain accuracy and sensitivity 
              across multi-ethnic real-world populations.
            </p>
          </div>

          <div className="p-6 border border-stone-200 bg-white rounded-xl space-y-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-[#3A5F4F]">
              <Eye className="w-4.5 h-4.5 text-[#3A5F4F]" />
              <h4 className="font-semibold text-[#222B27] text-sm">Human Agency & Oversight</h4>
            </div>
            <p className="text-stone-650 leading-relaxed font-sans">
              Algorithmic recommendations are structured strictly as clinical decision-support guides. 
              We operate standard clinical auditing loops that allow verified primary care teams to flag or critique 
              model behavior. This maintains a supportive clinical framework that combats warning-fatigue or system disconnects.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
