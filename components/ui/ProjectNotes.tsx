import type { Project } from '@/data/projects';
export function ProjectNotes({ project }: { project: Project }) {
  return <div className="project-information"><details className="project-notes">
    <summary><span>Proje notu</span><span className="note-plus" aria-hidden="true">+</span></summary>
    <div className="project-note-content"><p>{project.fullDescription}</p>
      {project.role.length > 0 && <p className="project-role">Katkı: {project.role.join(' / ')}</p>}
      {!project.videoUrl && <p className="note-availability">Video ve proje detayları daha sonra eklenecek.</p>}
    </div>
  </details>
    {project.equipment && <p className="project-equipment"><span>ÇEKİM EKİPMANI</span>{project.equipment.join(' / ')}</p>}
    {project.videoUrl && <a className="project-source-link" href={project.videoUrl} target="_blank" rel="noopener noreferrer">{project.videoProvider === 'youtube' ? 'YouTube’da izle' : 'Kaynağında izle'} <span aria-hidden="true">↗</span></a>}
  </div>;
}
