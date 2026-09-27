# YouTube belgeselleri ve programlar — 25 Eylül 2026

Kullanıcının verdiği kanalın video listesi ve her videonun YouTube izleme sayfası doğrulandı. Üç videonun da yayıncısı Mehmet Furkan Güngör, kanal kimliği UCd_M8UalOqrN8BR2dlZgbLw ve izleme sayfası metadatasında `playableInEmbed: true` olarak görünüyor. Gerçek oynatma sonucu aşağıda ayrıca belirtilmiştir.

| Proje | Video | Yayın tarihi | Süre metadatası |
| --- | --- | --- | --- |
| Bir İnsan, Bir Esma — Kısa Belgesel | [YouTube](https://www.youtube.com/watch?v=iXWi7KMfO-I) | 2026-06-23 | 356 sn |
| Beştaş ve Beyaz Gelinlik — Kısa Belgesel | [YouTube](https://www.youtube.com/watch?v=HRrK-EjRIbo) | 2026-06-17 | 960 sn |
| Dijital Çağda Emek — Babadan Oğula Tornacılık | [YouTube](https://www.youtube.com/watch?v=EfXEibFYsT4) | 2026-01-27 | 813 sn |

Posterler kanalın gerçek YouTube kapaklarıyla değiştirildi. Bir İnsan, Bir Esma ve Beştaş kapakları 1280×720; Dijital Çağda Emek için kanaldan erişilen en büyük doğrulanmış kapak 480×270. Eski temsili görseller artık proje verisinde kullanılmıyor. Gerçek filmler indirilmeden YouTube embed üzerinden sunulur.

Tornacılık belgeselinin açıklamasında Yapım–Kurgu–Kamera katkısı Mehmet Furkan Güngör olarak belirtiliyor; bu bilgi proje notuna işlendi. Diğer projelerde yeni rol varsayılmadı.

## Program ve gelişim metinleri

İlk briefte açıkça verilen Adobe Premiere Pro, Adobe Lightroom, CapCut ve Adobe After Effects listelendi. Premiere Pro / Lightroom / CapCut için kullanım alanları; After Effects için motion design, animasyon ve görsel efekt alanlarında gelişim ifadesi eklendi. Google Ads ve AI destekli görsel-sekans üretimi ayrı kısa metinlerle anlatıldı. Yüzdelik beceri puanı, uzmanlık seviyesi veya belgesiz unvan eklenmedi. İçerik `data/software.ts`, sunum server component olan `Software.tsx` içinde.

Kanal bağlantısı footer’a, video bağlantıları proje notlarını açmayı gerektirmeyen görünür bağlantılar olarak eklendi.

## Doğrulama

Üretim derlemesi başarılı. 320, 390, 700, 768 ve 1440 px ekran genişliklerinde yatay taşma yok; tarayıcı JavaScript hatası yok. Başlangıçta iframe yüklenmiyor, kullanıcı oynatmayı seçince ilgili film açılıyor. Bir İnsan, Bir Esma ve Dijital Çağda Emek için video zamanının ilerlediği doğrulandı. Beştaş ve Beyaz Gelinlik hem youtube-nocookie.com hem youtube.com gömülü oynatıcılarında “Bu video kullanılamıyor” hatası verdi; nedeni doğrulanamadı. Doğru embed bağlantısı korunuyor ve üç belgeselde de doğrudan YouTube’da izleme bağlantısı görünür.
