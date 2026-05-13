import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import SchemaOrg from "./components/shared/schema-org";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"], // Добавлено cyrillic для украинского/русского
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"], // Добавлено cyrillic
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ellada-sumy.com.ua"), // Добавлено!
  title: {
    default: "Видавничий будинок Еллада | Друкарня та дизайн-студія в Сумах",
    template: "%s | Еллада",
  },
  description: "Видавничий будинок Еллада — книжкове видавництво, дизайн-студія та друкарня повного циклу в Сумах з 2000 року.",
  keywords: ["видавництво", "друкарня", "поліграфія", "Суми", "книги", "дизайн", "верстка", "типографія"],
  authors: [{ name: "Видавничий будинок Еллада" }],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://ellada-sumy.com.ua",
    siteName: "Видавничий будинок Еллада",
    title: "Видавничий будинок Еллада | Друкарня та дизайн-студія в Сумах",
    description: "Книжкове видавництво, дизайн-студія та друкарня повного циклу в Сумах з 2000 року.",
    images: [{
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Видавничий будинок Еллада",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Видавничий будинок Еллада",
    description: "Книжкове видавництво, дизайн-студія та друкарня повного циклу в Сумах",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ellada-sumy.com.ua",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SchemaOrg />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}