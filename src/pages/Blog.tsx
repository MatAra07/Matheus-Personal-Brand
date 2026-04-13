export default function Blog() {
  return (
    <main className="w-full max-w-7xl mx-auto px-8 py-12 relative">
      {/* Side Perspective Rail */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 perspective-rail-vertical opacity-20 hidden xl:flex items-center gap-4 z-40">
        <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-outline">Digital Curator // 2024</span>
        <div className="h-24 w-[1px] bg-outline-variant"></div>
      </div>

      {/* Header */}
      <header className="mb-20 pt-10">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">Insights &<br/>Observations</h1>
        <p className="text-xl text-neutral-400 max-w-2xl">Thoughts on design systems, frontend architecture, and the evolving landscape of digital product creation.</p>
      </header>

      {/* Featured Article */}
      <section className="mb-24">
        <div className="group cursor-pointer relative rounded-3xl overflow-hidden border border-outline-variant/20 bg-surface-container-low">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
          <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract 3D rendering" className="w-full h-[60vh] object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
            <div className="flex gap-3 mb-4">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-primary/20 text-primary rounded-full backdrop-blur-md">Architecture</span>
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-surface-container-high text-neutral-300 rounded-full backdrop-blur-md">10 Min Read</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-bold mb-4 group-hover:text-primary transition-colors">The Micro-Frontend Dilemma: When to Split Your Monolith</h2>
            <p className="text-neutral-300 max-w-3xl text-lg mb-6 line-clamp-2">A deep dive into the architectural trade-offs of micro-frontends. We explore state management boundaries, deployment complexities, and whether the organizational benefits outweigh the technical overhead.</p>
            <div className="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Author" className="w-10 h-10 rounded-full border border-outline-variant/50" referrerPolicy="no-referrer" />
              <div>
                <p className="text-sm font-bold">Matheus De Araujo</p>
                <p className="text-xs text-neutral-500">Oct 24, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Grid */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h3 className="text-2xl font-headline font-bold">Latest Articles</h3>
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold">All</button>
            <button className="px-4 py-2 rounded-full border border-outline-variant/50 text-neutral-400 hover:text-white hover:border-white transition-colors text-sm">Design Systems</button>
            <button className="px-4 py-2 rounded-full border border-outline-variant/50 text-neutral-400 hover:text-white hover:border-white transition-colors text-sm">React</button>
            <button className="px-4 py-2 rounded-full border border-outline-variant/50 text-neutral-400 hover:text-white hover:border-white transition-colors text-sm">CSS Architecture</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Article Card 1 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] border border-outline-variant/20">
              <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop" alt="Retro computer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="flex gap-2 mb-3">
              <span className="text-xs text-tertiary font-bold uppercase tracking-wider">CSS Architecture</span>
              <span className="text-xs text-neutral-500">• 5 Min Read</span>
            </div>
            <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-tertiary transition-colors">Beyond Tailwind: The Resurgence of Semantic CSS</h4>
            <p className="text-neutral-400 text-sm mb-4 flex-grow">Examining the pendulum swing back towards semantic class names with modern CSS features like layers and nesting.</p>
            <p className="text-xs text-neutral-500 mt-auto">Oct 18, 2024</p>
          </article>

          {/* Article Card 2 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] border border-outline-variant/20">
              <img src="https://images.unsplash.com/photo-1627398240411-8cbc07d40964?q=80&w=800&auto=format&fit=crop" alt="Abstract shapes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="flex gap-2 mb-3">
              <span className="text-xs text-secondary font-bold uppercase tracking-wider">Design Systems</span>
              <span className="text-xs text-neutral-500">• 8 Min Read</span>
            </div>
            <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-secondary transition-colors">Tokenizing the Void: Managing Space in Design Systems</h4>
            <p className="text-neutral-400 text-sm mb-4 flex-grow">Why spacing is often the most neglected part of a design token architecture and how to build a robust spatial system.</p>
            <p className="text-xs text-neutral-500 mt-auto">Oct 12, 2024</p>
          </article>

          {/* Article Card 3 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] border border-outline-variant/20">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop" alt="Code on screen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            </div>
            <div className="flex gap-2 mb-3">
              <span className="text-xs text-primary font-bold uppercase tracking-wider">React</span>
              <span className="text-xs text-neutral-500">• 12 Min Read</span>
            </div>
            <h4 className="text-xl font-headline font-bold mb-3 group-hover:text-primary transition-colors">Server Components: A Paradigm Shift in React Mental Models</h4>
            <p className="text-neutral-400 text-sm mb-4 flex-grow">Unlearning old habits to fully leverage the power of React Server Components and streaming rendering.</p>
            <p className="text-xs text-neutral-500 mt-auto">Oct 05, 2024</p>
          </article>
        </div>
      </section>

      {/* Newsletter */}
      <section className="mt-32 bg-surface-container-low border border-outline-variant/20 rounded-3xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/10 rounded-full blur-[80px] -z-10"></div>
        <span className="material-symbols-outlined text-4xl text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
        <h2 className="text-3xl font-headline font-bold mb-4">Signal over Noise</h2>
        <p className="text-neutral-400 mb-8 max-w-md mx-auto">A monthly dispatch of curated links, architectural thoughts, and design observations. No spam, ever.</p>
        <div className="flex justify-center mt-8">
          <a href="https://matheusbizadvice.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-md font-bold text-sm tracking-tight hover:bg-neutral-200 transition-colors uppercase whitespace-nowrap">
            Subscribe on Beehiiv
          </a>
        </div>
      </section>
    </main>
  );
}
