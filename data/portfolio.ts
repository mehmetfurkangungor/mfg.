// Single source for the work section. Roles are listed only where confirmed;
// `role: null` means the role has not been confirmed yet.
export type Provider = 'google-drive' | 'youtube';
export type WorkItem = {
  slug: string;
  client: string;
  title: string;
  sector: string;
  role: string | null;
  duration: number | null;
  poster: string;
  url: string;
  provider: Provider;
  description: string;
  note?: string;
  equipment?: readonly string[];
};
export type WorkRow = {
  id: string;
  title: string;
  subtitle: string;
  orientation: 'portrait' | 'landscape';
  items: WorkItem[];
};

const drive = (id: string) => `https://drive.google.com/file/d/${id}/view`;
const work = (file: string) => `/media/work/${file}`;
const doc = (file: string) => `/media/documentaries/${file}`;
const DOC_EQUIPMENT = ['Sony A7S III', 'Sony FE 24-70mm F2.8 GM II', 'DJI RS 4 Pro'] as const;
const SOLO = 'Çekimden kurguya kadar tüm süreci tek başıma yürüttüm.';

export const rows: WorkRow[] = [
  { id: 'ai-motion', title: 'AI Motion', subtitle: 'AI destekli ürün videoları', orientation: 'portrait', items: [
    { slug: 'birtech-01', client: 'Birtech', title: 'PDU — AI Motion Graphic', sector: 'Teknoloji', role: null, duration: 31, poster: work('birtech-01.webp'), url: drive('194D7eezo-WkxCemevQSdtsDQmiDpga-8'), provider: 'google-drive', description: 'Akıllı PDU ürününün uzaktan yönetim ve enerji izleme özelliklerini anlatan dikey ürün videosu.' },
    { slug: 'birtech-02', client: 'Birtech', title: 'Noctua — AI Stop Motion', sector: 'Teknoloji', role: null, duration: 37, poster: work('birtech-02.webp'), url: drive('1ra1kRqfYnQAzsx_kWYh31LDRlKBLqHLu'), provider: 'google-drive', description: 'Veri merkezlerinde sıcaklık izlemeyi konu alan Noctua ürün videosu.' },
    { slug: 'birtech-rfid-erisim', client: 'Birtech', title: 'RFID Kabin Erişimi', sector: 'Teknoloji', role: null, duration: 20, poster: work('birtech-rfid-erisim.jpg'), url: drive('1RnQx4FLFRQQI4Cwdxn2ZRSfP8fxZT4Ue'), provider: 'google-drive', description: 'BirSens RFID kabin kilidinin kart doğrulama ve kişi bazlı yetkilendirme özelliklerini anlatan dikey ürün videosu.' },
  ] },
  { id: 'dikey-reels', title: 'Dikey Reels', subtitle: 'Marka ve mekân videoları', orientation: 'portrait', items: [
    { slug: 'zmt-prefabrik-01', client: 'ZMT Prefabrik', title: 'Üretim tesisi', sector: 'İnşaat', role: 'Çekim + Kurgu', duration: 55, poster: work('zmt-prefabrik-01.webp'), url: drive('1CTmnbgrsBLDKNw2SMNWeoIegV8TyR98H'), provider: 'google-drive', description: 'Çelik yapı üretimi, kaynak ve fabrika içi çalışma görüntülerinden oluşan kurgu.' },
    { slug: 'zmt-prefabrik-02', client: 'ZMT Prefabrik', title: 'Örnek ev', sector: 'İnşaat', role: null, duration: 45, poster: work('zmt-prefabrik-02.webp'), url: drive('1U5Tetsd71gtMgoS-9jofkzTs1g1QBOkN'), provider: 'google-drive', description: 'Örnek prefabrik evin dış cephesini ve iç mekânlarını gösteren video.', note: 'DJI Osmo Pocket 3 ile çekildi.' },
    { slug: 'zmt-prefabrik-03', client: 'ZMT Prefabrik', title: 'Örnek ev — kısa kurgu', sector: 'İnşaat', role: null, duration: 17, poster: work('zmt-prefabrik-03.webp'), url: drive('1gDsNPkms0XCimAHwseNoixMwf7Q1LeZp'), provider: 'google-drive', description: 'Örnek evin dış cephe ve iç mekân görüntülerinden oluşan kısa kurgu.', note: 'DJI Osmo Pocket 3 ile çekildi.' },
    { slug: 'raptyle-01', client: 'Raptyle', title: 'Koleksiyon çekimi', sector: 'Moda', role: 'Çekim + Kurgu', duration: 32, poster: work('raptyle-01.webp'), url: drive('18d39FfgkYfgc0RTdvgTLRHaSOTMatELV'), provider: 'google-drive', description: 'Tişört tasarımlarını, kumaş detaylarını ve model çekimlerini gösteren koleksiyon videosu.' },
    { slug: 'raptyle-02', client: 'Raptyle', title: 'Oversize Streetwear', sector: 'Moda', role: null, duration: 15, poster: work('raptyle-02.webp'), url: drive('1YzjuPM68ciccz1b9v8pPxWF14GwX53gZ'), provider: 'google-drive', description: 'Metro ortamındaki model görüntüleriyle hazırlanan oversize streetwear koleksiyon videosu.' },
    { slug: 'leonardo-restoran-01', client: 'Leonardo Restoran', title: 'Yemek & sunum', sector: 'Restoran', role: 'Kurgu', duration: 26, poster: work('leonardo-restoran-01.webp'), url: drive('19MqJi0NPA4xlkrPsWUwQJGxg_tj6W7QG'), provider: 'google-drive', description: 'Yemek hazırlığı, tabak sunumları ve restoran ortamını içeren video.' },
    { slug: 'leonardo-restoran-02', client: 'Leonardo Restoran', title: 'Mekân tanıtımı', sector: 'Restoran', role: 'Kurgu', duration: 53, poster: work('leonardo-restoran-02.webp'), url: drive('1F9nil1fhQZRN1e7FcrFTnUaf6NkATRFf'), provider: 'google-drive', description: 'Konuşmalı anlatım, restoran, yemek ve etkinlik görüntülerinden oluşan tanıtım videosu.' },
    { slug: 'leonardo-restoran-03', client: 'Leonardo Restoran', title: 'Kokteyl', sector: 'Restoran', role: 'Kurgu', duration: 24, poster: work('leonardo-restoran-03.webp'), url: drive('1Qt1veeSu6BwzeT9ikiWWkaC4SM0Pa5An'), provider: 'google-drive', description: 'Kokteyl hazırlığı ve sunumunu gösteren kısa video.' },
    { slug: 'riva-hotel-01', client: 'Riva Hotel', title: 'Şehir & otel', sector: 'Otel', role: 'Kurgu', duration: 32, poster: work('riva-hotel-01.webp'), url: drive('1qdxDSIqRtgrhgkPxHvz-KXHyUdc6KjhL'), provider: 'google-drive', description: 'Çevredeki mekânları ve otelin dış cephesini gösteren İngilizce altyazılı video.' },
    { slug: 'kavi-dis-01', client: 'Kavi Diş', title: 'Dikey video', sector: 'Sağlık', role: 'Çekim + Kurgu', duration: null, poster: work('kavi-dis-01.jpg'), url: drive('1G1-BcZde6yfzb3aqYJ9fziaNH04GDTEZ'), provider: 'google-drive', description: 'Kavi Diş için hazırlanan dikey video.' },
    { slug: 'laguna-01', client: 'Laguna', title: 'Valiz', sector: 'Perakende', role: 'Kurgu', duration: null, poster: work('laguna-01.jpg'), url: drive('1YZTykDrtyYTKQrRKfkAFZA0Om_5vB5GL'), provider: 'google-drive', description: 'Valiz ürününü gösteren dikey video.' },
  ] },
  { id: 'yatay-tanitim', title: 'Yatay Tanıtım', subtitle: 'Kurumsal tanıtım filmi', orientation: 'landscape', items: [
    { slug: 'zmt-prefabrik-genel', client: 'ZMT Prefabrik', title: 'Genel tanıtım', sector: 'İnşaat', role: 'Çekim + Kurgu', duration: 34, poster: work('zmt-prefabrik-genel.webp'), url: drive('1CLsaybJ9iPJgxrS_1EnXHFDY2AclmeR0'), provider: 'google-drive', description: 'Üretim tesisi, çelik yapı detayları ve örnek ev görüntülerini bir araya getiren yatay tanıtım videosu.' },
  ] },
  { id: 'belgeseller', title: 'Belgeseller', subtitle: 'Bireysel belgesel projeleri', orientation: 'landscape', items: [
    { slug: 'bestas-ve-beyaz-gelinlik', client: 'Kısa belgesel', title: 'Beştaş ve Beyaz Gelinlik', sector: 'Belgesel', role: 'Çekim + Kurgu', duration: 960, poster: doc('bestas-ve-beyaz-gelinlik.webp'), url: 'https://www.youtube.com/watch?v=HRrK-EjRIbo', provider: 'youtube', equipment: DOC_EQUIPMENT, note: SOLO, description: 'Amasya’da, çocuk yaşta evlilik deneyimi yaşamış bir kadının hikâyesini konu alan kısa belgesel.' },
    { slug: 'bir-insan-bir-esma', client: 'Kısa belgesel', title: 'Bir İnsan, Bir Esma', sector: 'Belgesel', role: 'Çekim + Kurgu', duration: 356, poster: doc('bir-insan-bir-esma.webp'), url: 'https://www.youtube.com/watch?v=iXWi7KMfO-I', provider: 'youtube', equipment: DOC_EQUIPMENT, note: SOLO, description: 'Ahşap ve kumaş üzerine yazılar işleyen Cafer Güngör’ü konu alan kısa belgesel.' },
    { slug: 'dijital-cagda-emek', client: 'Belgesel', title: 'Dijital Çağda Emek: Babadan Oğula Tornacılık', sector: 'Belgesel', role: 'Çekim + Kurgu', duration: 813, poster: doc('dijital-cagda-emek.webp'), url: 'https://www.youtube.com/watch?v=EfXEibFYsT4', provider: 'youtube', equipment: DOC_EQUIPMENT, note: SOLO, description: 'Bir baba ve oğul üzerinden tornacılık mesleğini ve kuşaklar arası meslek aktarımını ele alan belgesel.' },
  ] },
];

export type FlatItem = WorkItem & { orientation: WorkRow['orientation'] };
export const allWork: FlatItem[] = rows.flatMap(row => row.items.map(item => ({ ...item, orientation: row.orientation })));
export const isDocumentary = (item: WorkItem) => item.sector === 'Belgesel';
export const formatDuration = (seconds: number | null) => seconds ? `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}` : '';
export const pad = (value: number) => String(value).padStart(2, '0');
