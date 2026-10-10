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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <Header />
        {children}
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
