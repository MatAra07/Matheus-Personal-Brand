export default function Products() {
  return (
    <main className="w-full max-w-7xl mx-auto px-8 py-12 relative">
      {/* Side Perspective Rail */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 perspective-rail-vertical opacity-20 hidden xl:flex items-center gap-4 z-40">
        <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-outline">Digital Assets // 2024</span>
        <div className="h-24 w-[1px] bg-outline-variant"></div>
      </div>

      {/* Right Side Icon Nav (Decorative) */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 z-40 opacity-50">
        <span className="material-symbols-outlined hover:text-primary cursor-pointer transition-colors" style={{ fontSize: '20px' }}>grid_view</span>
        <span className="material-symbols-outlined hover:text-primary cursor-pointer transition-colors" style={{ fontSize: '20px' }}>view_list</span>
        <div className="w-[1px] h-12 bg-outline-variant mx-auto"></div>
        <span className="material-symbols-outlined hover:text-primary cursor-pointer transition-colors" style={{ fontSize: '20px' }}>filter_list</span>
      </div>

      {/* Header */}
      <header className="mb-20 pt-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-outline-variant/30 bg-surface-container-low/50 backdrop-blur-sm mb-6">
          <span className="material-symbols-outlined text-sm text-secondary">shopping_bag</span>
          <span className="text-xs font-headline tracking-widest uppercase text-on-surface-variant">Store</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">Tools for Creators</h1>
        <p className="text-xl text-neutral-400">Premium UI kits, code boilerplates, and design systems built to accelerate your workflow.</p>
      </header>

      {/* Gumroad Link Section */}
      <section className="mb-24 bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/10">
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

      {/* Products Grid (Gumroad Style) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {/* Product 1 */}
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl overflow-hidden group flex flex-col h-full hover:border-primary/50 transition-colors">
          <div className="aspect-[4/3] bg-surface-container-high relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=800&auto=format&fit=crop" alt="UI Kit Preview" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-sm font-bold font-mono">$49</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] uppercase tracking-wider text-neutral-300 font-bold">Figma</span>
              <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] uppercase tracking-wider text-neutral-300 font-bold">React</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-2">Aura UI System</h3>
            <p className="text-neutral-400 text-sm mb-6 flex-grow">A comprehensive, dark-mode first design system with 200+ components and React implementations.</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>
                <span className="text-xs text-neutral-500 ml-1">(42)</span>
              </div>
              <a href="https://matheusdearaujo.gumroad.com/?_gl=1*j1ao8s*_ga*MTkyNDE3NjUyOS4xNzM5OTE5MjI4*_ga_6LJN6D94N6*MTc0MDI1MTc3MS45LjEuMTc0MDI1MTk3MC4wLjAuMA" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors">View on Gumroad</a>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl overflow-hidden group flex flex-col h-full hover:border-tertiary/50 transition-colors">
          <div className="aspect-[4/3] bg-surface-container-high relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop" alt="Code Boilerplate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-sm font-bold font-mono">$129</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] uppercase tracking-wider text-neutral-300 font-bold">Next.js</span>
              <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] uppercase tracking-wider text-neutral-300 font-bold">Supabase</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-2">SaaS Launchpad</h3>
            <p className="text-neutral-400 text-sm mb-6 flex-grow">The ultimate Next.js boilerplate. Auth, payments, database, and UI components ready to go. Launch in days, not months.</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="text-xs text-neutral-500 ml-1">(18)</span>
              </div>
              <a href="https://matheusdearaujo.gumroad.com/?_gl=1*j1ao8s*_ga*MTkyNDE3NjUyOS4xNzM5OTE5MjI4*_ga_6LJN6D94N6*MTc0MDI1MTc3MS45LjEuMTc0MDI1MTk3MC4wLjAuMA" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wider text-tertiary hover:text-white transition-colors">View on Gumroad</a>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-2xl overflow-hidden group flex flex-col h-full hover:border-secondary/50 transition-colors">
          <div className="aspect-[4/3] bg-surface-container-high relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" alt="Data Viz Kit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="text-sm font-bold font-mono">Free</span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex gap-2 mb-3">
              <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] uppercase tracking-wider text-neutral-300 font-bold">D3.js</span>
              <span className="px-2 py-1 bg-surface-container-high rounded text-[10px] uppercase tracking-wider text-neutral-300 font-bold">React</span>
            </div>
            <h3 className="text-xl font-headline font-bold mb-2">Metrics Viz Library</h3>
            <p className="text-neutral-400 text-sm mb-6 flex-grow">A collection of beautiful, accessible, and responsive chart components built with D3 and React.</p>
            
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-outline-variant/20">
              <div className="flex items-center gap-1 text-yellow-500">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined text-sm">star</span>
                <span className="text-xs text-neutral-500 ml-1">(89)</span>
              </div>
              <a href="https://matheusdearaujo.gumroad.com/?_gl=1*j1ao8s*_ga*MTkyNDE3NjUyOS4xNzM5OTE5MjI4*_ga_6LJN6D94N6*MTc0MDI1MTc3MS45LjEuMTc0MDI1MTk3MC4wLjAuMA" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-wider text-secondary hover:text-white transition-colors">Download on Gumroad</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="max-w-3xl mx-auto border-t border-outline-variant/20 pt-20">
        <h2 className="text-3xl font-headline font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <h4 className="font-bold mb-2 flex items-center justify-between">
              Do I get lifetime updates?
              <span className="material-symbols-outlined text-neutral-500">expand_more</span>
            </h4>
            <p className="text-sm text-neutral-400">Yes, all purchases include lifetime access to future updates for that specific product version.</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <h4 className="font-bold mb-2 flex items-center justify-between">
              Can I use these in commercial projects?
              <span className="material-symbols-outlined text-neutral-500">expand_more</span>
            </h4>
            <p className="text-sm text-neutral-400">Absolutely. The standard license covers unlimited personal and commercial projects for a single developer/designer.</p>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
            <h4 className="font-bold mb-2 flex items-center justify-between">
              Do you offer refunds?
              <span className="material-symbols-outlined text-neutral-500">expand_more</span>
            </h4>
            <p className="text-sm text-neutral-400">Due to the digital nature of these products, I generally do not offer refunds. However, if you are completely unsatisfied, contact me within 14 days.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
