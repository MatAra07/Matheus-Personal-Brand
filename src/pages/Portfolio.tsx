export default function Portfolio() {
  return (
    <main className="relative pt-32 pb-24 px-8 md:px-24">
      <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-12 opacity-30 border-r border-outline-variant/10 pr-4">
        <span className="perspective-rail-vertical font-label text-[10px] uppercase tracking-[0.3em] text-outline">Excellence in Digital Curation</span>
        <div className="w-[1px] h-32 bg-outline-variant/20"></div>
        <span className="perspective-rail-vertical font-label text-[10px] uppercase tracking-[0.3em] text-outline">Selected Works 2024</span>
      </div>
      <section className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">Selected <span className="text-primary italic">Artifacts</span></h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl leading-relaxed">
            A curated assembly of digital experiences focusing on high-end interactions, tonal depth, and architectural precision. Each piece is a testament to the Digital Curator philosophy.
          </p>
          <div className="mt-12">
            <a className="inline-flex items-center gap-3 bg-surface-container-highest border border-outline-variant/20 px-8 py-4 rounded-xl hover:bg-surface-bright transition-all group" href="https://drive.google.com/drive/folders/18xlE7tQDZPhlefTgwu46s9VCCrNn_ONC" target="_blank" rel="noreferrer">
              <span className="font-headline font-medium text-white">View Full Project Drive</span>
              <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
          <div className="md:col-span-8 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[16/9] mb-6">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="The Obsidian Interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx0qC0KdRHvcB1fMTlQBL3D7U_SdZnlwyV5Lr-2t_Ya_QMWGYadpx59vEw1-EzOrrkXZSEtgo9LuRUGMiXTBifj9n1EL-ris_Cw4-PEbEQgBLE0bVXZGL1sDq-tGjv6Bh84Tyl7S6012UrgWPjwbGpAd-eaqsxUfLACqS27gbuLp3hqY2T9UDkMxaRP5pJ49xnkiXjRFsMc8AYfVL1eEobTtcSu9mfFsekCHyqMXU9Hl7zKYhyjFXv-zdAro11t28CkjYKSsrJl7x4" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">Case Study 01</span>
                <h3 className="font-headline text-3xl font-bold text-white mb-2">The Obsidian Interface</h3>
                <p className="text-on-surface-variant max-w-md">A research-led exploration into ultra-dark UI patterns for enterprise data visualization.</p>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">north_east</span>
            </div>
          </div>
          <div className="md:col-span-4 self-center group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[4/5] mb-6">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Kinetic Typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5fOicrPlQRNUddi0Pj5JkjIs5cn3a7HHgXCpR2TyRHhWpcgSWhLwrJh6ABdAHaezU5ELCIjwkQJYtoc4O0bar1Y-wlnXfH8BlSftWliudDn9FHBm2T_rEnLe7DPm6rAaE3YAdsVS-9FvyG62kWutznTXFUJZZJgX-Tg076G_PoZ5otuwTbpzwjVlhXcQsjq8Afe301Z581O1mJxYc54JiWa8Kz5aeu7drrxnotPTPjoW1T9iHtC4rLleWjq4NbHp88oBQNFqF-iuq" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-tertiary font-bold mb-2 block">Experimental</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-2">Kinetic Typography</h3>
            <p className="text-on-surface-variant">Redefining movement in editorial web design.</p>
          </div>
          <div className="md:col-span-5 group cursor-pointer">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-square mb-6">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Stratos Dashboard" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCorexsJVu1gEiMvuiwSVBdp9IyjRLQefIWYmb_Y2bOQ6hgmqy-2XBNkuqB8I03bjiuPYLu0SScO4QtyG2f3VVgN_DgfowgeoKQXCDBRHpYH3SqJ3ToTnSqNp3aeZfVVicK5jIWCoVzFdmWUWnIXENshImTmAvXfbmgL4SMD3u6oszghMGhIXOk2FzPTkwC99cI9dTNdT6ziWne9pJJdrX_eeGg2HO-Gja419TKX19CnVfpxrBZBXuEZfrYohR8g5g7a-RHNSEkMcFp" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">Product Design</span>
            <h3 className="font-headline text-2xl font-bold text-white mb-2">Stratos Dashboard</h3>
            <p className="text-on-surface-variant">Cloud management for the next generation of DevOps engineers.</p>
          </div>
          <div className="md:col-span-7 group cursor-pointer md:mt-24">
            <div className="relative overflow-hidden rounded-xl bg-surface-container-low aspect-[16/10] mb-6">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Vortex Labs" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb9a4JY0WBrWo5nyddFlqqVWG4caa3oXKnAgHYuv0Fhxhw3Hy5MFvb_FgmRK_IUVN0V2iw8UKWguetheeDIZkAR1i0W97nXC-oEkP_sbBh4g9TQ-6a2GLk0J7ZDwcJCtfBhCeF2Yhsd9AgU7BTPgiFNzP1gFPrvIINLMWWYaiAhdMOIA9a4mQGH6BtISwmgQk7JDiz0MWDV5tmafKnGQTgUUCrE81_rUSjuTEfRsQjZ17FG2J1FQ_-Ej8vCOAUjrKyzQNGrRMaHu2b" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-2 block">Brand Identity</span>
                <h3 className="font-headline text-3xl font-bold text-white mb-2">Vortex Labs</h3>
                <p className="text-on-surface-variant max-w-sm">Crafting a visual language for an AI-native research studio.</p>
              </div>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">north_east</span>
            </div>
          </div>
        </div>
        <div className="mt-32 pt-16 border-t border-outline-variant/10 text-center">
          <h2 className="font-headline text-3xl font-bold text-white mb-8">Ready to explore the full archive?</h2>
          <a className="inline-flex items-center gap-4 bg-primary text-on-primary px-10 py-5 rounded-md font-bold text-lg hover:shadow-[0_0_30px_rgba(184,195,255,0.3)] transition-all" href="https://drive.google.com/drive/folders/18xlE7tQDZPhlefTgwu46s9VCCrNn_ONC" target="_blank" rel="noreferrer">
            <span>Enter Project Drive</span>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>folder_shared</span>
          </a>
        </div>
      </section>
    </main>
  );
}
