import Image from 'next/image';
import { profile } from '@/data/profile';
export function Hero() {
  return <section className="hero page-gutter" aria-labelledby="hero-title">
    <div className="hero-kicker"><span>MEHMET FURKAN GÜNGÖR</span><span>KİŞİSEL PORTFOLYO — 2026</span></div>
    <div className="hero-composition">
      <div className="hero-copy"><h1 id="hero-title" className="hero-name" aria-label={profile.name}>
        <span className="name-line" aria-hidden="true"><span>MEHMET</span></span>
        <span className="name-line" aria-hidden="true"><span>FURKAN</span></span>
        <span className="name-line name-last" aria-hidden="true"><span>GÜNGÖR<span className="name-period">.</span></span></span>
      </h1>

      </div>
      <div className="hero-profile">
        {profile.photo && <Image className="hero-portrait" src={profile.photo} alt={profile.photoAlt} width={220} height={220} sizes="(max-width: 700px) 144px, 220px" loading="eager" style={{ objectPosition: profile.photoPosition }} />}
        <p className="hero-profile-role">VIDEO EDITOR</p>
        <p className="hero-profile-subtitle"><em>Content Creator</em> / New Media</p>
        <p className="hero-profile-description">Marka videoları, belgesel ve sosyal medya içerikleri hazırlıyorum.</p>
        <a className="discover-link" href="#calismalar"><span>Çalışmalarıma göz at</span><span className="down-arrow" aria-hidden="true">↘</span></a>
      </div>
    </div>
    <div className="edit-ruler" aria-hidden="true"><span>IN</span><span>00:00:00:00</span><i /><span>OUT</span></div>
  </section>;
}
