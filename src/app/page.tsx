import { Blockchain } from "@/components/blockchain";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to PaintX</h1>
      <p>A transcendent fusion of creativity and cutting-edge technology.</p>
      <p>Embrace the Future of Art & NFTs.</p>
      <Blockchain className="w-screen" />
      <section className="my-8">
        <p>The original work - shipped to the minter.</p>
        <p>Your journey begins as you unveil the curated gift box.</p>
        <p>
          The PaintX package comes with cotton gloves, ensuring the delicate
          handling required to cherish these artworks for generations to come.
          Each touch becomes a moment of connection, a tangible link to the
          artistic vision and craftsmanship behind each stroke.
        </p>
      </section>
    </main>
  );
}
