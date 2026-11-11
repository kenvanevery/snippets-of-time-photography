import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL(
    "https://www.snippetsoftimephotography.com"
  ),

  title: {
    default:
      "Snippets of Time Photography | Fine Art Prints & Michigan Photography",
    template: "%s | Snippets of Time Photography",
  },

  description:
    "Explore fine art photography prints featuring Northern Michigan landscapes, lighthouses, nature, and scenic destinations across America and beyond.",

  openGraph: {
    title: "Snippets of Time Photography",
    description:
      "Discover fine art landscape, nature, and lighthouse photography prints from Northern Michigan and beyond.",
    url: "https://www.snippetsoftimephotography.com",
    siteName: "Snippets of Time Photography",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  {children}

  <a
    href="https://www.facebook.com/SnippetsofTimeKenandDebPhotography/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit Snippets of Time Photography on Facebook"
    className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-2xl font-bold text-white shadow-lg transition hover:scale-110"
  >
    f
  </a>
</body>
    </html>
  );
}
