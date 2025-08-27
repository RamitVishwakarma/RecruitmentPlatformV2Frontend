import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { type Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import WakeDb from '@/components/common/wake-db';
import { Toaster } from '@/components/ui/toaster';

const productSans = localFont({
  src: [
    {
      path: '../../public/fonts/Product-Sans-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/fonts/Product Sans Medium 500.ttf',
      weight: '500',
    },
    {
      path: '../../public/fonts/Product-Sans-Bold.ttf',
      weight: '700',
    },
  ],
  variable: '--font-product-sans',
});

export const metadata: Metadata = {
  title: 'GDG | JSSATEN',
  description: 'Register to GDG onCampus JSSATEN Recruitments 2025!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${productSans.variable}`}>
      <body className="font-product-sans antialiased">
        <WakeDb />
        <Analytics />
        <SpeedInsights />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
