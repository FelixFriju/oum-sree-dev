'use client';

import { useEffect, useRef } from 'react';

const slides = [
  { title: 'Build with intention.', copy: 'Ideas, ventures and relationships are shaped with a clear point of view.', image: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85')" },
  { title: 'Make space for meaning.', copy: 'A thoughtful practice of reflection, presence and personal growth.', image: "url('https://images.unsplash.com/photo-1519817650390-64a93db511aa?auto=format&fit=crop&w=1000&q=85')" },
  { title: 'Create real connection.', copy: 'Bringing people, creativity and opportunity together with care.', image: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85')" },
  { title: 'Move ideas forward.', copy: 'Turning clear thinking into brands and experiences that last.', image: "url('https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=85')" },
  { title: 'Lead with curiosity.', copy: 'Staying open to new perspectives, people and possibilities.', image: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85')" },
  { title: 'See the bigger picture.', copy: 'A long-term view creates room for work that matters.', image: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1000&q=85')" },
  { title: 'Keep evolving.', copy: 'Every chapter is an opportunity to learn, adapt and grow.', image: "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1000&q=85')" },
  { title: 'Share the journey.', copy: 'The most meaningful work is built with others, not alone.', image: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85')" },
];

export default function AboutCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * 360, behavior: 'smooth' });
  useEffect(() => {
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element) return;
      const atEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 10;
      element.scrollTo({ left: atEnd ? 0 : element.scrollLeft + 360, behavior: 'smooth' });
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return <section className="about-carousel-section">
    <div className="container">
      <div className="about-carousel-head"><div><div className="eyebrow">A point of view</div><h2 className="display">What shapes<br/><span>the work.</span></h2></div><div className="carousel-controls"><button type="button" aria-label="Previous cards" onClick={() => move(-1)}>←</button><button type="button" aria-label="Next cards" onClick={() => move(1)}>→</button></div></div>
    </div>
    <div className="about-carousel-track" ref={track}>{slides.map((slide) => <article className="about-slide" key={slide.title}><div className="about-slide-image" style={{ backgroundImage: slide.image }}/><h3 className="display">{slide.title}</h3><p>{slide.copy}</p></article>)}</div>
  </section>;
}
