# Doğu Anadolu Zirvesi (DAZ) Tanıtım Platformu

Bu proje, HSD İnönü Üniversitesi topluluğu tarafından organize edilecek olan Doğu Anadolu Zirvesi'nin resmi tanıtım web sitesidir. Doğu Anadolu Bölgesi'ndeki teknoloji ekosistemini güçlendirmeyi, genç yetenekleri sektör liderleriyle buluşturmayı ve bölgesel girişimcilik potansiyelini artırmayı hedefleyen zirvenin dijital yüzüdür.

## Proje Vizyonu

Doğu Anadolu Zirvesi, sadece bir etkinlik olmanın ötesinde, bölgenin dijital dönüşümüne öncülük eden bir platformdur. Amacımız, üniversite öğrencilerini, yazılım mühendislerini ve girişimcileri tek bir çatı altında toplayarak, bilgi paylaşımını ve ağ (networking) olanaklarını maksimize etmektir.

## Teknik Özellikler

Sitede modern web teknolojileri ve kullanıcı deneyimini (UX) ön planda tutan tasarım yaklaşımları kullanılmıştır:

- Görsel Efektler: Dinamik parçacık sistemleri (tsparticles) ve etkileşimli orb animasyonları.
- Animasyonlar: Intersection Observer API kullanılarak geliştirilen kaydırma temelli (scroll-reveal) animasyonlar.
- Performans: Vite tabanlı hızlı yapılandırma ve optimize edilmiş bileşen yükleme.
- Duyarlı Tasarım (Responsive): Tüm cihaz ekranları ile tam uyumlu, akıcı arayüz.
- Tema Sistemi: Context API ile yönetilen, sürdürülebilir stil yapılandırması.

## Kullanılan Teknolojiler

- JavaScript: React 19
- Yapı Aracı: Vite
- Stil: Vanilla CSS (Modern CSS Özellikleri)
- İkonlar: React Icons / Phosphor Icons
- Animasyon: @tsparticles/react, Framer Motion (veya benzeri logic)
- Lintleme: ESLint

## Proje Yapısı

```
DAZ/
├── frontend/             # React tabanlı ön yüz uygulaması
│   ├── src/
│   │   ├── components/   # UI Bileşenleri (Hero, About, Speakers, vb.)
│   │   ├── contexts/     # Durum Yönetimi (Theme)
│   │   ├── hooks/        # Özel React Hook'ları (useMagnetic, vb.)
│   │   ├── assets/       # Görsel ve Statik Kaynaklar
│   │   └── App.jsx       # Ana Uygulama Girişi
│   ├── public/           # Statik dosyalar
│   └── package.json      # Bağımlılık ve Script Yönetimi
└── README.md             # Proje Ana Dokümantasyonu
```

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın:
   ```bash
   git clone [URL]
   ```

2. Frontend dizinine gidin:
   ```bash
   cd frontend
   ```

3. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

4. Uygulamayı geliştirme modunda başlatın:
   ```bash
   npm run dev
   ```

## Etkinlik Detayları

Zirve kapsamında planlanan ana başlıklar:
- Alanında uzman 10'dan fazla konuşmacı.
- 500+ fiziksel katılımcı hedefi.
- 8 stratejik oturum.
- Bölgesel teknoloji ağının genişletilmesi.

## Katkıda Bulunanlar

- Organizasyon: HSD İnönü Üniversitesi Topluluğu
- Geliştirme: [Geliştirici İsimleri Buraya Gelebilir]

Bu proje, Doğu Anadolu'nun teknolojik geleceğini inşa etmek adına atılmış bir adımdır.
