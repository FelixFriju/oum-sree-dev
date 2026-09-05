'use client';
import Link from 'next/link';
import { ArrowUpRight } from '../../components/Icons';
import { motion } from 'framer-motion';
import PageReveal from '../../components/PageReveal';

const brands=[['01','Philip Lem','Lifestyle & hospitality','company-one'],['02','Amirs Production House','Culture & creative','company-two'],['03','myBigdealz.com','Business & innovation','company-three'],['04','Globe Air Route','Creative direction','company-four']];

export default function Brands(){return <PageReveal><main><section className="container page-hero"><div className="eyebrow">Brands</div><h1 className="display">One vision.<br/><span>Different names.</span></h1><p>A portfolio of ventures, each with its own identity — connected by the same philosophy of thoughtful growth and premium experiences.</p></section><section className="section" style={{ paddingTop: 20 }}>
  <div className="container">
    <div className="grid2">
      {brands.map((b, i) => (
        <motion.div
          key={b[3]}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, delay: i * 0.08 }}
        >
          <Link href={'/brands/' + b[3]} className="card brand-card">
            <div className="brand-card-top">
              <div className="brand-logo">{b[0]}</div>
              <span className="arrow">↗</span>
            </div>

            <div>
              <div className="eyebrow">{b[2]}</div>
              <h3 className="display">{b[1]}</h3>
              <p>
                {b[2]} — a placeholder identity ready to be replaced with
                the real brand story.
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section></main></PageReveal>}
