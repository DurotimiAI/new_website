import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CANCER_MODELS } from '../data';
import { FileSpreadsheet, ShieldAlert, BarChart3, Info, Sliders, Check, ShieldCheck, HeartPulse } from 'lucide-react';
import { CancerModelSpec } from '../types';

export default function EvidenceView() {
  const [selectedSpec, setSelectedSpec] = useState<CancerModelSpec>(CANCER_MODELS[0]);
  
  // Interactive Threshold Slider simulation variables
  const [cutoffThreshold, setCutoffThreshold] = useState(0.45); // default custom threshold

  // Calculate dynamic sensitivity vs specificity curves based on simple math models
  const baseSens = selectedSpec.sensitivity;
  const baseSpec = selectedSpec.specificity;
  
  // As cutoff index goes up (closer to 1.0), sensitivity goes down, specificity goes up.
  const dynamicSensitivity = Math.min(1.0, Math.max(0.2, baseSens + (0.45 - cutoffThreshold) * 0.45));
  const dynamicSpecificity = Math.min(1.0, Math.max(0.3, baseSpec - (0.45 - cutoffThreshold) * 0.55));
  const dynamicFalseNegative = Math.round((1.0 - dynamicSensitivity) * 100);

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <FileSpreadsheet className="w-3.5 h-3.5" />
          <span>Scientific Cohort Documentation</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#222B27] leading-[1.12]">
          Built for clinical trust. <br className="hidden sm:inline" />
          <span className="text-[#3A5F4F] italic font-medium font-serif">Validated with demographic integrity.</span>
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
          We believe in complete, open scientific transparency. We detail our active clinical studies, ancestral cohorts support, 
          and diagnostic statistics, providing partners with the verifiable proofs they need to deploy safely.
        </p>
      </section>

      {/* COMPACT SECTION 5 MODEL TABLE */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
          <div>
            <h2 className="font-display font-semibold text-xl text-[#222B27]">Primary Model Evaluation Registries</h2>
            <p className="text-stone-500 text-xs text-stone-600">
              Summary of local performance across retrospective and prospective research validation sites.
            </p>
          </div>
          <p className="text-[10px] text-stone-400 font-mono italic">
            *Study-specific threshold values optimized to protect families from alert-fatigue.
          </p>
        </div>

        <div className="bg-white border border-stone-250 rounded-2xl overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF8F5] border-b border-stone-200 text-[10px] font-mono text-stone-500 uppercase tracking-wider font-bold">
                  <th className="py-4 px-6">Active Model Pathway</th>
                  <th className="py-4 px-6 md:text-right">Demographic Population</th>
                  <th className="py-4 px-6 text-right">Dataset Records</th>
                  <th className="py-4 px-6">Validation Type</th>
                  <th className="py-4 px-6 text-right">AUC Ratio</th>
                  <th className="py-4 px-6 text-right">Sensitivity</th>
                  <th className="py-4 px-6 text-right">Specificity</th>
                  <th className="py-4 px-6">Model Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-150 text-xs sm:text-sm">
                {CANCER_MODELS.map((model) => (
                  <tr 
                    key={model.id}
                    onClick={() => {
                      setSelectedSpec(model);
                      setCutoffThreshold(0.45); // reset trigger
                    }}
                    className={`hover:bg-[#FAF8F5]/60 cursor-pointer transition-colors ${
                      selectedSpec.id === model.id ? 'bg-[#F6EEEC]/45 border-l-2 border-[#AF6B5E]' : ''
                    }`}
                  >
                    <td className="py-4 px-6 font-display font-semibold text-[#222B27]">{model.name}</td>
                    <td className="py-4 px-6 text-stone-600 max-w-xs md:text-right text-xs truncate font-serif italic">{model.population}</td>
                    <td className="py-4 px-6 font-mono text-stone-600 text-right font-medium">{model.datasetSize.toLocaleString()}</td>
                    <td className="py-4 px-6 font-mono text-[#3A5F4F] text-[11px] font-semibold">{model.validationType}</td>
                    <td className="py-4 px-6 font-mono text-right font-semibold text-stone-900">{model.auc.toFixed(2)}</td>
                    <td className="py-4 px-6 font-mono text-right text-[#AF6B5E] font-bold">{(model.sensitivity * 100).toFixed(0)}%</td>
                    <td className="py-4 px-6 font-mono text-right text-[#3A5F4F] font-bold">{(model.specificity * 100).toFixed(0)}%</td>
                    <td className="py-4 px-6">
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono font-semibold ${
                        model.status === 'Pilot Active' ? 'bg-emerald-50 text-emerald-800 border border-emerald-250/50' :
                        model.status === 'Research Use' ? 'bg-[#F6EEEC] text-[#AF6B5E] border border-[#EBD6D1]' :
                        'bg-stone-100 text-stone-600 border border-stone-200/50'
                      }`}>
                        {model.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FAF8F5] p-5 border-t border-stone-200 flex items-start gap-3.5 text-xs text-stone-600">
            <Info className="w-5 h-5 text-[#AF6B5E] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <b>Clinical Intent & Quality Statement:</b> The verification data presented above represents validated retrospective/prospective clinical cohorts. 
              Actual diagnostic triage efficiency will vary depending on specific localized workflows, population densities, and record ages. 
              We strictly maintain model evaluations to protect clinical trust and support true humanistic safety.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE SPECIFICITY & SENSITIVITY ROC TUNING SIMULATOR */}
      <section className="bg-white border border-stone-200 p-6 md:p-10 rounded-3xl shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1 bg-[#FAF8F5] text-[#3A5F4F] border border-[#3A5F4F]/10 text-[10px] font-mono px-2.5 py-1 rounded-md">
              <Sliders className="w-3.5 h-3.5 text-[#AF6B5E]" />
              <span>Interactive Safety Regulator</span>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#222B27]">
                Triage Threshold Calibration
              </h3>
              <p className="text-stone-550 text-xs leading-relaxed font-sans text-stone-600">
                A common clinical dilemma is balancing <b>diagnostic sensitivity</b> (doing absolute everything to avoid missing a trace risk) 
                versus <b>specificity</b> (preventing patient anxiety and unnecessary clinical backlogs). 
                Adjust the sliding risk regulator below to explore how Durotimi AI models balance this relationship dynamically.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-stone-250 text-xs">
                <span className="font-semibold text-stone-850 font-display block">Selected Triage Spec:</span>
                <span className="text-stone-550 text-[11px] font-mono block mt-0.5">{selectedSpec.name} (Calibration Cohort N={selectedSpec.datasetSize.toLocaleString()})</span>
              </div>

              {/* Slider element */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-stone-700 font-semibold">
                  <span>Risk Alert Sensitivity Threshold:</span>
                  <span className="font-mono font-bold text-[#AF6B5E]">{cutoffThreshold.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="0.10"
                  max="0.90"
                  step="0.05"
                  value={cutoffThreshold}
                  onChange={(e) => setCutoffThreshold(Number(e.target.value))}
                  className="w-full h-1.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#3A5F4F]"
                />
                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>High Sensitivity (Early Capture Priority)</span>
                  <span>High Specificity (Fatigue Prevention)</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-7 bg-[#FAF8F5] border border-stone-200 p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center shadow-2xs">
            
            {/* Dynamic Sensitivity */}
            <div className="p-4 bg-white border border-stone-200/85 rounded-xl space-y-1">
              <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Tuned Sensitivity</span>
              <div className="font-mono text-3xl font-bold text-[#AF6B5E]">
                {(dynamicSensitivity * 100).toFixed(0)}%
              </div>
              <p className="text-[10px] text-stone-500 leading-normal pt-1.5">
                Championship detection rate—correctly alerting doctors of high-risk cases.
              </p>
            </div>

            {/* Dynamic Specificity */}
            <div className="p-4 bg-white border border-stone-200/85 rounded-xl space-y-1">
              <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Tuned Specificity</span>
              <div className="font-mono text-3xl font-bold text-[#3A5F4F]">
                {(dynamicSpecificity * 100).toFixed(0)}%
              </div>
              <p className="text-[10px] text-stone-500 leading-normal pt-1.5">
                Stability rating—minimizing false positives and system backlogs.
              </p>
            </div>

            {/* False Negative */}
            <div className="p-4 bg-white border border-stone-200/85 rounded-xl space-y-1">
              <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-semibold">Omission Risk</span>
              <div className="font-mono text-3xl font-bold text-red-700">
                {dynamicFalseNegative}%
              </div>
              <p className="text-[10px] text-stone-500 leading-normal pt-1.5">
                Unflagged cases relying entirely on clinician routine sensory review.
              </p>
            </div>

            <div className="sm:col-span-3 bg-[#F6EEEC] p-3.5 rounded-lg border border-[#EBD6D1] text-left flex items-start gap-2.5 text-xs text-stone-750 transition duration-200">
              <Info className="w-4 h-4 text-[#AF6B5E] shrink-0 mt-0.5" />
              <p className="text-[11px] leading-relaxed">
                {cutoffThreshold < 0.35 ? (
                  <span><b>Highly Sensitive Mode:</b> Guarantees diagnostic coverage, but requires patient coordination systems equipped to handle increased follow-ups.</span>
                ) : cutoffThreshold > 0.65 ? (
                  <span><b>Highly Filtered Mode:</b> Limits alert backlog nicely. Suitable for low-resource environments but may rely heavily on doctor observation for marginal patients.</span>
                ) : (
                  <span><b>Calibrated Balanced Triage:</b> Aligns with classic clinical safety. Maximizes detection efficiency while preserving standard physician resources.</span>
                )}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* DETAILED PEER STUDIES */}
      <section className="space-y-4">
        <h3 className="font-display font-semibold text-[#222B27] text-lg">Active Validation & Peer Studies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          
          <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-2 shadow-2xs">
            <span className="text-stone-450 font-mono text-[9px] uppercase tracking-wider block">Cohort study — UK oncology trust (Retrospective study)</span>
            <div className="font-bold text-[#222B27]">Measuring early staging shift across 12,500 lung cancer histories.</div>
            <p className="text-stone-500 leading-relaxed font-sans text-xs">
              Evaluating how back-scoring routine EHR rows could identify critical thoracic flags up to 12 months sooner than original specialty visual biopsy referrals.
            </p>
          </div>

          <div className="p-5 border border-stone-200 bg-white rounded-xl space-y-2 shadow-2xs">
            <span className="text-stone-450 font-mono text-[9px] uppercase tracking-wider block">Genetic Diversity panel — luth (Calibrational phase)</span>
            <div className="font-bold text-[#222B27]">Ancestry-specific specificity tuning on prostate risk models.</div>
            <p className="text-stone-500 leading-relaxed font-sans text-xs">
              Measuring the performance of prostate risk stratification on demographic groups of African descent, improving specificity over European-only database models.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
