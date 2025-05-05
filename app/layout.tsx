import "./global.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import cx from "./util/cx";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        ibmPlexSans.variable
      )}
    >
      <body className="antialiased max-w-3xl mx-4 mt-8 lg:mx-auto font-sans">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
