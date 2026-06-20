import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from './types';
import Navigation from './components/Navigation';
import HomeView from './components/HomeView';
import ClinicianView from './components/ClinicianView';
import HealthSystemsView from './components/HealthSystemsView';
import GovernmentsView from './components/GovernmentsView';
import EvidenceView from './components/EvidenceView';
import TechnologyView from './components/TechnologyView';
import ResponsibleAIGovernanceView from './components/ResponsibleAIGovernanceView';
import InvestorsView from './components/InvestorsView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import { Heart, Mail, Shield, Building, Globe, Landmark, Scale, Stethoscope } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Smooth top scroll on state page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeView setCurrentPage={setCurrentPage} />;
      case 'clinicians':
        return <ClinicianView />;
      case 'health-systems':
        return <HealthSystemsView />;
      case 'governments':
        return <GovernmentsView />;
      case 'evidence':
        return <EvidenceView />;
      case 'technology':
        return <TechnologyView />;
      case 'responsible-ai':
        return <ResponsibleAIGovernanceView />;
      case 'investors':
        return <InvestorsView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col selection:bg-[#AF6B5E]/20 selection:text-[#AF6B5E]">
      
      {/* Dynamic Navigation */}
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Container Page Content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#1B2921] text-stone-200 border-t border-[#2F4438] pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14">
          
          {/* Logo & Narrative */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#3A5F4F] flex items-center justify-center font-bold text-base text-white">
                D
              </div>
              <div>
                <span className="font-display font-semibold tracking-tight text-stone-100 text-base block">Durotimi AI</span>
                <span className="text-[10px] text-[#A3B899] font-mono italic block">"Stay with me"</span>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed font-sans">
              Developing localized clinical intelligence for early-stage cancer risk detection and diagnostic triage. 
              We empower clinic networks, health authorities, and public health systems globally.
            </p>
            <p className="text-[10px] text-[#869A7E] font-mono">
              Registries in London (UK) & Lagos (Nigeria). All model stats represent retrospective/prospective validation trial phases.
            </p>
          </div>

          {/* Quick Pathways */}
          <div className="md:col-span-2 space-y-4 text-xs">
            <h4 className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#A3B899]">Target Portals</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => setCurrentPage('clinicians')} className="hover:text-white flex items-center gap-1.5 transition">
                  <Stethoscope className="w-3.5 h-3.5 text-[#E09586]" />
                  Clinicians
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('health-systems')} className="hover:text-white flex items-center gap-1.5 transition">
                  <Building className="w-3.5 h-3.5 text-[#E09586]" />
                  Health Systems
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('governments')} className="hover:text-white flex items-center gap-1.5 transition">
                  <Globe className="w-3.5 h-3.5 text-[#E09586]" />
                  Governments
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('investors')} className="hover:text-white flex items-center gap-1.5 transition">
                  <Landmark className="w-3.5 h-3.5 text-[#E09586]" />
                  Investors
                </button>
              </li>
            </ul>
          </div>

          {/* Science & Compliance */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#A3B899]">Clinical Integrity</h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button onClick={() => setCurrentPage('evidence')} className="hover:text-white transition block text-left">
                  Cancers Model Registry & AUC
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('technology')} className="hover:text-white transition block text-left">
                  The MunroCare® Platform Suite
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('responsible-ai')} className="hover:text-white flex items-center gap-1.5 transition text-left">
                  <Scale className="w-3.5 h-3.5 text-[#A3B899]" />
                  Responsible AI Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('about')} className="hover:text-white flex items-center gap-1.5 transition text-left">
                  <Heart className="w-3.5 h-3.5 text-[#E09586] fill-[#E09586]/20" />
                  The Durotimi Story
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Dispatch channels */}
          <div className="md:col-span-3 space-y-4 text-xs">
            <h4 className="font-mono text-[10px] uppercase font-bold tracking-wider text-[#A3B899]">Official Channel</h4>
            <p className="text-stone-300 leading-relaxed max-w-sm">
              Please route all direct inquiries, study proposals, and database validation audits strictly to:
            </p>
            <div className="flex items-center gap-2 p-2.5 bg-[#253A2F] border border-[#2F4438] rounded-lg">
              <Mail className="w-4 h-4 text-[#EBD6D1] shrink-0" />
              <a href="mailto:info@durotimi.com" className="font-mono text-xs font-bold text-stone-200 hover:underline">
                info@durotimi.com
              </a>
            </div>
          </div>

        </div>

        {/* Sovereign footer copyrights bar */}
        <div className="max-w-7xl mx-auto border-t border-[#2F4438] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#869A7E] font-mono">
          <div>
            © {new Date().getFullYear()} Durotimi AI. Registered Partnership. All rights reserved.
          </div>
          <div className="flex gap-4">
            <span>HIPAA Compliant</span>
            <span>GDPR Sovereign Secure</span>
            <span>CE/MHRA Medical Pathway Software Registrant</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
