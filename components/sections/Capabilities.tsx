import { equipment, marketing } from '@/data/experience';
export function Marketing() {
  return <section id="dijital-pazarlama" className="marketing-section page-gutter" aria-labelledby="marketing-title"><div className="section-label"><span>[05 / DİJİTAL PAZARLAMA]</span><span>SOCIAL MEDIA & ADS</span></div><h2 id="marketing-title" className="section-title">İçerik & <em>reklam.</em></h2><div className="marketing-grid">{marketing.map((item, index) => <article key={item.name}><span className="eyebrow">0{index + 1}</span><h3>{item.name}</h3><p>{item.description}</p></article>)}</div></section>;
}
export function Equipment() {
  return <section id="ekipmanlar" className="equipment-section page-gutter" aria-labelledby="equipment-title"><div className="section-label"><span>[06 / EKİPMAN DENEYİMİ]</span><span>KAMERA / LENS / GIMBAL</span></div><h2 id="equipment-title" className="section-title">Daha önce kullandığım<br /><em>ekipmanlar.</em></h2><dl className="equipment-list">{equipment.map((item, index) => <div key={item.name}><dt><span>0{index + 1}</span><strong>{item.name}</strong></dt><dd>{item.category}</dd></div>)}</dl></section>;
}
export function Education() {
  return <section id="egitim" className="education-section page-gutter" aria-labelledby="education-title"><div><span className="eyebrow">[07 / EĞİTİM]</span><h2 id="education-title">Üsküdar Üniversitesi</h2><p>İletişim Fakültesi / Yeni Medya ve İletişim</p></div><span className="graduation-year">2026<small>MEZUNİYET</small></span></section>;
}
