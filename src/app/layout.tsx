import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import InitLayout from '@/components/layouts/initLayout';
import { I18nProvider } from '@/i18n/I18nProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bit Da Nang | Giải pháp công nghệ hàng đầu',
  description: 'Công ty Bit Đà Nẵng cung cấp các giải pháp phần mềm, phát triển ứng dụng di động và website chuyên nghiệp, uy tín hàng đầu tại Đà Nẵng.',
  keywords: 'Bit Da Nang, công ty phần mềm Đà Nẵng, thiết kế website, ứng dụng di động, giải pháp công nghệ',
  openGraph: {
    title: 'Bit Da Nang | Giải pháp công nghệ hàng đầu',
    description: 'Công ty Bit Đà Nẵng cung cấp các giải pháp phần mềm, phát triển ứng dụng di động và website chuyên nghiệp.',
    url: 'https://bitdanang.com',
    siteName: 'Bit Da Nang',
    images: [
      {
        url: '/images/banner_home.png',
        width: 1200,
        height: 630,
        alt: 'Bit Da Nang Banner',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <InitLayout>{children}</InitLayout>
        </I18nProvider>
      </body>
    </html>
  );
}
