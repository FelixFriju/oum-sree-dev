'use client';
import Link from 'next/link';
import { ArrowUpRight } from '../components/Icons';
import { motion } from 'framer-motion';

const brands = [
  ['01','Philip Lem','Lifestyle & hospitality','company-one'],
  ['02','Amirs Production House','Culture & creative','company-two'],
  ['03','myBigdealz.com','Business & innovation','company-three'],
  ['04','Globe Air Route','Creative direction','company-four']
];
const partners = ['NOVA','VEDA','AURA','SREE','ORBIT','MOTION','HOUSE','COLLECTIVE'];

export default function Home() {
  return <main>
    <section className="hero-full">
      <div className="hero-image" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="eyebrow light">India · UAE · Thailand</div>
        <h1 className="display hero-title">More than a name.<br/><em>A point of view.</em></h1>
        <p className="hero-copy light-copy">OUM SREE DEV is a personal brand built around vision, business, creativity and spirituality — bringing people, brands and ideas together with intention.</p>
        <div className="hero-actions"><Link className="pill light-pill" href="/about">Discover the story <ArrowUpRight size={15}/></Link><Link className="pill glass-pill" href="/brands">Explore brands</Link></div>
        <div className="hero-stats"><span><b>04</b> Ventures</span><span><b>01</b> Vision</span><span><b>∞</b> Possibilities</span></div>
      </div>
      <div className="hero-scroll">Scroll to explore <span>↓</span></div>
    </section>

    <section className="logo-strip"><div className="container"><div className="eyebrow">Partners & Clients</div></div><div className="partner-marquee" aria-label="Partners and clients"><div className="partner-track">{[...partners, ...partners].map((p,i)=><span key={i}>{p}</span>)}</div></div></section>

    <section className="section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">01 · About</div><h2 className="display">Meet OUM SREE DEV.<br/><span>Beyond the brand.</span></h2></div><p>One identity. Multiple worlds. A personal platform shaped by entrepreneurship, creativity, people and a deeper sense of purpose.</p></div>
      <div className="about-home-grid"><div className="editorial-image about-image"/><div className="about-copy"><div className="bigquote display">“Build things that feel meaningful, not merely impressive.”</div><p className="muted">This space brings together the work, thinking and journey behind OUM SREE DEV — from building brands to exploring the quieter dimensions of life.</p><Link className="pill primary" href="/about">Read the story <ArrowUpRight size={15}/></Link></div></div>
    </div></section>

    <section className="section soft-section"><div className="container">
      <div className="section-head"><div><div className="eyebrow">02 · Brands</div><h2 className="display">Brands, ideas<br/><span>&amp; ventures.</span></h2></div><Link className="pill" href="/brands">View all brands <ArrowUpRight size={15}/></Link></div>
      <div className="grid2">{brands.map((b,i)=><motion.div key={b[3]} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.65,delay:i*.08}}><Link href={'/brands/'+b[3]} className="card brand-card"><div className="brand-card-top"><div className="brand-logo">{b[0]}</div><span className="arrow">↗</span></div><div><div className="eyebrow">{b[2]}</div><h3 className="display">{b[1]}</h3><p>{b[2]} — a placeholder identity ready to be replaced with the real brand story.</p></div></Link></motion.div>)}</div>
    </div></section>

    <section className="section"><div className="container spirituality-home"><div><div className="eyebrow">03 · Spirituality</div><h2 className="display">A quieter<br/><span>dimension.</span></h2><p className="muted">Beyond business is a deeper practice: reflection, presence, gratitude and the search for meaning.</p><Link className="pill primary" href="/spirituality">Enter spirituality <ArrowUpRight size={15}/></Link></div><div className="editorial-image spirit-image"><div className="image-caption">Presence / Reflection / Purpose</div></div></div></section>

    <section className="section contact-home"><div className="container contact-banner"><div className="eyebrow">04 · Contact</div><h2 className="display">Let’s make<br/><span>something meaningful.</span></h2><p className="muted">Collaborations, brand conversations, creative projects or simply to say hello.</p><Link className="pill primary" href="/contact">Contact OUM SREE DEV <ArrowUpRight size={15}/></Link></div></section>
  </main>;
}
