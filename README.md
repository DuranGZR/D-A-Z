# Doğu Anadolu Zirvesi Web Sitesi

Doğu Anadolu Zirvesi web sitesi, HSD İnönü topluluğu tarafından düzenlenen teknoloji ve girişimcilik odaklı etkinlik için hazırlanmış modern, responsive ve tanıtım odaklı bir web arayüzüdür.

Site; etkinliğin amacını, katılımcılara sunduğu kazanımları, konuşmacıları, paydaşları, sponsorları ve iletişim bilgilerini tek sayfalık akıcı bir deneyim içinde sunar.

## Proje Amacı

Doğu Anadolu Zirvesi, bölgedeki üniversite öğrencilerini, yazılım ve mühendislik alanında gelişmek isteyen gençleri, sektör temsilcilerini ve teknoloji ekosistemini bir araya getirmeyi hedefleyen bir etkinliktir.

Bu web sitesi de etkinliğin dijital vitrini olarak tasarlanmıştır. Amaç yalnızca bilgi vermek değil; ziyaretçiye etkinliğin ölçeğini, enerjisini ve profesyonel yapısını ilk bakışta hissettirmektir.

## Öne Çıkan Özellikler

- Modern ve koyu tema odaklı görsel tasarım
- Açık tema desteği
- Tam responsive mobil uyumluluk
- Mobilde özel tasarlanmış bölüm düzenleri
- Konuşmacılar için mobilde kompakt liste ve detay görüntüleme
- Paydaş ve sponsor alanları
- Google Maps destekli iletişim bölümü
- Mail ve yol tarifi aksiyonları
- Scroll reveal animasyonları
- Akıcı footer marquee yazısı
- React bileşen mimarisiyle parçalı ve yönetilebilir yapı

## Sayfa Bölümleri

Site tek sayfa yapısında ilerler ve aşağıdaki ana bölümlerden oluşur:

- Hero / giriş alanı
- Doğu Anadolu Zirvesi nedir?
- Neden katılmalısınız?
- Hakkımızda
- Konuşmacılar
- Paydaşlar
- Sponsorlar
- Bize ulaşın
- Footer

## Mobil Deneyim

Bu projede mobil görünüm ayrıca ele alınmıştır. Desktop tasarımı doğrudan küçültülmek yerine, her bölümün mobil kullanıcı davranışına göre yeniden düzenlenmesi hedeflenmiştir.

Mobil tarafta yapılan temel yaklaşımlar:

- Kartların ekranı gereksiz doldurmaması
- İçeriklerin tek elle kolay okunabilmesi
- Buton ve bağlantıların dokunmatik kullanıma uygun olması
- Konuşmacı bilgilerinin kompakt gösterilip gerektiğinde detaylı açılması
- İletişim bölümünde haritadan çok aksiyonların öne çıkarılması
- Footer alanının küçük ekranlarda daha kısa ve okunabilir hale getirilmesi

## Kullanılan Teknolojiler

- React 19
- Vite
- JavaScript
- Vanilla CSS
- React Icons
- Context API
- Google Maps Embed
- ESLint

## Proje Yapısı

```text
DAZ/
├── frontend/
│   ├── public/
│   │   ├── HSD-Beyaz-Logo.png
│   │   ├── kg.png
│   │   ├── int.png
│   │   └── inönü.png
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── WhatIs.jsx
│   │   │   ├── WhyAttend.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Speakers.jsx
│   │   │   ├── Partners.jsx
│   │   │   ├── Sponsors.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Bileşenler

`Navbar`
Sayfa içi navigasyonu, mobil menüyü ve tema değiştirme butonunu içerir.

`Hero`
Etkinliğin ilk izlenimini veren giriş bölümüdür.

`WhatIs`
Doğu Anadolu Zirvesi'nin ne olduğunu anlatan içerik bölümüdür.

`WhyAttend`
Zirveye katılmanın sağlayacağı kazanımları gösterir.

`About`
Etkinliğin misyon, vizyon, hedef kitle ve etki alanını anlatır.

`Speakers`
Konuşmacı kartlarını listeler. Mobilde kartlar kompakt gösterilir ve detaylar ayrıca okunabilir.

`Partners`
Paydaş logolarını kayan bir yapı içinde sunar.

`Sponsors`
Sponsorları seviyelerine göre listeler.

`Contact`
Adres, e-posta, yol tarifi ve harita bilgisini içerir.

`Footer`
Site bağlantılarını, sosyal medya ikonlarını ve marka yazısını içerir.

## Tasarım Yaklaşımı

Tasarımda HSD kimliğine uygun koyu, teknolojik ve etkinlik odaklı bir atmosfer hedeflenmiştir. Kırmızı vurgu rengi, siyah zemin ve cam efektli yüzeyler kullanılarak güçlü bir görsel dil oluşturulmuştur.

Mobil tarafta ise yalnızca görünüm değil, kullanım davranışı da dikkate alınmıştır. Bu yüzden bazı bölümler desktop ile birebir aynı görünmez; mobilde daha kısa, daha hızlı taranabilir ve dokunmaya daha uygun hale getirilmiştir.

## Komutlar

Frontend dizininde kullanılabilecek temel komutlar:

```bash
npm run dev
```

Geliştirme sunucusunu başlatır.

```bash
npm run build
```

Projeyi production için derler.

```bash
npm run preview
```

Build alınmış projeyi yerelde önizler.

```bash
npm run lint
```

Kod kalitesini ESLint ile kontrol eder.

## Projeyi Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için Node.js kurulu olmalıdır. Önerilen sürüm Node.js 20 veya üzeridir.

1. Repoyu klonlayın:

```bash
git clone https://github.com/kullanici-adi/repo-adi.git
```

2. Proje klasörüne girin:

```bash
cd DAZ
```

3. Frontend klasörüne geçin:

```bash
cd frontend
```

4. Bağımlılıkları yükleyin:

```bash
npm install
```

5. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

6. Tarayıcıda açın:

```text
http://localhost:5173
```

Production build almak için:

```bash
npm run build
```

Build sonucunu yerelde kontrol etmek için:

```bash
npm run preview
```
