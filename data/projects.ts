import { workVideos } from './work-videos';

export type VideoProvider = 'local' | 'youtube' | 'vimeo' | 'google-drive';
export type Project = {
  title: string;
  slug: string;
  year: number | null;
  category: string;
  role: string[];
  shortDescription: string;
  fullDescription: string;
  thumbnail: string | null;
  poster: string | null;
  videoUrl: string | null;
  videoProvider: VideoProvider | null;
  gallery: { src: string; alt: string }[];
  credits: { name: string; role: string }[];
  featured: boolean;
  orientation: 'landscape' | 'portrait';
  theme: 'light' | 'dark' | 'warm';
  mediaPlaceholder: boolean;
  client: string | null;
  sequence: number | null;
  equipment?: readonly string[];
  productionNote?: string;
  durationSeconds?: number;
  videoWidth?: number;
  videoHeight?: number;
};
const emptyMedia = {
  thumbnail: null, poster: null, videoUrl: null,
  gallery: [], credits: [], mediaPlaceholder: true,
} satisfies Partial<Project>;

// Verified against the supplied YouTube channel on 2026-09-25. All films are landscape.
export const documentaryEquipment = [
  'Sony A7S III', 'Sony FE 24-70mm F2.8 GM II', 'DJI RS 4 Pro',
] as const;
const documentaryEntries: Project[] = [
  {
    ...emptyMedia,
    title: 'Bir İnsan, Bir Esma', slug: 'bir-insan-bir-esma', year: 2026,
    category: 'Kısa Belgesel', role: ['Çekim', 'Kurgu'],
    shortDescription: 'Ahşap ve kumaş üzerine yazılar işleyen Cafer Güngör’ü konu alan kısa belgesel.',
    fullDescription: 'İstanbul’da geçen belgesel, Cafer Güngör’ün ahşap ve kumaş üzerindeki çalışmalarını konu alıyor. Üniversite mezuniyet döneminde hazırladığım projede çekimden kurguya kadar tüm süreci tek başıma yürüttüm.',
    featured: true, orientation: 'landscape', theme: 'dark',
    videoProvider: 'youtube', client: null, sequence: null,
    videoUrl: 'https://www.youtube.com/watch?v=iXWi7KMfO-I',
    thumbnail: '/media/documentaries/bir-insan-bir-esma.webp', poster: '/media/documentaries/bir-insan-bir-esma.webp',
    durationSeconds: 356, mediaPlaceholder: false,
  },
  {
    ...emptyMedia,
    title: 'Beştaş ve Beyaz Gelinlik', slug: 'bestas-ve-beyaz-gelinlik', year: 2026,
    category: 'Kısa Belgesel', role: ['Çekim', 'Kurgu'],
    shortDescription: 'Amasya’da, çocuk yaşta evlilik deneyimi yaşamış bir kadının hikâyesini konu alan kısa belgesel.',
    fullDescription: 'Amasya’da geçen belgesel, çocuk yaşta evlilik deneyimi yaşamış bir kadının yaşamını konu alıyor.',
    featured: true, orientation: 'landscape', theme: 'warm',
    videoProvider: 'youtube', client: null, sequence: null,
    videoUrl: 'https://www.youtube.com/watch?v=HRrK-EjRIbo',
    thumbnail: '/media/documentaries/bestas-ve-beyaz-gelinlik.webp', poster: '/media/documentaries/bestas-ve-beyaz-gelinlik.webp',
    durationSeconds: 960, mediaPlaceholder: false,
  },
  {
    ...emptyMedia,
    title: 'Dijital Çağda Emek: Babadan Oğula Tornacılık', slug: 'dijital-cagda-emek', year: 2026,
    category: 'Belgesel', role: ['Çekim', 'Kurgu'],
    shortDescription: 'Bir baba ve oğul üzerinden tornacılık mesleğini ve kuşaklar arası meslek aktarımını ele alan belgesel.',
    fullDescription: 'Tornacılık mesleğini sürdüren bir baba ve mesleği öğrenen oğlu üzerinden emeği, zanaatkârlığı ve kuşaklar arası meslek aktarımını ele alan belgesel.',
    featured: true, orientation: 'landscape', theme: 'dark',
    videoProvider: 'youtube', client: null, sequence: null,
    videoUrl: 'https://www.youtube.com/watch?v=EfXEibFYsT4',
    thumbnail: '/media/documentaries/dijital-cagda-emek.webp', poster: '/media/documentaries/dijital-cagda-emek.webp',
    durationSeconds: 813, mediaPlaceholder: false,
  },
];

export const documentaries = ['bestas-ve-beyaz-gelinlik', 'bir-insan-bir-esma', 'dijital-cagda-emek'].map(slug => ({
  ...documentaryEntries.find(project => project.slug === slug)!, equipment: documentaryEquipment,
  productionNote: 'Çekimden kurguya kadar tüm süreci tek başıma yürüttüm.',
}));

// Client counts come from verified videos, so filters cannot drift from the data.
export const commercialProjects: Project[] = workVideos.map((video, index) => ({
  ...emptyMedia,
  title: `${video.client} — ${video.title}`,
  slug: video.slug,
  year: null,
  category: video.orientation === 'portrait' ? 'Dikey Video' : 'Tanıtım Videosu',
  role: [],
  shortDescription: video.description,
  fullDescription: video.description,
  productionNote: 'productionNote' in video ? video.productionNote : undefined,
  thumbnail: video.poster,
  poster: video.poster,
  videoUrl: `https://drive.google.com/file/d/${video.driveId}/view`,
  videoProvider: 'google-drive',
  featured: true,
  orientation: video.orientation,
  theme: 'dark',
  mediaPlaceholder: false,
  client: video.client,
  sequence: workVideos.slice(0, index + 1).filter(item => item.client === video.client).length,
  durationSeconds: video.durationSeconds,
  videoWidth: video.width,
  videoHeight: video.height,
}));

export const verticalProjects = commercialProjects.filter(project => project.orientation === 'portrait');
export const landscapeProjects = commercialProjects.filter(project => project.orientation === 'landscape');
export const clients = Array.from(new Set(verticalProjects.map(project => project.client!))).map(name => ({
  name,
  count: verticalProjects.filter(project => project.client === name).length,
}));
export const projects = [...commercialProjects, ...documentaries];
