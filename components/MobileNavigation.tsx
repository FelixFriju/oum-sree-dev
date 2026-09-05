'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Close, Menu } from './Icons';

const links = [['Home', '/'], ['About', '/about'], ['Brands', '/brands'], ['Spirituality', '/spirituality'], ['Contact', '/contact']];

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  return <div className="mobile-nav">
    <button className="mobile-menu-button" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <Close size={20} /> : <Menu size={20} />}</button>
    {open && <div className="mobile-menu" role="navigation" aria-label="Mobile navigation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</div>}
  </div>;
}
