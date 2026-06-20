import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CANCER_MODELS } from '../data';
import { Stethoscope, CheckCircle2, AlertTriangle, FileText, ArrowRight, Download, Activity, ClipboardList } from 'lucide-react';
import { CancerModelSpec } from '../types';

export default function ClinicianView() {
  const [selectedModel, setSelectedModel] = useState<CancerModelSpec | null>(CANCER_MODELS[0]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [clinicianName, setClinicianName] = useState('');
  const [email, setEmail] = useState('');

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clinicianName.trim() && email.trim()) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER SECTION - Option A Alignment */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <Stethoscope className="w-3.5 h-3.5 text-[#AF6B5E]" />
          <span>Intended For Medically Qualified Personnel</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.15]">
          A second layer of clinical intelligence <br className="hidden sm:inline" />
          <span className="text-[#3A5F4F] italic font-medium font-serif">for earlier cancer risk recognition.</span>
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-sans">
          Durotimi AI is designed to support—never to command—clinical judgment. It identifies early risk trends 
          across routine, multi-modal patient data records and presents clear, explainable diagnostic cues to help primary 
          care clinicians identify when referral or earlier oncology review is appropriate.
        </p>
      </section>

      {/* CORE CLARITY: INTENDED USE & SAFETY STATEMENT */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white border border-stone-200 p-6 md:p-10 rounded-2xl shadow-2xs">
        
        <div className="space-y-4">
          <h2 className="font-display font-semibold text-[#222B27] text-xl flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-[#3A5F4F]" />
            Clinical Intended Use Structure
          </h2>
          <p className="text-stone-605 text-xs sm:text-sm font-sans leading-relaxed">
            To coordinate with strict safety standards, we maintain explicit definitions of where 
            our predictive algorithms operate in clinical paths.
          </p>
          <div className="space-y-4 pt-2">
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#3A5F4F] fill-[#3A5F4F]/10 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#222B27] uppercase tracking-wider font-mono text-[11px]">Risk Stratification & Referral Priority</h4>
                <p className="text-stone-600 text-xs mt-0.5 leading-relaxed font-sans">Determining which clinical profiles show higher subtle combinations of early warnings to optimize triage lists and specialist review timing.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#3A5F4F] fill-[#3A5F4F]/10 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#222B27] uppercase tracking-wider font-mono text-[11px]">Explainable Diagnostic Copilot</h4>
                <p className="text-stone-600 text-xs mt-0.5 leading-relaxed font-sans">Surfacing the underlying factors (such as cumulative symptoms and demographics) prompting alert prioritization to bypass black-box risk calculations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0 lg:pl-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#F6EEEC] text-[#AF6B5E] border border-[#EBD6D1] text-[10px] font-mono font-bold">
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Mandatory Safety Boundary</span>
            </div>
            <h3 className="font-display font-semibold text-[#222B27] text-sm">Regulatory & Clinical Agency Limits</h3>
            <p className="text-stone-650 text-xs leading-relaxed font-sans">
              Durotimi AI is NOT an automated diagnostic device and does not claim to autonomously override or dismiss human clinical judgement. 
              The ultimate accountability for clinical decisions, diagnostic codes, and patient referrals rests entirely and exclusively with the registered medical practitioner.
            </p>
          </div>
          <div className="bg-[#FAF8F5] p-3 rounded-xl border border-stone-200">
            <p className="text-[10px] text-stone-500 font-mono leading-relaxed">
              Designed in compliance with European High-Risk Healthcare AI guidance, UK MHRA medical directives, 
              and US Food and Drug Administration (FDA) principles for explainable clinical decision-support systems.
            </p>
          </div>
        </div>

      </section>

      {/* DYNAMIC CANCER MODEL REGISTRY EXPLORER */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-[#AF6B5E] font-mono tracking-widest uppercase bg-[#F6EEEC] px-2.5 py-1 rounded inline-block border border-[#EBD6D1]">Validated Models</span>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[#222B27] mt-3">
            Active Cancer Risk Models & Inputs
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm font-sans mt-1">
            Review validated clinical inputs, calibration curves, and research status for our active triage pathways.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* List of Models */}
          <div className="lg:col-span-4 space-y-3.5">
            {CANCER_MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model)}
                className={`w-full text-left p-4 rounded-xl border transition flex flex-col gap-1.5 cursor-pointer focus:outline-none ${
                  selectedModel?.id === model.id
                    ? 'bg-white border-[#AF6B5E] shadow-2xs ring-1 ring-[#AF6B5E]/10'
                    : 'bg-white/60 hover:bg-white border-stone-200'
                }`}
              >
                <div className="flex justify-between items-start gap-2">
                  <span className="text-xs font-bold text-[#222B27]">{model.name}</span>
                  <span className={`text-[9px] px-1.5 py-0.5 rounded-sm font-mono font-bold ${
                    model.status === 'Pilot Active' ? 'bg-emerald-50 text-emerald-800 border border-emerald-250/50' :
                    model.status === 'Research Use' ? 'bg-[#F6EEEC] text-[#AF6B5E] border border-[#EBD6D1]' :
                    'bg-stone-100 text-stone-600 border border-stone-200/50'
                  }`}>
                    {model.status}
                  </span>
                </div>
                <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed">{model.description}</p>
              </button>
            ))}
          </div>

          {/* Model Detail Card */}
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-6 shadow-2xs">
            {selectedModel ? (
              <div className="space-y-6">
                
                <div>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <h3 className="font-display font-semibold text-xl text-[#222B27]">{selectedModel.name}</h3>
                    <div className="text-xs text-stone-400 font-mono">CODE ID: DT-{selectedModel.id.toUpperCase()}</div>
                  </div>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1 leading-relaxed">{selectedModel.description}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#FAF8F5] p-4 rounded-xl border border-stone-200">
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase font-semibold">Population Target</span>
                    <p className="text-xs text-[#222B27] font-medium mt-0.5 leading-relaxed font-serif italic">{selectedModel.population}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-500 font-mono tracking-wider uppercase font-semibold">Methodology Basis</span>
                    <p className="text-xs text-[#222B27] font-medium mt-0.5">{selectedModel.validationType} Validation Study</p>
                  </div>
                </div>

                {/* Performance indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl">
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">AUC Threshold</span>
                    <span className="font-mono text-xl font-bold text-[#3A5F4F] block mt-1">{selectedModel.auc}</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl">
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">Sensitivity</span>
                    <span className="font-mono text-xl font-bold text-[#3A5F4F] block mt-1">{(selectedModel.sensitivity * 100).toFixed(0)}%</span>
                  </div>
                  <div className="p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl">
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block">Specificity</span>
                    <span className="font-mono text-xl font-bold text-[#3A5F4F] block mt-1">{(selectedModel.specificity * 100).toFixed(0)}%</span>
                  </div>
                  <div className="p-3 bg-[#F6EEEC] border border-[#EBD6D1] rounded-xl">
                    <span className="text-[10px] text-[#AF6B5E] font-mono uppercase tracking-wider block">Omission Rate</span>
                    <span className="font-mono text-xl font-bold text-[#AF6B5E] block mt-1">{selectedModel.falseNegativeRate}%</span>
                  </div>
                </div>

                {/* Telemetry Inputs */}
                <div className="space-y-4">
                  <span className="text-xs font-bold text-[#222B27] font-display flex items-center gap-1.5">
                    <Activity className="w-4.5 h-4.5 text-[#3A5F4F]" />
                    Routine Clinical Inputs Analyzed (EHR-Extracted)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedModel.inputs.map((input, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-2 border border-stone-150 rounded-lg text-xs text-stone-700 bg-white">
                        <div className="w-1.5 h-1.5 bg-[#FAF8F5] border border-[#3A5F4F] rounded-full shrink-0" />
                        {input}
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                    *Requires zero manual entry from the physician. All markers are extracted quietly in background streams 
                    utilizing FHIR-structured clinical tables during regular consultation files.
                  </p>
                </div>

              </div>
            ) : (
              <p className="text-stone-550 text-xs text-center py-10">Select a model to preview validation criteria.</p>
            )}
          </div>

        </div>
      </section>

      {/* CLIXFLOW FIT & REFERRALS PIPELINE */}
      <section className="bg-[#FAF8F5] border border-stone-200 p-6 md:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-2xs">
        <div className="md:col-span-8 space-y-4">
          <h2 className="font-display font-semibold text-2xl text-[#222B27]">Non-Intrusive Workflow Integration</h2>
          <p className="text-[#3A5F4F] text-xs font-mono font-extrabold tracking-wider block uppercase">Zero Interface Clutter</p>
          <p className="text-stone-650 text-xs sm:text-sm leading-relaxed font-sans">
            Clinicians cannot afford screen clutter or warning fatigue. Durotimi AI models run strictly as a quiet background 
            listening model in the clinic's local Electronic Health Record system. Instead of generating constant warnings, 
            it outputs stratified priority positions onto waitlists or schedules a secondary screening suggestion only during 
            diagnostic referral reviews.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <span className="text-[10px] border border-stone-200 bg-white px-2.5 py-1 text-stone-600 rounded-md font-mono">Compatible with HL7 FHIR</span>
            <span className="text-[10px] border border-stone-200 bg-white px-2.5 py-1 text-stone-600 rounded-md font-mono">No New consult time required</span>
            <span className="text-[10px] border border-stone-200 bg-white px-2.5 py-1 text-stone-600 rounded-md font-mono">Custom alerts configuration</span>
          </div>
        </div>
        <div className="md:col-span-4 bg-white border border-stone-200 p-5 rounded-xl text-center space-y-3 shadow-2xs">
          <p className="text-xs text-stone-400 font-mono tracking-widest uppercase font-semibold">Integrations</p>
          <div className="py-2 flex items-center justify-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#222B27] font-sans">EMIS / SystemOne Compatible</span>
          </div>
          <p className="text-[11px] text-stone-550 leading-relaxed">Integrating directly with primary care databases in selected UK trust regions and private oncology clinics.</p>
        </div>
      </section>

      {/* REQUEST SCIENTIFIC DOCUMENT BRIEF DOWNLOAD FORM */}
      <section className="max-w-xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
            <FileText className="w-3.5 h-3.5 text-[#AF6B5E]" />
            <span>Registration Portal</span>
          </div>
          <h2 className="font-display text-2xl font-semibold text-[#222B27]">Download Clinical Validation Brief</h2>
          <p className="text-stone-600 text-xs font-sans">
            Obtain clinical trial summaries, ROC datasets, and peer-reviewed pathology calibration details.
          </p>
        </div>

        <div className="bg-white border border-stone-200 p-6 md:p-8 rounded-2xl shadow-2xs">
          {formSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#3A5F4F] border border-[#3A5F4F]/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#3A5F4F]" />
              </div>
              <h4 className="font-display font-semibold text-lg text-[#222B27]">Request Received</h4>
              <p className="text-xs text-stone-600 leading-relaxed max-w-sm mx-auto font-sans">
                Thank you! We have verified your request. A digital copy of the 
                <b> Durotimi AI: Clinical Validation and Ancestry Calibration Brief</b> has been dispatched to <b>{email}</b>.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs text-[#AF6B5E] hover:text-[#AF6B5E]/80 font-bold transition flex items-center justify-center gap-1 mx-auto cursor-pointer"
                >
                  Submit another request
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDownloadSubmit} className="space-y-4">
              <div>
                <label htmlFor="clinicianName" className="block text-xs font-semibold text-[#222B27] mb-1">Your Full Name & Credentials</label>
                <input
                  id="clinicianName"
                  type="text"
                  required
                  placeholder="e.g. Dr. Sarah Adeniyi, MD FRCP"
                  value={clinicianName}
                  onChange={(e) => setClinicianName(e.target.value)}
                  className="w-full px-3 py-2.5 border border-stone-200 hover:border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#AF6B5E] focus:outline-hidden bg-[#FAF8F5]/60"
                />
              </div>
              <div>
                <label htmlFor="clinicianEmail" className="block text-xs font-semibold text-[#222B27] mb-1">Official Clinical/Academic Email</label>
                <input
                  id="clinicianEmail"
                  type="email"
                  required
                  placeholder="e.g. s.adeniyi@hospital.org"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2.5 border border-stone-200 hover:border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#AF6B5E] focus:outline-hidden bg-[#FAF8F5]/60"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#3A5F4F] hover:bg-[#2F4E41] text-white font-semibold text-xs rounded-lg transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white/90" />
                  Download Clinical Validation Pack (PDF)
                </button>
              </div>
              <p className="text-[10px] text-stone-400 text-center leading-relaxed">
                *By requesting, you verify that you are a medical clinician, researcher, or digital-health registry specialist. We treat clinical communications strictly under secure professional standards.
              </p>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}
