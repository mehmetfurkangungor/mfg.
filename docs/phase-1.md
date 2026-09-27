# Güncelleme — 25 Eylül 2026

12 gerçek marka videosu eklendi: 11 dikey + 1 yatay. Güncel kaynak eşleştirmesi ve doğrulama notları [video-eslestirme.md](./video-eslestirme.md) dosyasındadır. Aşağıdaki içerik ilk tasarım aşamasının planını kaydeder; eski 10 video sayısı ve verticalMedia alanları yerini doğrulanmış `data/work-videos.ts` envanterine bırakmıştır.

---

# Portfolio — Güncel tasarım ve içerik planı

## Görsel kimlik

mfg. kelime markası, üç satırlık büyük isim kompozisyonu, Anton / Manrope / Cormorant Garamond tipografisi ve kırık beyaz–kömür–mat kırmızı paleti korundu. Metinler doğrudan eğitim, deneyim ve çalışma alanlarını anlatır. Sloganlar, soyut ifadeler ve öğrenme/gelişme vurguları kaldırıldı.

## Giriş ve profil

Girişte 4:5 portre alanı var. `data/profile.ts` içindeki `photo` gerçek fotoğraf gelene kadar null; `photoPosition` kadraj odağını kontrol eder. Fotoğraf yüklenince aynı boyuttaki Next/Image alanına yerleşir. Sayfa sahte portre kullanmaz.

Hakkımda bölümünde Üsküdar Üniversitesi Yeni Medya ve İletişim eğitimi, 2026 mezuniyeti, video ve kurgu odağı, sosyal medya / Meta reklam deneyimi ve AI araçlarının kullanım alanı anlatılır. Wucize Ajans deneyimi yaklaşık 6 ay olarak belirtilir. Web sitesi yetkinliği, unvan veya müşteri sonucu uydurulmaz.

## 10 dikey video — Google Drive

`data/projects.ts` içindeki `verticalMedia` nesnesinde her video için ayrı URL ve poster alanı bulunur:

| Marka | Video alanları |
| --- | --- |
| Birtech | birtech-01, birtech-02 |
| ZMT Prefabrik | zmt-prefabrik-01, zmt-prefabrik-02, zmt-prefabrik-03, zmt-prefabrik-04 |
| Raptyle | raptyle-01, raptyle-02 |
| Leonardo Restoran | leonardo-restoran-01 |
| Kavi Diş | kavi-dis-01 |

Her kayıt 9:16 oranında ve google-drive sağlayıcısıyla hazırdır. `videoUrl` ve `poster` gerçek içerik gelene kadar null kalır. Video başlığı, kesin tarih ve projedeki katkı bilgisi daha sonra doğrulanır. Marka filtreli yatay video şeridi dokunma, klavye ve önceki/sonraki düğmeleriyle kullanılabilir. Sayfanın dikey scroll’u şeride bağlanmaz.

## 3 yatay belgesel — YouTube

`documentaries` dizisindeki her kayıt 16:9 oranını ve youtube sağlayıcısını kullanır:

1. Bir İnsan, Bir Esma
2. Beştaş ve Beyaz Gelinlik
3. Dijital Çağda Emek: Babadan Oğula Tornacılık

YouTube bağlantıları doğrudan ilgili `videoUrl` alanına eklenecek. Beştaş ve Beyaz Gelinlik için sade bir başlık yer tutucusu kullanılır. Diğer iki temsili görselin gerçek belgesel karesi olmadığı sayfada belirtilir; onaylı posterler gelince değiştirilir.

## Medya ve motion

Oranlar medya bileşeninde veriden belirlenir, mobilde de 9:16 / 16:9 korunur. Harici iframe yalnızca oynat düğmesine basılınca yüklenir. Drive, preview iframe üzerinden çalışır; CDN gibi kullanılmaz. Gerçek dosyalar geldikten sonra paylaşım izinleri ve oynatma kontrolü gerekir.

GSAP / ScrollTrigger / Lenis mimarisi korunur. Masaüstünde kontrollü isim açılışı ve ilk belgesel karesinde ölçek hareketi var. Mobil doğal kaydırma, canlı reduced-motion desteği, context/ticker/listener cleanup mevcut. VerticalWork ResizeObserver ve scroll listener’ını temizler. Filtre değişince video şeridi başa döner; unmount olan oynatıcı kapanır.

## Mimari

- `data/profile.ts`: profil fotoğrafı ve kadraj
- `data/projects.ts`: belgeseller, marka adetleri, on dikey medya alanı
- `components/sections/VerticalWork.tsx`: filtre ve video şeridi
- `components/media/ProjectMedia.tsx`: ortak oran/oynatıcı/yer tutucu
- `lib/media.ts`: YouTube, Google Drive, Vimeo ve yerel dosya adapterları
- `components/motion/MotionRoot.tsx`: scoped GSAP ve Lenis
- `styles/tokens.css`, `app/globals.css`: tasarım sistemi ve responsive düzen

## Kontroller

Üretim derlemesi / TypeScript doğrulaması başarılı. Tarayıcıda 10 dikey kayıt, 2/4/2/1/1 marka filtresi sonuçları, ileri kaydırma ve filtre sonrası konum sıfırlama doğrulandı. 320, 390, 700, 768, 1024 ve 1440 px genişliklerinde yatay sayfa taşması yok. Dikey ve yatay medya oranları her genişlikte doğrulandı. JavaScript hatası ve gerçek linkler eklenmeden harici iframe yüklemesi yok. Önceki adapter testleri (5 test) geçerli; gerçek videolar henüz sağlanmadığından canlı provider oynatımı bu aşamada doğrulanamaz.

## Sonraki içerik ekleme

Portre fotoğrafı, marka/sıra bilgisiyle on Drive linki, üç YouTube linki ve gerçek posterler eklenecek. Gerçek video içeriklerine uygun başlıklar, roller, tarihler ve iletişim bağlantıları tamamlanacak. Tam proje detayları, ekipman/yazılım dizinleri ve yayın hazırlığı sonraki aşamadadır.
