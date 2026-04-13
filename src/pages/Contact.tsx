export default function Contact() {
  return (
    <main className="w-full max-w-7xl mx-auto px-8 py-12 relative">
      {/* Side Perspective Rail */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 perspective-rail-vertical opacity-20 hidden xl:flex items-center gap-4 z-40">
        <span className="text-[10px] font-headline tracking-[0.3em] uppercase text-outline">Communication // 2024</span>
        <div className="h-24 w-[1px] bg-outline-variant"></div>
      </div>

      {/* Header */}
      <header className="mb-20 pt-10">
        <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter mb-6">Initiate<br/>Dialogue</h1>
        <p className="text-xl text-neutral-400 max-w-2xl">Whether you're looking to architect a new system, optimize an existing one, or simply discuss the future of digital infrastructure.</p>
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        {/* Contact Form */}
        <div className="bg-surface-container-low border border-outline-variant/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10"></div>
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Name</label>
                <input type="text" className="w-full bg-background border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Email</label>
                <input type="email" className="w-full bg-background border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Subject</label>
              <input type="text" className="w-full bg-background border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-400">Message</label>
              <textarea rows={6} className="w-full bg-background border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-white text-black px-8 py-4 rounded-md font-bold text-sm tracking-tight hover:bg-neutral-200 transition-colors uppercase">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-12">
          <div>
            <h3 className="text-2xl font-headline font-bold mb-6">Direct Contact</h3>
            <div className="space-y-4">
              <a href="mailto:mat.araujo.business@gmail.com" className="flex items-center gap-4 text-neutral-400 hover:text-primary transition-colors group">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">mail</span>
                </div>
                <span className="text-lg">mat.araujo.business@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-neutral-400">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white">location_on</span>
                </div>
                <span className="text-lg">Global / Remote</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-headline font-bold mb-6">Social Presence</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <span className="font-bold text-sm">IN</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <span className="font-bold text-sm">GH</span>
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors">
                <span className="font-bold text-sm">X</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
