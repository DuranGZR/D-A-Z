import './globals.css';

export const metadata = {
  title: 'Doğu Anadolu Zirvesi',
  description: 'Teknoloji ve Yenilik Zirvesi resmi web sitesi',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
