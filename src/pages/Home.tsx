import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="pt-24 pb-24 px-8 lg:pl-32 max-w-7xl mx-auto relative">
      {/* Side perspective rail (Visual design element from Design System) */}
      <div className="fixed left-8 top-0 bottom-0 w-px perspective-rail hidden lg:block opacity-30 z-40"></div>

      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32">
        <div className="lg:col-span-7">
          <span className="inline-block px-3 py-1 bg-surface-container-high rounded-full text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">Available for Partnerships</span>
          <h1 className="font-headline text-5xl lg:text-7xl font-bold tracking-tighter leading-tight mb-8">
            Matheus De Araujo: <span className="text-primary">Software Engineer</span> & Digital Architect
          </h1>
          <p className="text-on-surface-variant text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
            Bridging the gap between complex engineering, strategic business frameworks, and regulatory landscapes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(184,195,255,0.3)]">
              Let's Talk
            </Link>
            <Link to="/portfolio" className="border border-outline-variant/20 hover:bg-surface-container-high text-on-surface px-8 py-4 rounded-lg font-bold transition-all">
              View Portfolio
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container shadow-2xl relative z-10 group">
            <img 
              alt="Matheus De Araujo" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://www.image2url.com/r2/default/images/1776042965574-cc1e7bba-d761-4da4-a841-77b4bdb57738.jpg" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-surface-container-lowest to-transparent">
              <p className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2">Current Focus</p>
              <p className="text-white text-sm font-medium mb-4">Architecting secure, scalable systems for the legal-tech revolution.</p>
              
              {/* Social Media Links under the picture */}
              <div className="flex gap-4">
                <a href="https://www.tiktok.com/@matheusaraujo_business?_t=ZT-8u5TeDCY5pj&_r=1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors text-sm font-bold">TikTok</a>
                <a href="https://x.com/MatheusDigital0" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors text-sm font-bold">Twitter</a>
                <a href="https://www.instagram.com/matheusdearaujo.entrepreneur/profilecard/?igsh=Mm84NXA1OTg0d2lp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors text-sm font-bold">Instagram</a>
                <a href="https://www.linkedin.com/in/matheusarabiz/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors text-sm font-bold">LinkedIn</a>
              </div>
            </div>
          </div>
          {/* Abstract decorative element */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
        </div>
      </section>

      {/* Business, Tech & Law Section */}
      <section className="mb-32 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <h2 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight mb-8">Business, Tech & Law.</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-6">
            With a foundation built on technical precision and a deep understanding of corporate dynamics, I curate digital experiences that serve more than just aesthetic purposes—they drive operational excellence.
          </p>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            My approach is rooted in the "Curator" philosophy: selecting only the most effective technologies and strategies to solve complex multi-dimensional problems across industries.
          </p>
        </div>
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
            <div className="text-primary mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>balance</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Legal Precision</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Navigating the complexities of compliance and digital law through code.
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant/10">
            <div className="text-primary mb-6">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
            </div>
            <h3 className="font-headline text-xl font-bold mb-4">Core Engineering</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              High-performance systems built with modern stacks for maximum scalability.
            </p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="mb-32">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight mb-4">Core Implementation Verticals</h2>
            <p className="text-neutral-500 max-w-xl">Deep-tech solutions engineered for operational efficiency and revenue expansion.</p>
          </div>
          <div className="hidden md:block h-px flex-1 mx-12 bg-outline-variant/10"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Custom Solutions */}
          <div className="md:col-span-4 bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
              <span className="text-neutral-600 font-headline font-bold text-4xl opacity-20 italic">01</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Custom Solutions</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 max-w-md">Bespoke technical frameworks designed for unique operational challenges. We don't use off-the-shelf templates; we build the exact machinery your specific workflow demands.</p>
            <Link to="/portfolio" className="inline-flex items-center text-primary font-bold text-sm hover:gap-3 transition-all">
              EXPLORE ARCHITECTURE <span className="material-symbols-outlined text-xs ml-2">arrow_forward</span>
            </Link>
          </div>
          
          {/* Database Reactivation */}
          <div className="md:col-span-2 bg-surface-container p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Database Reactivation</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">Mining hidden equity from your existing customer base through sophisticated re-engagement algorithms.</p>
          </div>
          
          {/* Unified Messaging Ecosystem */}
          <div className="md:col-span-3 bg-surface-container p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>hub</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Unified Messaging Ecosystem</h3>
            <p className="text-on-surface-variant leading-relaxed">Consolidate SMS, Email, and Social into a single source of truth. Zero lost leads. Maximum response velocity.</p>
          </div>
          
          {/* Lead Nurture & Automation */}
          <div className="md:col-span-3 bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rebase_edit</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Lead Nurture & Automation</h3>
            <p className="text-on-surface-variant leading-relaxed">Automated sequences that maintain human-level warmth while operating at inhuman scale. From capture to conversion.</p>
          </div>
          
          {/* Smart AI Chatbots */}
          <div className="md:col-span-2 bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300 border border-primary/5">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Smart AI Chatbots</h3>
            <p className="text-on-surface-variant leading-relaxed text-sm">LLM-powered agents trained on your documentation to handle frontline support and qualifying sales conversations 24/7.</p>
          </div>
          
          {/* Review Automation */}
          <div className="md:col-span-4 bg-surface-container p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="flex justify-between items-start mb-12">
              <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Review Automation</h3>
            <p className="text-on-surface-variant leading-relaxed mb-8 max-w-md">Programmatically generate 5-star social proof. We automate the capture, filtration, and publication of client success stories to boost your organic authority.</p>
            <Link to="/contact" className="inline-flex items-center text-primary font-bold text-sm hover:gap-3 transition-all">
              DOMINATE SEARCH <span className="material-symbols-outlined text-xs ml-2">arrow_forward</span>
            </Link>
          </div>

          {/* Lead Generation & SEO */}
          <div className="md:col-span-3 bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>travel_explore</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Lead Generation & SEO</h3>
            <p className="text-on-surface-variant leading-relaxed">Dominate search rankings and drive high-intent organic traffic. We build sustainable acquisition channels through technical SEO and targeted lead generation.</p>
          </div>

          {/* Meta Ads */}
          <div className="md:col-span-3 bg-surface-container p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>campaign</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Meta Ads (FB & IG)</h3>
            <p className="text-on-surface-variant leading-relaxed">Precision-targeted paid acquisition. We engineer high-converting ad campaigns across Facebook and Instagram to scale your revenue predictably.</p>
          </div>

          {/* Social Media Management */}
          <div className="md:col-span-3 bg-surface-container p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="w-12 h-12 bg-tertiary/10 rounded-xl flex items-center justify-center text-tertiary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dynamic_feed</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Social Media Management</h3>
            <p className="text-on-surface-variant leading-relaxed">Strategic content posting and community management. We maintain an active, engaging brand presence that builds trust and audience loyalty.</p>
          </div>

          {/* Content Production */}
          <div className="md:col-span-3 bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container-high transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-12">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>movie</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Content Production</h3>
            <p className="text-on-surface-variant leading-relaxed">High-quality, conversion-focused content creation. From short-form video to compelling copy, we produce the assets that fuel your marketing engine.</p>
          </div>
        </div>
      </section>

      {/* Technical Methodology Section */}
      <section className="mb-32 bg-surface-container-lowest rounded-3xl p-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-8">Engineered for <span className="text-tertiary">Performance</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Data Integrity First</h4>
                  <p className="text-neutral-500">Every implementation starts with a complete audit of your data flow to ensure zero leakage between platforms.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Low-Latency Execution</h4>
                  <p className="text-neutral-500">Speed is a feature. Our automations are optimized for sub-second response times to maximize lead conversion.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border border-primary flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 uppercase tracking-wide">Elastic Scaling</h4>
                  <p className="text-neutral-500">Infrastructure that grows with you. Whether handling 100 or 100,000 requests, the architecture remains stable.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="h-48 bg-surface-container rounded-xl flex flex-col items-center justify-center p-6 text-center">
                <p className="text-3xl font-headline font-bold text-primary mb-2">99.9%</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Uptime Reliability</p>
              </div>
              <div className="h-64 bg-surface-container-high rounded-xl overflow-hidden">
                <img alt="Abstract data visualization" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-64 bg-surface-container-high rounded-xl overflow-hidden">
                <img alt="Server infrastructure" className="w-full h-full object-cover opacity-50" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" referrerPolicy="no-referrer" />
              </div>
              <div className="h-48 bg-surface-container rounded-xl flex flex-col items-center justify-center p-6 text-center">
                <p className="text-3xl font-headline font-bold text-tertiary mb-2">4.2x</p>
                <p className="text-[10px] text-neutral-500 uppercase tracking-widest">Avg Revenue Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gumroad Link Section */}
      <section className="mb-32 bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/10">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 flex flex-col justify-center">
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-4 block">Exclusive Content</span>
            <h2 className="text-4xl font-headline font-bold tracking-tight mb-6">Unlock My Premium Digital Assets</h2>
            <p className="text-on-surface-variant mb-8 max-w-md leading-relaxed">
              Get access to the exact tools, templates, and frameworks I use to build high-performance systems and scale businesses. Available exclusively on my Gumroad store.
            </p>
            <div>
              <a 
                href="https://matheusdearaujo.gumroad.com/?_gl=1*j1ao8s*_ga*MTkyNDE3NjUyOS4xNzM5OTE5MjI4*_ga_6LJN6D94N6*MTc0MDI1MTc3MS45LjEuMTc0MDI1MTk3MC4wLjAuMA" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-primary text-on-primary px-8 py-4 rounded-lg font-bold transition-all hover:shadow-[0_0_20px_rgba(184,195,255,0.3)] items-center gap-2"
              >
                Visit My Gumroad <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
          <div className="relative h-96 md:h-auto">
            <img 
              alt="Matheus De Araujo Gumroad" 
              className="absolute inset-0 w-full h-full object-cover object-top" 
              src="https://drive.google.com/uc?export=view&id=1WOT-6noj3R_qhnQ1TiFA9tNegQFQfRs7" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-low to-transparent md:w-1/2 h-1/2 md:h-full bottom-0 md:bottom-auto"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 border-t border-outline-variant/10">
        <h2 className="font-headline text-4xl font-bold tracking-tight mb-6">Ready to upgrade your business operating system?</h2>
        <p className="text-on-surface-variant mb-12 max-w-2xl mx-auto">Slots for implementation audits are limited to ensure boutique-level quality and precise execution.</p>
        <Link to="/contact" className="inline-block bg-primary text-on-primary px-12 py-5 rounded-lg font-black text-lg tracking-tight hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20">
          Secure Your Slot
        </Link>
      </section>
    </main>
  );
}
