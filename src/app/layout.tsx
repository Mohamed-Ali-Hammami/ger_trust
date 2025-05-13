import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "./components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gresham Trust - Business Creation Services",
  description: "Professional international business creation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
