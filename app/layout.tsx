import type { Metadata } from 'next';
import '@fontsource/anton/latin-400.css';
import '@fontsource/anton/latin-ext-400.css';
import '@fontsource-variable/manrope';
import '@fontsource/cormorant-garamond/latin-500-italic.css';
import '@fontsource/cormorant-garamond/latin-ext-500-italic.css';
import 'lenis/dist/lenis.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mehmet Furkan Güngör — Video & Kurgu',
  description: 'Mehmet Furkan Güngör. Video prodüksiyonu, kurgu, sosyal medya içerikleri ve belgesel projeleri. Eğitim, deneyim ve seçili çalışmalar.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
