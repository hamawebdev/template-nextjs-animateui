import type { Metadata } from 'next';
import { Rubik, Poppins } from "next/font/google";
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const fontSans = Rubik({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Poppins({
  subsets: ["latin"],
  variable: "--font-serif",
});


export const metadata: Metadata = {
  title: 'eden agency dz',
  description: 'eden agency dz',
  icons: [
    {
      url: '/favicon.ico',
      sizes: 'anysize',
      type: 'image/x-icon',
    },
    {
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      url: '/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: 'anysize',
      type: 'image/png',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
          <body className={`${fontSans.variable} ${fontSerif.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
