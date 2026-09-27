import { documentaries, verticalProjects, landscapeProjects } from '@/data/projects';
import { ProjectRail } from '@/components/sections/ProjectRail';
export function Work() {
  return <section id="calismalar" className="work-collection" aria-label="Çalışmalarım">
    <ProjectRail id="dikey-reels" title="Dikey Reels" projects={verticalProjects} orientation="portrait" />
    <ProjectRail id="yatay-tanitim" title="Yatay Tanıtım" projects={landscapeProjects} orientation="landscape" />
    <ProjectRail id="belgeseller" title="Belgeseller" projects={documentaries} orientation="landscape" />
  </section>;
}
