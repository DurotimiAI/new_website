import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Stethoscope, Building2, Globe, Heart, Shield, Landmark, Scale, Cpu, FileSpreadsheet, Send, MessageSquare } from 'lucide-react';
import { PageId } from '../types';

interface NavigationProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'solutions' | 'science' | 'company' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    setIsOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Group definitions for high-scannability
  const solutionItems = [
    { id: 'clinicians' as PageId, label: 'For Clinicians', icon: Stethoscope, desc: 'Stratified early risk insights for workflow-ready screening.' },
    { id: 'health-systems' as PageId, label: 'For Health Systems', icon: Building2, desc: 'Optimize patient referrals & reduce system delays.' },
    { id: 'governments' as PageId, label: 'For Governments', icon: Globe, desc: 'Democratic, localized digital cancer pathway infrastructure.' },
  ];

  const scienceItems = [
    { id: 'evidence' as PageId, label: 'Clinical Evidence', icon: FileSpreadsheet, desc: 'Peer validation data, metrics, and population tables.' },
    { id: 'technology' as PageId, label: 'The MunroCare® Suite', icon: Cpu, desc: 'Core platform architecture: Detect, Guide, Cloud, and Net.' },
    { id: 'responsible-ai' as PageId, label: 'Responsible AI & Governance', icon: Shield, desc: 'Intended use limits, clinical oversight framework, & ethics.' },
  ];

  const companyItems = [
    { id: 'about' as PageId, label: 'About Our Story', icon: Heart, desc: 'Yoruba concept "Durotimi" & our mission of clinical empathy.' },
    { id: 'investors' as PageId, label: 'Investor Relations', icon: Landmark, desc: 'Equity-led defensibility, markets, and clinical moats.' },
    { id: 'contact' as PageId, label: 'Contact & Inquiries', icon: Send, desc: 'Download validation briefs, query departments, or call.' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-emerald-900/10 shadow-xs py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo / Brand */}
          <div 
            onClick={() => navigateTo('home')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#3A5F4F] flex items-center justify-center text-white font-semibold text-lg shadow-sm group-hover:bg-[#2F4E41] transition-all shadow-emerald-900/10">
              D
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-semibold text-lg tracking-tight text-neutral-900">Durotimi AI</span>
                <span className="text-[10px] bg-[#F6EEEC] text-[#AF6B5E] font-medium px-1.5 py-0.5 rounded border border-[#EBD6D1]">
                  Care Registry
                </span>
              </div>
              <p className="text-[10px] text-stone-500 font-medium tracking-wide font-mono italic">"Stay with me"</p>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center gap-1">
            <button 
              onClick={() => navigateTo('home')}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? 'text-[#3A5F4F] bg-[#FAF8F5]/80 font-semibold' 
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/50'
              }`}
            >
              Home
            </button>

            {/* Strategic Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                  ['clinicians', 'health-systems', 'governments'].includes(currentPage)
                    ? 'text-[#3A5F4F] bg-[#FAF8F5]/80 font-semibold'
                    : 'text-stone-600 hover:text-[#3A5F4F] hover:bg-stone-100/50'
                }`}
              >
                Solutions
                <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ transform: activeDropdown === 'solutions' ? 'rotate(180deg)' : 'none' }} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-80 bg-white border border-stone-200 rounded-xl shadow-lg p-3 z-50"
                  >
                    <p className="text-[11px] font-semibold text-stone-400 font-mono tracking-wider uppercase mb-2 px-3">By Segment</p>
                    {solutionItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigateTo(item.id)}
                        className={`w-full text-left p-2.5 rounded-lg transition-colors flex gap-3 ${
                          currentPage === item.id ? 'bg-[#FAF8F5]' : 'hover:bg-stone-50'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg flex items-center justify-center ${currentPage === item.id ? 'bg-[#F6EEEC] text-[#AF6B5E]' : 'bg-stone-100 text-stone-500'}`}>
                          <item.icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-stone-800">{item.label}</div>
                          <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Science Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('science')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                  ['evidence', 'technology', 'responsible-ai'].includes(currentPage)
                    ? 'text-[#3A5F4F] bg-[#FAF8F5]/80 font-semibold'
                    : 'text-stone-600 hover:text-[#3A5F4F] hover:bg-stone-100/50'
                }`}
              >
                Clinical Science
                <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ transform: activeDropdown === 'science' ? 'rotate(180deg)' : 'none' }} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'science' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-1 w-80 bg-white border border-stone-200 rounded-xl shadow-lg p-3 z-50"
                  >
                    <p className="text-[11px] font-semibold text-stone-400 font-mono tracking-wider uppercase mb-2 px-3">Evidence & Structure</p>
                    {scienceItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigateTo(item.id)}
                        className={`w-full text-left p-2.5 rounded-lg transition-colors flex gap-3 ${
                          currentPage === item.id ? 'bg-[#FAF8F5]' : 'hover:bg-stone-50'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg flex items-center justify-center ${currentPage === item.id ? 'bg-[#F6EEEC] text-[#AF6B5E]' : 'bg-stone-100 text-stone-500'}`}>
                          <item.icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-stone-800">{item.label}</div>
                          <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Corporate Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className={`px-3.5 py-2 rounded-lg text-sm font-medium flex items-center gap-1 transition-colors ${
                  ['about', 'investors', 'contact'].includes(currentPage)
                    ? 'text-[#3A5F4F] bg-[#FAF8F5]/80 font-semibold'
                    : 'text-stone-600 hover:text-[#3A5F4F] hover:bg-stone-100/50'
                }`}
              >
                Company
                <ChevronDown className="w-4 h-4 transition-transform duration-200" style={{ transform: activeDropdown === 'company' ? 'rotate(180deg)' : 'none' }} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-1 w-85 bg-white border border-stone-200 rounded-xl shadow-lg p-3 z-50"
                  >
                    <p className="text-[11px] font-semibold text-stone-400 font-mono tracking-wider uppercase mb-2 px-3">Identity & Partnerships</p>
                    {companyItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => navigateTo(item.id)}
                        className={`w-full text-left p-2.5 rounded-lg transition-colors flex gap-3 ${
                          currentPage === item.id ? 'bg-[#FAF8F5]' : 'hover:bg-stone-50'
                        }`}
                      >
                        <div className={`p-1.5 rounded-lg flex items-center justify-center ${currentPage === item.id ? 'bg-[#F6EEEC] text-[#AF6B5E]' : 'bg-stone-100 text-stone-500'}`}>
                          <item.icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-stone-800">{item.label}</div>
                          <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">{item.desc}</div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Call to Actions on Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={() => navigateTo('about')}
              className="px-4 py-2 hover:bg-[#F6EEEC] text-[#AF6B5E] border border-[#EBD6D1] rounded-lg text-xs font-semibold transition"
            >
              The Story
            </button>
            <button 
              onClick={() => navigateTo('contact')}
              className="px-4 py-2 bg-[#3A5F4F] hover:bg-[#2F4E41] text-white rounded-lg text-xs font-semibold transition shadow-xs shadow-emerald-900/15"
            >
              Connect Care
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-600 hover:text-stone-900 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-stone-200"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              
              <div>
                <p className="text-[10px] font-bold text-stone-400 font-mono tracking-wider uppercase mb-1.5 px-3">Primary Navigation</p>
                <div className="grid grid-cols-2 gap-1 px-2">
                  <button
                    onClick={() => navigateTo('home')}
                    className={`text-left p-2 rounded-lg text-xs font-medium transition ${
                      currentPage === 'home' ? 'bg-stone-50 text-[#3A5F4F] font-semibold' : 'text-stone-600'
                    }`}
                  >
                    Home Main
                  </button>
                  <button
                    onClick={() => navigateTo('about')}
                    className={`text-left p-2 rounded-lg text-xs font-medium transition ${
                      currentPage === 'about' ? 'bg-[#F6EEEC] text-[#AF6B5E] font-semibold' : 'text-stone-600'
                    }`}
                  >
                    Our About Story
                  </button>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-stone-400 font-mono tracking-wider uppercase mb-1.5 px-3">Target Audiences</p>
                <div className="space-y-1 px-2">
                  {solutionItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      className={`w-full text-left p-2 rounded-lg text-xs font-medium flex items-center gap-2.5 transition ${
                        currentPage === item.id ? 'bg-[#FAF8F5] text-[#3A5F4F] font-semibold' : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <item.icon className="w-4 h-4 text-[#AF6B5E]" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-stone-400 font-mono tracking-wider uppercase mb-1.5 px-3">Evidence & Tech</p>
                <div className="space-y-1 px-2">
                  {scienceItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => navigateTo(item.id)}
                      className={`w-full text-left p-2 rounded-lg text-xs font-medium flex items-center gap-2.5 transition ${
                        currentPage === item.id ? 'bg-[#FAF8F5] text-[#3A5F4F] font-semibold' : 'text-stone-600 hover:bg-stone-100/50'
                      }`}
                    >
                      <item.icon className="w-4 h-4 text-[#3A5F4F]" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-stone-400 font-mono tracking-wider uppercase mb-1.5 px-3">Governance & Growth</p>
                <div className="space-y-1 px-2">
                  <button
                    onClick={() => navigateTo('investors')}
                    className={`w-full text-left p-2 rounded-lg text-xs font-medium flex items-center gap-2.5 transition ${
                      currentPage === 'investors' ? 'bg-[#FAF8F5] text-[#3A5F4F] font-semibold' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <Landmark className="w-4 h-4 text-stone-500" />
                    Investors
                  </button>
                  <button
                    onClick={() => navigateTo('contact')}
                    className={`w-full text-left p-2 rounded-lg text-xs font-medium flex items-center gap-2.5 transition ${
                      currentPage === 'contact' ? 'bg-[#F6EEEC] text-[#AF6B5E] font-semibold' : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    <Send className="w-4 h-4 text-stone-500" />
                    Contact & Audits
                  </button>
                </div>
              </div>

              <div className="pt-2 px-2 flex gap-2">
                <button 
                  onClick={() => navigateTo('about')}
                  className="flex-1 text-center py-2.5 bg-stone-100 hover:bg-stone-200 rounded-lg text-xs font-semibold text-stone-800 transition"
                >
                  Our Philosophy
                </button>
                <button 
                  onClick={() => navigateTo('contact')}
                  className="flex-1 text-center py-2.5 bg-[#3A5F4F] hover:bg-[#2F4E41] text-white rounded-lg text-xs font-bold transition shadow-xs"
                >
                  Connect Care
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
