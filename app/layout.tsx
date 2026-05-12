import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import SchemaOrg from "./components/shared/schema-org";

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
    default: "Vydavnychyi budynok Ellada | Drukarnia ta dyzain-studia v Sumakh",
    template: "%s | Ellada",
  },
  description: "Vydavnychyi budynok Ellada - knyzhne vydavnytstvo, dyzain-studia ta drukarnia povnoho tsyklu v Sumakh z 2000 roku.",
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