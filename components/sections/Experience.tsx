import { experienceBrands } from '@/data/experience';
export function Experience() {
  return <section id="deneyim" className="experience-section page-gutter" aria-labelledby="experience-title">
    <div className="section-label"><span>[03 / DENEYİM]</span></div>
    <h2 id="experience-title" className="experience-heading">İş Deneyimi</h2>
    <div className="experience-list">
      <article className="experience-entry" aria-labelledby="wucize-title">
        <header><h3 id="wucize-title">Wucize Ajans</h3><span className="experience-duration">Nisan 2025 – Ağustos 2025</span></header>
        <p className="experience-position">Video Editor</p>
        <p className="experience-description">Restoran, otel, düğün ve inşaat videolarının kurgusu.</p>
      </article>
      <article className="experience-entry" aria-labelledby="raptyle-experience-title">
        <header><h3 id="raptyle-experience-title">Raptyle Production</h3><span className="experience-duration">Ağustos 2025 – Mart 2026</span></header>
        <div className="experience-clients"><p>Marka çalışmaları</p><ul>{experienceBrands.map(name => <li key={name}>{name}</li>)}</ul></div>
      </article>
    </div>
  </section>;
}
