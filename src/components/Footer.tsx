export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 mt-20 bg-neutral-950 flex flex-col md:flex-row justify-between items-center border-t border-white/5">
      <div className="mb-8 md:mb-0">
        <p className="font-headline font-bold text-white mb-2 uppercase tracking-widest text-xs">MATHEUS DE ARAUJO</p>
        <p className="font-body text-xs text-neutral-500">© 2024 Matheus De Araujo. All rights reserved.</p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex flex-wrap gap-6 md:gap-8 justify-center">
          <a className="font-body text-xs text-neutral-500 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100" href="https://www.tiktok.com/@matheusaraujo_business?_t=ZT-8u5TeDCY5pj&_r=1" target="_blank" rel="noopener noreferrer">TikTok</a>
          <a className="font-body text-xs text-neutral-500 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100" href="https://x.com/MatheusDigital0" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a className="font-body text-xs text-neutral-500 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100" href="https://www.instagram.com/matheusdearaujo.entrepreneur/profilecard/?igsh=Mm84NXA1OTg0d2lp" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="font-body text-xs text-neutral-500 hover:text-blue-400 transition-colors opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/matheusarabiz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <a href="https://matheusbizadvice.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-primary hover:text-white transition-colors uppercase tracking-wider">
          Subscribe to Newsletter
        </a>
      </div>
    </footer>
  );
}
