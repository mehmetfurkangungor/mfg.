# Video eşleştirmesi — 25 Eylül 2026

Gönderilen 12 dosyanın başlıkları, teknik video bilgileri ve her videodan beş farklı zaman noktasındaki kareler incelendi. Marka atamaları dosya adları ile görünür logo/tabela/kapanış karelerine dayanır. Roller ve çekim tarihleri çıkarılmadı.

## Sonuç

11 dikey video (9:16), 1 yatay ZMT tanıtım videosu (16:9). Birtech 2, ZMT Prefabrik 4, Raptyle 2, Leonardo Restoran 3, Riva Hotel 1. Kavi Diş videosu gönderilen dosyalarda bulunmuyor. Belgesel YouTube bağlantıları henüz verilmedi.

| Gönderim sırası | Marka / içerik | Süre | Boyut | Kanıt | Kaynak |
| --- | --- | --- | --- | --- | --- |
| 01 | Raptyle — Koleksiyon çekimi | 32.08 sn | 720×1280 | RAPTYLE dosya adı ve kapanış logosu | [Drive](https://drive.google.com/file/d/18d39FfgkYfgc0RTdvgTLRHaSOTMatELV/view) |
| 02 | Birtech — Akıllı PDU | 30.80 sn | 1080×1920 | BIRTECH kapanış logosu; Akıllı PDU metinleri | [Drive](https://drive.google.com/file/d/194D7eezo-WkxCemevQSdtsDQmiDpga-8/view) |
| 03 | Leonardo Restoran — Yemek & sunum | 26.20 sn | 1080×1920 | Leonardo dosya adı; yemek ve restoran görüntüleri | [Drive](https://drive.google.com/file/d/19MqJi0NPA4xlkrPsWUwQJGxg_tj6W7QG/view) |
| 04 | ZMT Prefabrik — Genel tanıtım | 34.09 sn | 3840×2160 | Çalışan kıyafeti ve bina üzerinde ZMT logosu | [Drive](https://drive.google.com/file/d/1CLsaybJ9iPJgxrS_1EnXHFDY2AclmeR0/view) |
| 05 | ZMT Prefabrik — Üretim tesisi | 54.92 sn | 1080×1920 | Kaynak sahnesinde ZMT kıyafeti; fabrika tabelası | [Drive](https://drive.google.com/file/d/1CTmnbgrsBLDKNw2SMNWeoIegV8TyR98H/view) |
| 06 | Leonardo Restoran — Mekân tanıtımı | 53.34 sn | 1080×1920 | Leonardo dosya adı ve giriş tentesindeki logo | [Drive](https://drive.google.com/file/d/1F9nil1fhQZRN1e7FcrFTnUaf6NkATRFf/view) |
| 07 | Leonardo Restoran — Kokteyl | 23.78 sn | 1080×1920 | Leonardo dosya adı; aynı restoran bahçesinde kokteyl çekimi | [Drive](https://drive.google.com/file/d/1Qt1veeSu6BwzeT9ikiWWkaC4SM0Pa5An/view) |
| 08 | ZMT Prefabrik — Örnek ev | 44.68 sn | 2160×3840 | ZMT bina tabelası ve dosya adı | [Drive](https://drive.google.com/file/d/1U5Tetsd71gtMgoS-9jofkzTs1g1QBOkN/view) |
| 09 | Raptyle — Oversize Streetwear | 15.18 sn | 720×1280 | Raptyle dosya adı ve kapanış logosu | [Drive](https://drive.google.com/file/d/1YzjuPM68ciccz1b9v8pPxWF14GwX53gZ/view) |
| 10 | ZMT Prefabrik — Örnek ev — kısa kurgu | 17.35 sn | 2160×3840 | ZMT bina tabelası ve kapanış logosu | [Drive](https://drive.google.com/file/d/1gDsNPkms0XCimAHwseNoixMwf7Q1LeZp/view) |
| 11 | Riva Hotel — Şehir & otel | 32.13 sn | 1080×1920 | Riva dosya adı ve otel cephesindeki RIVA hotel tabelası | [Drive](https://drive.google.com/file/d/1qdxDSIqRtgrhgkPxHvz-KXHyUdc6KjhL/view) |
| 12 | Birtech — Noctua | 37.38 sn | 1080×1920 | BIRTECH kapanış logosu; Noctua ürün grafikleri | [Drive](https://drive.google.com/file/d/1ra1kRqfYnQAzsx_kWYh31LDRlKBLqHLu/view) |

## Uygulama

- `data/work-videos.ts`: doğrulanmış video envanteri, kaynak dosya adları, Drive kimlikleri, süreler, boyutlar ve poster zamanları.
- `data/projects.ts`: bu envanterden oluşturulan proje kayıtları ve otomatik marka adetleri.
- `public/media/work/`: videoların gerçek karelerinden türetilmiş 12 WebP poster.
- Video dosyaları siteye kopyalanmadı. Google Drive preview oynatıcısı yalnızca kullanıcı istediğinde yüklenir. Görüş alanından çıkınca embed kaldırılır ve tekrar otomatik başlatılmaz.
- Yatay ZMT videosu dikey kadraja kırpılmadı; ayrı Yatay çalışmalar bölümünde gösterilir.
- Kavi Diş için bu bağlantılardan bir video atanmadı.
- Belgeseller ve portre alanı, kendi dosyaları gelene kadar önceki durumda kalır.

## Doğrulama

- Üretim derlemesi / TypeScript ve beş medya adapter testi başarılı.
- 11 dikey kayıt ve marka filtreleri: Birtech 2, ZMT 3, Raptyle 2, Leonardo 3, Riva Hotel 1. ZMT’nin dördüncü videosu yatay bölümde.
- 12 yerel poster dosyası mevcut; filtrelerdeki tüm dikey görsellerin yüklenmesi kontrol edildi.
- İlk sayfa yüklenmesinde harici iframe yok. İstek üzerine doğru Drive preview kaynağı yükleniyor.
- Gerçek oynatma örnekleri: Birtech Akıllı PDU (dikey) ve ZMT Genel tanıtım (yatay). Tarayıcı video zamanının ilerlediği, paused=false, readyState=4 ve medya hatası olmadığı doğrulandı. Diğer dosyalar kaynak erişimi, yerel video çözümleme ve kare analiziyle kontrol edildi; her birinin embed oynatımı ayrı ayrı test edilmedi.
- Oyuncu görüş alanından çıkınca iframe kaldırıldı. 320, 390, 768 ve 1440 px genişliklerinde yeniden boyutlandırma sonrası yatay sayfa taşması yok.
- Geçici analiz için indirilen orijinal videolar public dizinine taşınmadı ve inceleme sonrası çalışma kopyaları temizlendi. Kareler ve eşleştirme kaydı korundu.
