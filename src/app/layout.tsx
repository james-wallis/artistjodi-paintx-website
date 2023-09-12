import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import { Navigation } from "@/components/navigation";

import "./globals.css";

const roboto = Roboto({ weight: ["300", "400", "100"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PaintX by ArtistJodi",
  description:
    "The PaintX Project by ArtistJodi. A fusion of creativity and cutting-edge technology.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/paintx/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/paintx/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/paintx/favicon-16x16.png"
        />
        <link rel="manifest" href="/paintx/site.webmanifest" />
      </head>
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
