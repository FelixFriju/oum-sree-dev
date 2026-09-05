import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, WhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="eyebrow">Personal Brand / OUM SREE DEV</div>
            <p className="footer-intro">Business, creativity, purpose and spirituality — brought together with intention.</p>
          </div>
          <div className="socials">
            <a href="#" aria-label="WhatsApp"><WhatsApp size={18}/></a>
            <a href="#" aria-label="Instagram"><Instagram size={18}/></a>
            <a href="#" aria-label="Facebook"><Facebook size={18}/></a>
          </div>
        </div>
        <div className="footer-marquee" aria-label="OUM SREE DEV">
          <div>OUM SREE DEV <span>·</span> OUM SREE DEV <span>·</span> OUM SREE DEV <span>·</span> OUM SREE DEV <span>·</span></div>
        </div>
        <div className="footer-links">
          <div className="footer-logo">OSD<span>®</span></div>
          <div className="footer-nav">
            <Link href="/">Home</Link><Link href="/about">About</Link><Link href="/brands">Brands</Link><Link href="/spirituality">Spirituality</Link><Link href="/contact">Contact <ArrowUpRight size={13}/></Link>
          </div>
        </div>
        <div className="footer-bottom"><span>© 2026 OUM SREE DEV</span><span>Built with intention.</span></div>
      </div>
    </footer>
  );
}
