import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Binder - Landing Page',
  description: 'Landing inspirada no layout enviado'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
