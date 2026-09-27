import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Work } from '@/components/sections/Work';
import { About } from '@/components/sections/About';
import { MotionRoot } from '@/components/motion/MotionRoot';
import { Experience } from '@/components/sections/Experience';
import { Software } from '@/components/sections/Software';
import { Marketing, Equipment, Education } from '@/components/sections/Capabilities';
export default function Home() {
  return <MotionRoot><div id="top" /><a className="skip-link" href="#main">İçeriğe geç</a><Navigation /><main id="main"><Hero /><Work /><About /><Experience /><Software /><Marketing /><Equipment /><Education /></main><Footer /></MotionRoot>;
}
