import './globals.css';
import Link from 'next/link';
import ThemeProvider from '../components/ThemeProvider';
import Footer from '../components/Footer';
import MobileNavigation from '../components/MobileNavigation';
import { ArrowUpRight } from '../components/Icons';

export const metadata = {
  title: 'OUM SREE DEV — Personal Brand',
  description: 'OUM SREE DEV — business, creativity, spirituality and meaningful ventures.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider />
        <nav className="nav">
          <Link className="logo" href="/">OUM SREE DEV</Link>
          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/brands">Brands</Link>
            <Link href="/spirituality">Spirituality</Link>
          </div>
          <div className="nav-actions">
            <button className="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">◐</button>
            <Link className="pill primary nav-contact" href="/contact">Contact <ArrowUpRight size={14} /></Link>
            <MobileNavigation />
          </div>
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
