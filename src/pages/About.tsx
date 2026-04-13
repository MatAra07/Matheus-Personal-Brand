export default function About() {
  return (
    <main className="w-full max-w-7xl mx-auto px-8 py-12 relative">
      {/* Side Perspective Rail */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 perspective-rail-vertical opacity-20 hidden xl:flex items-center gap-4 z-40">
        <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-outline">Identity // 2024</span>
        <div className="h-24 w-[1px] bg-outline-variant"></div>
      </div>

      {/* Header */}
      <header className="mb-20 pt-10">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">Matheus<br/>De Araujo</h1>
        <p className="text-xl text-neutral-400 max-w-2xl">Software Engineer & Digital Architect based in the digital realm.</p>
      </header>

      {/* Content */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div>
          <img src="https://www.image2url.com/r2/default/images/1776042965574-cc1e7bba-d761-4da4-a841-77b4bdb57738.jpg" alt="Matheus De Araujo" className="w-full rounded-2xl border border-outline-variant/20 aspect-[4/5] object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-headline font-bold mb-6">Bridging the gap between design and engineering.</h2>
          <p className="text-neutral-400 font-body leading-relaxed mb-6">
            With over a decade of experience in software development, I specialize in building scalable, high-performance web applications. My approach combines rigorous engineering practices with a deep appreciation for user experience and design aesthetics.
          </p>
          <p className="text-neutral-400 font-body leading-relaxed mb-8">
            I believe that great software is not just about writing code; it's about solving complex problems, optimizing systems, and creating intuitive interfaces that empower users.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-auto">
            <div>
              <h4 className="text-4xl font-headline font-bold text-primary mb-2">10+</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold">Years Experience</p>
            </div>
            <div>
              <h4 className="text-4xl font-headline font-bold text-tertiary mb-2">50+</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold">Projects Delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter">Professional Journey</h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-outline-variant/50 to-transparent"></div>
        </div>
        
        <div className="space-y-12">
          {/* Job 1 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 border-t border-outline-variant/20 pt-8 hover:bg-surface-container-low/50 p-6 rounded-2xl transition-colors -mx-6">
            <div className="md:w-1/4">
              <p className="font-mono text-neutral-500">2022 — Present</p>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-headline font-bold mb-2">Senior Digital Architect</h3>
              <p className="text-primary text-sm font-bold uppercase tracking-wider mb-4">TechNova Solutions</p>
              <p className="text-neutral-400 leading-relaxed">Leading the frontend architecture for enterprise-level applications. Implementing micro-frontends, optimizing CI/CD pipelines, and mentoring junior developers.</p>
            </div>
          </div>
          
          {/* Job 2 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 border-t border-outline-variant/20 pt-8 hover:bg-surface-container-low/50 p-6 rounded-2xl transition-colors -mx-6">
            <div className="md:w-1/4">
              <p className="font-mono text-neutral-500">2018 — 2022</p>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-headline font-bold mb-2">Full Stack Engineer</h3>
              <p className="text-tertiary text-sm font-bold uppercase tracking-wider mb-4">Creative Nexus</p>
              <p className="text-neutral-400 leading-relaxed">Developed and maintained multiple client-facing web applications using React, Node.js, and PostgreSQL. Improved database query performance by 40%.</p>
            </div>
          </div>

          {/* Job 3 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-16 border-t border-outline-variant/20 pt-8 hover:bg-surface-container-low/50 p-6 rounded-2xl transition-colors -mx-6">
            <div className="md:w-1/4">
              <p className="font-mono text-neutral-500">2015 — 2018</p>
            </div>
            <div className="md:w-3/4">
              <h3 className="text-2xl font-headline font-bold mb-2">Frontend Developer</h3>
              <p className="text-secondary text-sm font-bold uppercase tracking-wider mb-4">Digital Frontier</p>
              <p className="text-neutral-400 leading-relaxed">Built interactive user interfaces and landing pages. Collaborated closely with designers to ensure pixel-perfect implementations and smooth animations.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
