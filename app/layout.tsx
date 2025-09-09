
// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Ella Personeelsdiensten | Uw Partner in Detachering",
  description: "Ella Personeelsdiensten is een jonge en dynamische uitzendbureau, actief in de bouw, zorg en elektra. Wij verbinden talenten met kansen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className={`${inter.variable} ${sora.variable} font-sans bg-dark-bg text-dark-text`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
