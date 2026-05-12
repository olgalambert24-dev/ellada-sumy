import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Видавничий будинок «Еллада» | Друкарня та дизайн-студія в Сумах",
    template: "%s | Еллада",
  },
  description: "Видавничий будинок «Еллада» — книжне видавництво, дизайн-студія та друкарня повного циклу в Сумах з 2000 року. Друк книг, рекламної поліграфії.",
  keywords: ["видавництво", "друкарня", "поліграфія", "Суми", "книги", "дизайн", "друк"],
  authors: [{ name: "Видавничий будинок «Еллада»" }],
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://ellada-sumy.com",
    siteName: "Видавничий будинок «Еллада»",
    title: "Видавничий будинок «Еллада»",
    description: "Книжне видавництво, дизайн-студія та друкарня повного циклу в Сумах",
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
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}