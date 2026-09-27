# Portfolyo düzeni — 27 Eylül 2026

Sayfa sırası: Hero → Öne çıkan işler → Hakkımda → Deneyim → Belgeseller → AI destekli üretim → Programlar → Dijital pazarlama → Ekipmanlar → Eğitim → Instagram iletişim.

- İlk ekranda ZMT yatay tanıtım videosu bulunur. `data/profile.ts` içindeki `photo` alanına yerel fotoğraf yolu girildiğinde portre alanına geçer.
- Öne çıkan seçki: Beştaş ve Beyaz Gelinlik (belgesel bölümüne bağlantı), Birtech Akıllı PDU ve Raptyle Oversize Streetwear. Tüm 12 marka videosu açılabilir koleksiyonda korunur.
- Belgesel sırası: Beştaş ve Beyaz Gelinlik, Bir İnsan Bir Esma, Dijital Çağda Emek. Her birinde kullanıcı tarafından doğrulanan Sony A7S III, Sony FE 24-70mm F2.8 GM II, DJI RS 4 Pro bilgileri görünür.
- Ekipman deneyiminde ayrıca DJI Osmo Pocket 3 bulunur; sahiplik iddiası yoktur.
- Deneyim: Wucize Ajans Video Editor / 6 ay; ZMT Prefabrik, Benden Büfe, Raptyle, Kavi Diş diğer marka çalışmaları olarak listelenir.
- AI stop motion örnek videosu henüz sağlanmadı. Süreç bölümü hazır; gerçek örnekler geldiğinde eklenecek. Mevcut marka videoları AI üretim diye sınıflandırılmadı.
- İletişim: https://www.instagram.com/mehmetfurkangungor/

## Kontrol

Üretim derlemesi geçti. Tarayıcı JavaScript hatası yok. Belgesel sırası, üç ekipman bloğu ve Instagram URL doğrulandı. Marka koleksiyonu 11 dikey ve 1 yatay videoyu korur; Raptyle filtresi 2 sonuç verir. İlk yüklemede iframe yoktur; hero oynat düğmesi doğru Drive dosyasını açar ve ekran dışına çıkınca oynatıcı kaldırılır. Belgesel seçki bağlantısı doğru bölüme gider. 320 px genişlikte ekipman satırının flex baseline kaynaklı yatay taşması düzeltildi; diğer kontrol genişlikleri 390, 700, 768, 1024 ve 1440 px.

Beştaş'ın önceki kontrolde görülen YouTube gömme hatası için doğrudan izleme bağlantısı korunur; bu düzenleme YouTube kaynaklı kısıtı giderdiği iddiasında bulunmaz.
