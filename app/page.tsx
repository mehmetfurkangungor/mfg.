import { WorkSection } from '@/components/v2/WorkSection';
import { CopyEmail } from '@/components/v2/CopyEmail';
import { allWork } from '@/data/portfolio';

const EMAIL = 'mehmetfurkangungor@gmail.com';
const CV = '/Mehmet_Furkan_Gungor_CV.pdf';

const programs = [
  ['Adobe Premiere Pro', 'Video ve ses kurgusu'],
  ['CapCut', 'Dikey video ve sosyal medya kurgusu'],
  ['Adobe Lightroom', 'Fotoğraf, ışık ve renk düzenleme'],
  ['Adobe Photoshop', 'Görsel ve carousel içerik düzenleme'],
  ['Adobe After Effects', 'Motion design — gelişim sürüyor'],
];
const marketing = [
  ['İçerik planlama', 'İçerik takvimi ve yayın planı'],
  ['Sosyal medya hesap yönetimi', 'Hazırlık, paylaşım, düzenli yönetim'],
  ['Meta reklam kampanyaları', 'Kampanya içerikleri'],
  ['Google Ads', 'Gelişim sürüyor'],
];
const equipment = [
  ['Sony A7S III', 'Kamera'],
  ['Sony FE 24-70mm F2.8 GM II', 'Lens'],
  ['DJI RS 4 Pro', 'Gimbal'],
  ['DJI Osmo Pocket 3', 'Kompakt kamera'],
];
const education = [
  ['Üsküdar Üniversitesi', 'Yeni Medya ve İletişim · Lisans · 2022 – 2026'],
  ['İngilizce', 'A2'],
];

function List({ items }: { items: string[][] }) {
  return <ul className="list2">{items.map(([name, detail]) => <li key={name}><strong>{name}</strong><span>{detail}</span></li>)}</ul>;
}

export default function Home() {
  return <>
    <a className="skip" href="#main">İçeriğe geç</a>
    <div id="top" />
    <header className="nav gut">
      <a className="wordmark" href="#top" aria-label="Mehmet Furkan Güngör, başa dön">mfg<span aria-hidden="true">.</span></a>
      <span className="nav-descriptor">VIDEO PRODUCTION &amp; EDITING</span>
      <nav aria-label="Ana gezinme">
        <a href="#calismalar">İşler <sup>{allWork.length}</sup></a>
        <a href="#hakkimda">Hakkımda</a>
        <a href="#iletisim">İletişim</a>
        <a className="ig" href="https://www.instagram.com/mehmetfurkangungor/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
        <a className="cv-btn" href={CV} target="_blank" rel="noopener">CV <span aria-hidden="true">↓</span></a>
      </nav>
    </header>

    <main id="main">
      <section className="gut" aria-labelledby="hero-title">
        <div className="kicker label"><span>Video Editör / İçerik Üreticisi / Yeni Medya</span><span>Kişisel portfolyo — 2026</span></div>
        <div className="hero-grid">
          <h1 id="hero-title" className="hero-name" aria-label="Mehmet Furkan Güngör">
            <span className="line" aria-hidden="true"><span>MEHMET</span></span>
            <span className="line" aria-hidden="true"><span>FURKAN</span></span>
            <span className="line" aria-hidden="true"><span>GÜNGÖR<span className="dot">.</span></span></span>
          </h1>
          <div className="profile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="portrait"><img src="/media/portrait.webp" alt="Mehmet Furkan Güngör" width={250} height={250} /></div>
            <p className="role">VIDEO EDITOR</p>
            <p className="subrole"><em>Content Creator</em> / New Media</p>
            <p className="desc">Marka videoları, AI destekli motion, belgesel ve sosyal medya içerikleri hazırlıyorum.</p>
            <a className="discover" href="#calismalar"><span>Çalışmalarıma göz at</span><span className="arrow" aria-hidden="true">↘</span></a>
          </div>
        </div>
        <div className="ruler" aria-hidden="true"><span>IN</span><span>00:00:00:00</span><i /><span>OUT</span></div>
      </section>

      <WorkSection />

      <section id="hakkimda" className="about gut" aria-labelledby="about-title">
        <div className="section-head label"><span>[02 / Hakkımda]</span><span>Video Editor / Content Creator</span></div>
        <div className="about-grid">
          <div className="about-intro">
            <h2 id="about-title">HAKKIMDA<em>Video Editor / Content Creator</em></h2>
            <p className="lead">Yaklaşık 1 yıllık ajans ve prodüksiyon deneyimimle video çekimi, kurgu, sosyal medya içeriği ve AI destekli motion üretimi yapıyorum.</p>
            <p>Restoran, otel, inşaat, sağlık ve perakende sektörleri için içerik üretiyor; içerik planlama ve sosyal medya hesap yönetimi üzerine çalışıyorum. Yeni Medya ve İletişim mezunuyum.</p>
          </div>
          <div className="spec">
            <div className="spec-group">
              <h3>Deneyim</h3>
              <div>
                <article className="job">
                  <div className="job-top"><h4>Raptyle Production</h4><span className="when">Ağustos 2025 – Mart 2026</span></div>
                  <p className="pos">Video Çekim ve Kurgu</p>
                  <p className="what">Marka çalışmaları: ZMT Prefabrik, Benden Büfe, Raptyle, Kavi Diş.</p>
                </article>
                <article className="job">
                  <div className="job-top"><h4>Wucize</h4><span className="when">Nisan 2025 – Ağustos 2025</span></div>
                  <p className="pos">Stajyer / Video Editörü</p>
                  <p className="what">Restoran, otel, düğün ve inşaat videolarının kurgusu.</p>
                </article>
              </div>
            </div>
            <div className="spec-group"><h3>Programlar</h3><List items={programs} /></div>
            <div className="spec-group"><h3>İçerik &amp; reklam</h3><List items={marketing} /></div>
            <div className="spec-group"><h3>Ekipman</h3><List items={equipment} /></div>
            <div className="spec-group"><h3>Eğitim &amp; dil</h3><List items={education} /></div>
          </div>
        </div>
      </section>
    </main>

    <footer id="iletisim" className="contact gut">
      <div className="section-head label"><span>[03 / İletişim]</span><span>Pendik / İstanbul</span></div>
      <h2>İLETİŞİM<em>Proje, iş birliği ve iş teklifleri için</em></h2>
      <div className="c-grid">
        <div className="c-item">
          <span className="label">E-posta</span>
          <span className="value" id="contact-email">{EMAIL}</span>
          <div className="c-actions"><CopyEmail email={EMAIL} /><a href={`mailto:${EMAIL}`}>Mail yaz ↗</a></div>
        </div>
        <div className="c-item">
          <span className="label">Telefon / WhatsApp</span>
          <span className="value">0539 947 47 99</span>
          <div className="c-actions"><a className="primary" href="https://wa.me/905399474799" target="_blank" rel="noopener noreferrer">WhatsApp’tan yaz ↗</a></div>
        </div>
        <div className="c-item">
          <span className="label">CV</span>
          <span className="value">Tek sayfa · PDF</span>
          <div className="c-actions"><a className="primary" href={CV} target="_blank" rel="noopener">CV’yi aç ↓</a></div>
        </div>
        <div className="c-item">
          <span className="label">Instagram</span>
          <span className="value">@mehmetfurkangungor</span>
          <div className="c-actions"><a href="https://www.instagram.com/mehmetfurkangungor/" target="_blank" rel="noopener noreferrer">Profili aç ↗</a></div>
        </div>
        <div className="c-item">
          <span className="label">YouTube</span>
          <span className="value">@mehmetfurkangungor1</span>
          <div className="c-actions"><a href="https://www.youtube.com/@mehmetfurkangungor1" target="_blank" rel="noopener noreferrer">Kanalı aç ↗</a></div>
        </div>
        <div className="c-item">
          <span className="label">Konum</span>
          <span className="value">Pendik / İstanbul</span>
        </div>
      </div>
      <div className="foot"><span>Mehmet Furkan Güngör © 2026</span><a href="#top">Başa dön ↑</a></div>
    </footer>
  </>;
}
