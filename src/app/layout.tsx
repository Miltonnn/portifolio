import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FloatingActions } from "@/components/floating-actions/floating-actions";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Milton Andrade | Desenvolvedor Front-end",
  description:
    "Portfólio de Milton Andrade, desenvolvedor front-end focado em interfaces modernas, performáticas e acessíveis.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Milton Andrade",
    title: "Milton Andrade | Desenvolvedor Front-end",
    description:
      "Front-end especializado em e-commerce com VTEX IO, FastStore e Shopify. Interfaces rápidas, acessíveis e bem construídas.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milton Andrade | Desenvolvedor Front-end",
    description:
      "Front-end especializado em e-commerce com VTEX IO, FastStore e Shopify. Interfaces rápidas, acessíveis e bem construídas.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip bg-background font-sans text-foreground">
        <Header />
        <div className="flex flex-1 flex-col overflow-x-clip">
          {children}
          <Footer />
        </div>
        <FloatingActions />
      </body>
    </html>
  );
}
