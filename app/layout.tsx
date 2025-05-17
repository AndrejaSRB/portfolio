import { IBM_Plex_Sans } from "next/font/google";

import type { Metadata } from "next";

import { ThemeProvider } from "@/app/components/theme/theme-provider";

import Footer from "./components/footer";
import { Navbar } from "./components/nav";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Andreja Kojadinovic",
    template: "%s | Andreja Kojadinovic",
  },
  description: "This is my portfolio.",
  openGraph: {
    title: "Andreja Kojadinovic",
    description: "This is my portfolio.",
    url: baseUrl,
    siteName: "Andreja Kojadinovic",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-sans",
  weight: ["500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`antialiased max-w-4xl mx-auto w-full font-sans ${ibmPlexSans.variable} flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <main className={`min-w-0 flex flex-col  flex-1 pt-6`}>
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
