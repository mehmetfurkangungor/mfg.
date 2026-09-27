import { software } from '@/data/software';
export function Software() {
  return <section id="programlar" className="software-section page-gutter" aria-labelledby="software-title">
    <div className="software-heading"><span className="eyebrow">[04 / KULLANDIĞIM PROGRAMLAR]</span><h3 id="software-title">Kullandığım <em>programlar.</em></h3></div>
    <dl className="software-list">
      {software.map((item, index) => <div className="software-row" key={item.name}>
        <dt><span className="software-index" aria-hidden="true">0{index + 1}</span><span>{item.name}<small>{item.area}</small></span></dt>
        <dd>{item.description}</dd>
      </div>)}
    </dl>
  </section>;
}
