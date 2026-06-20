import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, MessageSquare, Mail, Building2, Stethoscope, Landmark } from 'lucide-react';

type DepartmentType = 'clinical' | 'government' | 'investor' | 'general';

export default function ContactView() {
  const [department, setDepartment] = useState<DepartmentType>('general');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [organization, setOrganization] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim() && message.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="pt-24 pb-16 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#F6EEEC] border border-[#EBD6D1] text-[#AF6B5E] text-xs font-semibold">
          <MessageSquare className="w-4 h-4 text-[#AF6B5E]" />
          <span>Professional Inquiry Desk</span>
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-[#222B27] leading-tight">
          Partner with us to protect families earlier.
        </h1>
        <p className="text-stone-650 text-sm sm:text-base leading-normal font-sans">
          Route your inquiry to our clinical, governmental, or investment dispatch desk. 
          Use our consistent official channel for all audit or pilot requests.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Contact info channels */}
        <div className="lg:col-span-4 space-y-6">
          
          <div className="bg-white border border-stone-205 p-6 rounded-2xl space-y-4 shadow-2xs">
            <h3 className="font-display font-semibold text-[#222B27] text-base">Consistent Communication</h3>
            <p className="text-stone-605 text-xs leading-relaxed font-sans">
              To rectify legacy data errors and streamline safety reviews, all electronic mail inquiries are routed 
              exclusively under one official address:
            </p>

            <div className="flex items-center gap-3 p-3 bg-[#FAF8F5] border border-stone-200 rounded-xl">
              <Mail className="w-5 h-5 text-[#3A5F4F] shrink-0" />
              <div>
                <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider block font-bold">Official Registry Email</span>
                <a href="mailto:info@durotimi.com" className="text-xs font-mono text-[#AF6B5E] font-bold hover:underline">
                  info@durotimi.com
                </a>
              </div>
            </div>
            
            <p className="text-[10.5px] text-stone-400 leading-relaxed font-mono italic">
              *Please bypass old communications sent to durotimiai.com; that legacy channel has been fully de-commissioned for medical safety coherence.
            </p>
          </div>

          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 space-y-3 shadow-2xs">
            <h4 className="font-display font-semibold text-stone-800 text-xs font-mono uppercase tracking-wide">Our Global Desks</h4>
            <div className="space-y-4 text-xs text-stone-650 font-sans">
              <div>
                <span className="font-bold text-stone-900 block">London UK Office:</span>
                <span className="text-[11px] text-stone-550 block mt-0.5 pointer-events-none leading-relaxed">EHR Compliance and Hospital Trust Pilots Development</span>
              </div>
              <div className="border-t border-stone-200/60 my-2" />
              <div>
                <span className="font-bold text-stone-900 block">Lagos Nigeria Office:</span>
                <span className="text-[11px] text-stone-550 block mt-0.5 pointer-events-none leading-relaxed">Demographic Research Studies and Primary Care Deployments</span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic Dispatch Form */}
        <div className="lg:col-span-8 bg-white border border-stone-200 p-6 md:p-8 rounded-2xl shadow-2xs">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#3A5F4F] border border-[#3A5F4F]/10 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#3A5F4F]" />
              </div>
              <h3 className="font-display font-semibold text-xl text-[#222B27]">Communication Dispatched</h3>
              <p className="text-stone-600 text-xs leading-relaxed font-sans">
                Thank you, <b>{name}</b>. Your inquiry has been processed and routed to our 
                <b className="text-[#AF6B5E] uppercase font-mono text-[11px] bg-[#F6EEEC] border border-[#EBD6D1] px-1.5 py-0.5 ml-1 rounded"> {department} desk</b>. 
                Our compliance team will review your credentials and reply within 48 business hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setOrganization('');
                  setMessage('');
                }}
                className="px-5 py-2.5 border border-stone-250 bg-[#FAF8F5] hover:bg-[#FAF8F5]/80 rounded-lg text-xs font-semibold text-stone-700 transition cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Department selector */}
              <div>
                <span className="block text-xs font-semibold text-stone-700 mb-2">Select Your Inquiry Category</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  
                  <button
                    type="button"
                    onClick={() => setDepartment('clinical')}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 cursor-pointer focus:outline-none ${
                      department === 'clinical'
                        ? 'border-[#AF6B5E] bg-[#F6EEEC]/30 text-[#AF6B5E] ring-1 ring-[#AF6B5E]/20'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <Stethoscope className="w-4 h-4 shrink-0 text-[#AF6B5E]" />
                    <span className="text-[10px] font-bold font-sans">Clinician validation</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDepartment('government')}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 cursor-pointer focus:outline-none ${
                      department === 'government'
                        ? 'border-[#AF6B5E] bg-[#F6EEEC]/30 text-[#AF6B5E] ring-1 ring-[#AF6B5E]/20'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <Building2 className="w-4 h-4 shrink-0 text-[#AF6B5E]" />
                    <span className="text-[10px] font-bold font-sans">Public/Ministry pilot</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDepartment('investor')}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 cursor-pointer focus:outline-none ${
                      department === 'investor'
                        ? 'border-[#AF6B5E] bg-[#F6EEEC]/30 text-[#AF6B5E] ring-1 ring-[#AF6B5E]/20'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <Landmark className="w-4 h-4 shrink-0 text-[#AF6B5E]" />
                    <span className="text-[10px] font-bold font-sans">Investor audit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDepartment('general')}
                    className={`p-3 rounded-xl border text-left transition flex flex-col gap-1.5 cursor-pointer focus:outline-none ${
                      department === 'general'
                        ? 'border-[#AF6B5E] bg-[#F6EEEC]/30 text-[#AF6B5E] ring-1 ring-[#AF6B5E]/20'
                        : 'border-stone-200 hover:border-stone-300 text-stone-600'
                    }`}
                  >
                    <Mail className="w-4 h-4 shrink-0 text-[#AF6B5E]" />
                    <span className="text-[10px] font-bold font-sans">General channels</span>
                  </button>

                </div>
              </div>

              {/* Form entries */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-stone-700 mb-1">Your Full Name & Post-Nominals</label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Professor David Cole, PhD"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2.5 border border-stone-200 hover:border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#AF6B5E] focus:outline-none bg-stone-50/50"
                  />
                </div>
                <div>
                  <label htmlFor="commEmail" className="block text-[11px] font-semibold text-stone-700 mb-1">Official Working Email Address</label>
                  <input
                    id="commEmail"
                    type="email"
                    required
                    placeholder="e.g. d.cole@university.ac.uk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 border border-stone-200 hover:border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#AF6B5E] focus:outline-none bg-stone-50/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="orgName" className="block text-xs font-semibold text-stone-700 mb-1">Organization / Affiliated Healthcare Trust</label>
                <input
                  id="orgName"
                  type="text"
                  placeholder="e.g. NHS Foundation Trust / Lagos Teaching Hospital / Equity Fund Name"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  className="w-full px-3 py-2.5 border border-stone-200 hover:border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#AF6B5E] focus:outline-none bg-stone-50/50"
                />
              </div>

              <div>
                <label htmlFor="userMsg" className="block text-xs font-semibold text-stone-700 mb-1">Detail Your Cooperation Goals</label>
                <textarea
                  id="userMsg"
                  required
                  rows={4}
                  placeholder="Describe your validation parameters, pilot scopes, audit requests, or general partnership timelines..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2.5 border border-stone-200 hover:border-stone-300 rounded-lg text-xs focus:ring-1 focus:ring-[#AF6B5E] focus:outline-none bg-stone-50/50"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#3A5F4F] hover:bg-[#2F4E41] text-white font-semibold text-xs rounded-lg transition flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Send className="w-4 h-4 shrink-0 text-white/90" />
                  Dispatch Inquiry to {department.toUpperCase()} Desk
                </button>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
