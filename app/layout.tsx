import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "206 Candlewood Cres",
  description: "Resident information for 206 Candlewood Cres, Waterloo, ON.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-white text-gray-800 antialiased">
        <header className="border-b border-gray-200 bg-white">
          <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link href="/" className="text-gray-900 font-semibold text-lg tracking-tight hover:text-gray-600 transition-colors">
              206 Candlewood
            </Link>
            <nav className="flex gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/newsletters" className="hover:text-gray-900 transition-colors">
                Newsletters
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-gray-200 bg-gray-50 mt-16">
          <div className="max-w-3xl mx-auto px-6 py-8 text-sm text-gray-500">
            <p className="font-medium text-gray-700">206 Candlewood Cres</p>
            <p>Waterloo, Ontario</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
