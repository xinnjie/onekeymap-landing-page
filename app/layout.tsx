import "./css/style.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const metadataTitle = "OneKeymap — Configure once. Use everywhere.";
const metadataDescription =
  "Unify your editor shortcuts across VS Code, Zed, IntelliJ IDEA, and Helix.";

export const metadata: Metadata = {
  title: metadataTitle,
  description: metadataDescription,
  icons: {
    icon: "/images/logo-onekeymap.svg",
  },
  openGraph: {
    title: metadataTitle,
    description: metadataDescription,
    url: "/",
    type: "website",
    images: [
      {
        url: "/og.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: metadataTitle,
    description: metadataDescription,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}
