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
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
