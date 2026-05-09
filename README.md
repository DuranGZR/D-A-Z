# Doğu Anadolu Zirvesi (DAZ)

Doğu Anadolu Zirvesi, teknoloji ve girişimcilik ekosistemini bir araya getiren prestijli bir etkinlik için tasarlanmış, yüksek performanslı ve editorial görsel dile sahip bir web platformudur. Platform, modern web standartlarını zorlayan animasyon hiyerarşisi ve lüks tasarım estetiği ile kullanıcıya benzersiz bir deneyim sunar.

## Tasarım Vizyonu

Proje, geleneksel etkinlik sitelerinden ayrılarak Awwwards standartlarında bir "Luxury Experience" sunmayı hedefler. Midnight Navy ve derin altın tonlarının hakim olduğu palet, tipografik odaklı bir yerleşimle birleşerek platformun profesyonel ve yenilikçi karakterini yansıtır.

## Teknik Altyapı ve Performans

Platform, modern frontend mimarisinin en güncel araçları kullanılarak inşa edilmiştir:

- **Çekirdek:** Next.js 16 ve React 19 ile optimize edilmiş render süreçleri.
- **Animasyon Sistemi:** GSAP (GreenSock Animation Platform) ve ScrollTrigger entegrasyonu ile akıcı, katmanlı geçişler.
- **3D Deneyimi:** Three.js, React Three Fiber ve Drei kütüphaneleri kullanılarak oluşturulan etkileşimli WebGL sahneleri.
- **Parçacık Efektleri:** TSParticles ile derinlik hissi veren dinamik arkaplanlar.
- **Stil Yönetimi:** Vanilla CSS ile kurgulanan, düşük maliyetli ve yüksek esneklik sunan CSS değişkenleri tabanlı sistem.
- **Performans Optimizasyonu:** GPU hızlandırmalı animasyonlar, akıllı resim yükleme stratejileri ve düşük "Main Thread" yükü.

## Mimari Yapı: Feature-Sliced Design (FSD)

Proje, ölçeklenebilirliği ve sürdürülebilirliği en üst düzeye çıkarmak için Feature-Sliced Design metodolojisi prensiplerine göre yapılandırılmıştır:

- **App:** Global sağlayıcılar, tema yapılandırmaları ve temel düzenler.
- **Pages:** Sayfa seviyesindeki bileşenler ve veri akış yönetimi.
- **Widgets:** Bağımsız işlevselliğe sahip büyük UI blokları (Hero Section, Speakers List, Sponsors Gallery).
- **Features:** Kullanıcı etkileşimlerini yöneten aksiyon odaklı bileşenler.
- **Shared:** Tekrar kullanılabilir UI bileşenleri, yardımcı fonksiyonlar ve özel React hookları.

## Öne Çıkan Özellikler

- **Editorial Layout:** Tipografik hiyerarşinin ön planda olduğu, içerik odaklı modern tasarım.
- **Smooth Interaction:** GSAP tabanlı yumuşak kaydırma ve nesne odaklı giriş animasyonları.
- **3D Backgrounds:** Sayfa genelinde derinlik algısını güçlendiren WebGL tabanlı görsel öğeler.
- **Responsive Excellence:** Tüm cihazlarda (Desktop, Tablet, Mobile) kusursuz çalışan, her ekran boyutuna özel optimize edilmiş görsel düzen.
- **Preloader Deneyimi:** Sitenin yüklenme sürecini bir deneyime dönüştüren özel tasarlanmış giriş sekansı.

## Başlangıç

### Gereksinimler

- Node.js 20 veya üzeri
- pnpm (Önerilen) veya npm/yarn paket yöneticisi

### Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Depoyu klonlayın:
   ```bash
   git clone [repository-url]
   ```

2. Frontend dizinine gidin:
   ```bash
   cd frontend
   ```

3. Bağımlılıkları yükleyin:
   ```bash
   pnpm install
   ```

4. Geliştirme sunucusunu başlatın:
   ```bash
   pnpm run dev
   ```

## Üretim ve Dağıtım

Üretim ortamı için optimize edilmiş bir çıktı almak için:

```bash
pnpm build
```

Ardından sonucu önizlemek için:

```bash
pnpm start
```

## Kalite Standartları

Kod kalitesini ve tasarım bütünlüğünü korumak için ESLint ve katı mimari kurallar uygulanmaktadır. Her yeni bileşen, projenin lüks estetiğine ve teknik performans hedeflerine uygun olarak geliştirilmelidir.
