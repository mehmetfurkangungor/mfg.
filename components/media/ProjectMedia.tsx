'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/projects';
import { resolveMedia } from '@/lib/media';

type Props = { project: Project; sizes?: string };
export function ProjectMedia({ project, sizes = '(max-width: 700px) 100vw, 90vw' }: Props) {
  const wrapper = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [near, setNear] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activated, setActivated] = useState(false);
  const [failed, setFailed] = useState(false);
  const source = resolveMedia(project.videoProvider, project.videoUrl);
  const poster = project.poster || project.thumbnail || undefined;
  const totalSeconds = Math.round(project.durationSeconds ?? 0);
  const duration = totalSeconds ? `${Math.floor(totalSeconds / 60)}:${String(totalSeconds % 60).padStart(2, '0')}` : null;
  useEffect(() => {
    const element = wrapper.current;
    if (!element) return;
    const preloadObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setNear(true); preloadObserver.disconnect(); }
    }, { rootMargin: '200px' });
    const visibilityObserver = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.01 });
    preloadObserver.observe(element);
    visibilityObserver.observe(element);
    return () => { preloadObserver.disconnect(); visibilityObserver.disconnect(); };
  }, []);
  useEffect(() => {
    if (!visible) {
      video.current?.pause();
      // Return to the poster; external playback must not restart on re-entry.
      if (source?.kind === 'embed') setActivated(false);
    }
  }, [visible, source?.kind]);
  return <div ref={wrapper} className={`project-media media-${project.orientation} media-theme-${project.theme} ${poster ? '' : 'media-empty'}`} data-flip-id={`project-${project.slug}`}>
    {poster && <Image src={poster} alt={project.mediaPlaceholder ? `${project.title} için temsili atmosfer görseli; belgeselden bir kare değildir.` : `${project.title} — proje görseli`} fill sizes={sizes} className="project-poster" />}
    {duration && !activated && <span className="media-duration" aria-label={`Video süresi ${duration}`}>{duration}</span>}
    {!poster && <div className="film-placeholder" aria-hidden="true"><span>MFG / {project.orientation === 'portrait' ? 'VIDEO' : 'DOCUMENTARY'}</span><div className="placeholder-center">{project.sequence && <span className="placeholder-number">{String(project.sequence).padStart(2, '0')}</span>}<span className="placeholder-title">{project.client || project.title}</span></div><span>{project.orientation === 'portrait' ? '9:16' : '16:9'}</span></div>}
    {source && !failed && source.kind === 'file' && near && activated && <video ref={video} src={source.src} poster={poster} controls playsInline preload="metadata" autoPlay onError={() => setFailed(true)} />}
    {source && !failed && source.kind === 'embed' && activated && visible && <iframe src={source.src} title={`${project.title} videosu`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />}
    {source && !activated && <button className="play-button" type="button" onClick={() => { setNear(true); setActivated(true); }} aria-label={`${project.title} videosunu oynat`}><span aria-hidden="true">▶</span> Videoyu oynat</button>}
    {failed && <p className="media-status" role="status">Video yüklenemedi. Lütfen daha sonra tekrar deneyin.</p>}
    {!source && <span className="media-status">{poster ? 'TEMSİLİ GÖRSEL · VİDEO EKLENECEK' : 'VİDEO EKLENECEK'}</span>}
  </div>;
}
