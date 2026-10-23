'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { allWork, formatDuration, isDocumentary, pad, rows, type FlatItem, type WorkItem, type WorkRow } from '@/data/portfolio';
import { resolveMedia } from '@/lib/media';

function Chips({ item }: { item: WorkItem }) {
  return <>
    <span className="chip">{item.sector}</span>
    {item.role && <span className="chip role">{item.role}</span>}
  </>;
}

function Rail({ row, onOpen }: { row: WorkRow; onOpen: (slug: string, from: HTMLElement) => void }) {
  const track = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const update = () => {
      const start = element.scrollLeft <= 2;
      const end = element.scrollLeft + element.clientWidth >= element.scrollWidth - 2;
      setEdges(previous => (previous.start === start && previous.end === end ? previous : { start, end }));
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => { observer.disconnect(); element.removeEventListener('scroll', update); };
  }, []);

  const move = (direction: number) => {
    const element = track.current;
    if (!element) return;
    const card = element.querySelector<HTMLElement>('.card');
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollBy({ left: direction * ((card?.offsetWidth ?? 300) + gap), behavior: reduced ? 'auto' : 'smooth' });
  };

  return <section className={`row row-${row.orientation}`} id={row.id} aria-labelledby={`${row.id}-t`}>
    <div className="row-head gut">
      <div><h2 id={`${row.id}-t`}>{row.title}<sup>{pad(row.items.length)}</sup></h2><p>{row.subtitle}</p></div>
      <div className="ctrl">
        <button type="button" onClick={() => move(-1)} disabled={edges.start} aria-label={`${row.title}: önceki`}>←</button>
        <button type="button" onClick={() => move(1)} disabled={edges.end} aria-label={`${row.title}: sonraki`}>→</button>
      </div>
    </div>
    <div ref={track} className="track gut" tabIndex={0} role="region" aria-label={`${row.title} videoları`} onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
    }}>
      {row.items.map(item => <article className="card" key={item.slug}>
        <button type="button" className="thumb" onClick={event => onOpen(item.slug, event.currentTarget)} aria-label={`${item.client} — ${item.title} videosunu aç`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.poster} alt="" loading="lazy" />
          {item.duration && <span className="dur">{formatDuration(item.duration)}</span>}
          <span className="play"><span aria-hidden="true">▶</span> İzle</span>
        </button>
        <h3>{isDocumentary(item) ? item.title : `${item.client} — ${item.title}`}</h3>
        <div className="meta"><Chips item={item} /></div>
      </article>)}
    </div>
  </section>;
}

// Embedded players (Drive in particular) have a minimum layout width and get
// clipped inside a narrow 9:16 frame on phones. Render the player at a fixed
// size and scale it down to fit the frame instead.
const EMBED_SIZE = { portrait: { width: 720, height: 1280 }, landscape: { width: 1280, height: 720 } } as const;
function ScaledEmbed({ src, title, orientation }: { src: string; title: string; orientation: FlatItem['orientation'] }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const size = EMBED_SIZE[orientation];
  useEffect(() => {
    const element = box.current;
    if (!element) return;
    const update = () => setScale(Math.min(element.clientWidth / size.width, element.clientHeight / size.height));
    const observer = new ResizeObserver(update);
    observer.observe(element);
    update();
    return () => observer.disconnect();
  }, [size.width, size.height]);
  return <div ref={box} className="lb-embed">
    <iframe src={src} title={title} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin"
      style={{ width: size.width, height: size.height, transform: `scale(${scale || 0.0001})` }} />
  </div>;
}

function Lightbox({ index, onClose, onMove }: { index: number; onClose: () => void; onMove: (step: number) => void }) {
  const item: FlatItem = allWork[index];
  const [playing, setPlaying] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const source = resolveMedia(item.provider, item.url);

  useEffect(() => { setPlaying(false); }, [index]);
  useEffect(() => { closeButton.current?.focus(); }, []);
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowLeft') onMove(-1);
      else if (event.key === 'ArrowRight') onMove(1);
      else if (event.key === 'Tab' && dialog.current) {
        const focusable = Array.from(dialog.current.querySelectorAll<HTMLElement>('button, a[href], iframe'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = previous; document.removeEventListener('keydown', onKey); };
  }, [onClose, onMove]);

  return <div ref={dialog} className="lb" role="dialog" aria-modal="true" aria-labelledby="lb-title" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div className="lb-bar">
      <span className="wordmark" aria-hidden="true">mfg<span>.</span></span>
      <span className="lb-count">{pad(index + 1)} / {pad(allWork.length)}</span>
      <div className="lb-btns">
        <button type="button" onClick={() => onMove(-1)} aria-label="Önceki video">←</button>
        <button type="button" onClick={() => onMove(1)} aria-label="Sonraki video">→</button>
        <button type="button" ref={closeButton} onClick={onClose} aria-label="Kapat">✕</button>
      </div>
    </div>
    <div className="lb-body" onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="lb-media">
        <div className={`lb-frame lb-frame-${item.orientation}`}>
          {playing && source
            ? <ScaledEmbed key={item.slug} src={source.src} title={`${item.title} videosu`} orientation={item.orientation} />
            : <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.poster} alt={`${item.title} — kapak görseli`} />
              {source && <button type="button" className="big-play" onClick={() => setPlaying(true)}><span aria-hidden="true">▶</span> Videoyu oynat</button>}
            </>}
        </div>
      </div>
      <div className="lb-info">
        <span className="label">{item.client}</span>
        <h2 id="lb-title">{item.title}</h2>
        <div className="meta">
          <Chips item={item} />
          {item.duration && <span className="chip">{formatDuration(item.duration)}</span>}
          <span className="chip">{item.orientation === 'portrait' ? '9:16' : '16:9'}</span>
        </div>
        <p>{item.description}</p>
        {item.note && <p className="note">{item.note}</p>}
        {item.equipment && <dl>
          {['Kamera', 'Lens', 'Gimbal'].map((label, n) => <div key={label}><dt>{label}</dt><dd>{item.equipment?.[n]}</dd></div>)}
        </dl>}
        <a className="watch" href={item.url} target="_blank" rel="noopener noreferrer">{item.provider === 'youtube' ? 'YouTube’da aç' : 'Drive’da aç'} ↗</a>
        <p className="lb-hint">← → ile gezin · Esc ile kapat</p>
      </div>
    </div>
  </div>;
}

export function WorkSection() {
  const [open, setOpen] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const posters = allWork.filter(item => item.orientation === 'portrait').map(item => item.poster);

  const openItem = useCallback((slug: string, from: HTMLElement) => {
    opener.current = from;
    setOpen(allWork.findIndex(item => item.slug === slug));
  }, []);
  const close = useCallback(() => { setOpen(null); opener.current?.focus(); }, []);
  const moveBy = useCallback((step: number) => {
    setOpen(current => (current === null ? current : (current + step + allWork.length) % allWork.length));
  }, []);

  return <section id="calismalar" className="cinema" aria-label="Çalışmalarım">
    <div className="gut">
      <div className="section-head label"><span>[01 / Çalışmalar]</span><span>Showreel · AI Motion · Reels · Tanıtım · Belgesel</span></div>
      <div className="reel">
        <div className="reel-frame" aria-label="Showreel alanı">
          <div className="reel-strip" aria-hidden="true">
            {Array.from({ length: 6 }, (_, column) => <div className="reel-col" key={column}>
              {Array.from({ length: 4 }, (_, n) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={n} src={posters[(column * 2 + n * 5) % posters.length]} alt="" loading="lazy" />
              ))}
            </div>)}
          </div>
          <div className="reel-veil" />
          <div className="reel-over">
            <div className="reel-top"><span className="rec">SHOWREEL</span><span>00:01:30:00</span></div>
            <p className="reel-title">SHOWREEL<em>2026</em></p>
          </div>
        </div>
        <div className="reel-side">
          <p>En iyi anlardan 60–90 saniyelik bir derleme. Reklam, AI motion ve belgesel çalışmalarından seçilmiş kesitler.</p>
          <span className="status">Hazırlanıyor · yakında burada</span>
        </div>
      </div>
      <nav className="counts" aria-label="Çalışma kategorileri">
        {rows.map(row => <a key={row.id} href={`#${row.id}`}>{row.title} <sup>{pad(row.items.length)}</sup></a>)}
      </nav>
    </div>
    {rows.map(row => <Rail key={row.id} row={row} onOpen={openItem} />)}
    {open !== null && <Lightbox index={open} onClose={close} onMove={moveBy} />}
  </section>;
}
