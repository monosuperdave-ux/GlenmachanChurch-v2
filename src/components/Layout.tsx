import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowRight, Facebook, Menu, X, Youtube } from 'lucide-react';
import logoImg from '@/assets/Logo.png';
import { church } from '@/data/church';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Sundays', to: '/#services' },
  { label: 'Church Life', to: '/church-life' },
  { label: 'Sermons', to: '/sermons' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Find Us', to: '/#visit' },
];

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const closeMenu = () => setMenuOpen(false);

  // Scroll to the section named in the link, or to the top of a new page
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" aria-label="Glenmachan home" onClick={closeMenu}>
          <img src={logoImg} alt="Church of God Glenmachan" />
        </Link>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navItems.map((item) => (
            <Link to={item.to} key={item.label} onClick={closeMenu}>{item.label}</Link>
          ))}
          <Link className="nav-button" to="/plan-your-visit" onClick={closeMenu}>Plan your visit <ArrowRight size={16} /></Link>
        </nav>
      </header>

      <main id="top">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link className="brand footer-brand" to="/"><img src={logoImg} alt="" /><span>GLENMACHAN</span></Link>
            <p>A city on a hill, shining God’s hope across East Belfast.</p>
          </div>
          <div>
            <span className="footer-label">Sunday services</span>
            <strong>11:00am & 6:00pm</strong>
            <p className="footer-address">{church.addressLines[0]}<br />{church.addressLines[1]}</p>
          </div>
          <div>
            <span className="footer-label">Explore</span>
            <ul className="footer-links">
              <li><Link to="/plan-your-visit">Plan your visit</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/church-life">Church life</Link></li>
              <li><Link to="/sermons">Sermons</Link></li>
              <li><Link to="/family-care-in-cancer">Family Care in Cancer</Link></li>
              <li><Link to="/say-their-name">Say Their Name</Link></li>
              <li><Link to="/sonshine-club">SONshine Club</Link></li>
              <li><Link to="/salt">SALT Ministry</Link></li>
              <li><Link to="/privacy">Privacy &amp; cookies</Link></li>
            </ul>
          </div>
          <div>
            <span className="footer-label">Connect with us</span>
            <div className="socials"><a href={church.facebook} aria-label="Facebook"><Facebook size={19} /></a><a href={church.youtube} aria-label="YouTube"><Youtube size={19} /></a></div>
            <ul className="footer-links">
              <li><a href={church.phoneLink}>{church.phone}</a></li>
              <li><a href={`mailto:${church.email}`}>{church.email}</a></li>
            </ul>
          </div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {church.name} · Charity No. {church.charityNumber}</span><span>Built on hope · Rooted in community</span></div>
      </footer>
    </div>
  );
}
