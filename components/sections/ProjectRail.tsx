"use client";
import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/projects';
import { ProjectMedia } from '@/components/media/ProjectMedia';

type Props = { id: string; title: string; projects: Project[]; orientation: 'portrait' | 'landscape' };
export function ProjectRail({ id, title, projects, orientation }: Props) {
  const rail = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: true });
  useEffect(() => {
    const element = rail.current;
    if (!element) return;
    const update = () => {
      const start = element.scrollLeft <= 2;
      const end = element.scrollLeft + element.clientWidth >= element.scrollWidth - 2;
      setEdges(previous => previous.start === start && previous.end === end ? previous : { start, end });
    };
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.querySelectorAll('article').forEach(item => observer.observe(item));
    element.addEventListener('scroll', update, { passive: true });
    update();
    return () => { observer.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  function move(direction: number) {
    const element = rail.current;
    if (!element) return;
    const item = element.querySelector<HTMLElement>('article');
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;
    element.scrollBy({ left: direction * ((item?.offsetWidth ?? element.clientWidth) + gap), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <section id={id} className={`work-row work-row-${orientation}`} aria-labelledby={`${id}-title`}>
    <div className="work-row-heading page-gutter"><h2 id={`${id}-title`}>{title}<sup>{projects.length.toString().padStart(2, '0')}</sup></h2>
      <div className="reel-controls"><button type="button" onClick={() => move(-1)} disabled={edges.start} aria-controls={`${id}-track`} aria-label={`${title}: önceki`}>←</button><button type="button" onClick={() => move(1)} disabled={edges.end} aria-controls={`${id}-track`} aria-label={`${title}: sonraki`}>→</button></div>
    </div>
    <div id={`${id}-track`} ref={rail} className="work-track" role="region" aria-label={`${title} videoları`} tabIndex={0} onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') { event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1); }
    }}>
      {projects.map(project => <article id={project.slug} key={project.slug} className="work-item" aria-labelledby={`${project.slug}-title`}>
        <ProjectMedia project={project} sizes={orientation === 'portrait' ? '(max-width: 700px) 70vw, 25vw' : '(max-width: 700px) 86vw, 58vw'} />
        <h3 id={`${project.slug}-title`}>{project.title}</h3>
        {project.productionNote && <p className="work-production-note">{project.productionNote}</p>}
        {project.equipment && <details className="work-equipment"><summary>Ekipman <span aria-hidden="true">+</span></summary><ul>{project.equipment.map(item => <li key={item}>{item}</li>)}</ul></details>}
        {project.videoProvider === 'youtube' && project.videoUrl && <a className="rail-source" href={project.videoUrl} target="_blank" rel="noopener noreferrer">YouTube’da izle <span aria-hidden="true">↗</span></a>}
      </article>)}
    </div>
  </section>;
}
