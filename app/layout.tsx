import type { Metadata } from 'next';
import '@fontsource/anton/latin-400.css';
import '@fontsource/anton/latin-ext-400.css';
import '@fontsource-variable/manrope';
import '@fontsource/cormorant-garamond/latin-500-italic.css';
import '@fontsource/cormorant-garamond/latin-ext-500-italic.css';
import './globals.css';

const description = 'Mehmet Furkan Güngör — video çekimi, kurgu, AI destekli motion, Reels ve belgesel çalışmaları.';

export const metadata: Metadata = {
  metadataBase: new URL('https://mehmetfurkangungor.vercel.app'),
  title: 'Mehmet Furkan Güngör — Video & Kurgu',
  description,
  openGraph: {
    title: 'Mehmet Furkan Güngör — Video Editörü',
    description: 'Marka videoları, AI motion, Reels ve belgesel çalışmaları.',
    url: '/',
    siteName: 'Mehmet Furkan Güngör',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'mfg. — Mehmet Furkan Güngör, Video Editör' }],
  },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
