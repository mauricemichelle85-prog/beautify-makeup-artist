import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beautify - Professional Makeup Artist & Hair Stylist",
  description:
    "Beautify is a professional makeup artist and hair stylist studio. We offer bridal beauty, makeup lessons, personal makeovers, hairstyling, hair coloring, and skincare services.",
  keywords: [
    "makeup artist",
    "hair stylist",
    "bridal makeup",
    "beauty services",
    "makeup lessons",
    "hairstyling",
    "skincare",
    "Beautify",
  ],
  authors: [{ name: "Beautify Studio" }],
  openGraph: {
    title: "Beautify - Professional Makeup Artist & Hair Stylist",
    description:
      "We travel to you, no matter how far. Professional makeup and hair styling services for every occasion.",
    siteName: "Beautify",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beautify - Professional Makeup Artist",
    description: "Professional makeup and hair styling services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased font-sans`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
