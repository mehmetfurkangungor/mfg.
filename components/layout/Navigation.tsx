import { projects } from '@/data/projects';
export function Navigation() {
  return <header className="navigation page-gutter">
    <a className="wordmark" href="#top" aria-label="Mehmet Furkan Güngör, başa dön">mfg<span aria-hidden="true">.</span></a>
    <span className="nav-descriptor">VIDEO PRODUCTION & EDITING</span>
    <nav aria-label="Ana gezinme">
      <a href="#calismalar">İşler <sup>{projects.length}</sup></a>
      <a href="#hakkimda">Hakkımda</a>
      <a href="https://www.instagram.com/mehmetfurkangungor/" target="_blank" rel="noopener noreferrer">Instagram <span aria-hidden="true">↗</span></a>
    </nav>
  </header>;
}
