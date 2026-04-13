import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const linkClass = (href: string) => {
    const base = "font-headline tracking-tight text-sm uppercase transition-colors";
    if (path === href || (path === '/' && href === '/services')) {
      return `${base} text-blue-400 font-bold border-b-2 border-blue-500 pb-1`;
    }
    return `${base} text-neutral-400 hover:text-white`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 max-w-full mx-auto">
      <Link to="/" className="text-xl font-bold tracking-tighter text-white font-headline">MATHEUS DE ARAUJO</Link>
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/about" className={linkClass('/about')}>About</Link>
        <Link to="/portfolio" className={linkClass('/portfolio')}>Portfolio</Link>
        <Link to="/" className={linkClass('/')}>Services</Link>
        <Link to="/products" className={linkClass('/products')}>Products</Link>
        <Link to="/blog" className={linkClass('/blog')}>Blog</Link>
        <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
      </div>
      <a href="mailto:mat.araujo.business@gmail.com" className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-md font-bold text-sm tracking-tight scale-95 hover:scale-100 active:scale-90 transition-transform uppercase inline-block">Hire Me</a>
    </nav>
  );
}
