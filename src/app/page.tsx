import Image from "next/image";
import Link from "next/link";

import { Blockchain } from "@/components/blockchain";

import DigitalAsset4 from "@/assets/digital-assets-3d-glb.png";
import DigitalAsset1 from "@/assets/digital-assets-high-resolution.png";
import DigitalAsset2 from "@/assets/digital-assets-lower-resolution.png";
import DigitalAsset3 from "@/assets/digital-assets-painting-in-box.png";
import Packaging from "@/assets/packaging.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Welcome to PaintX</h1>
      <p>A transcendent fusion of creativity and cutting-edge technology.</p>
      <p>Embrace the Future of Art & NFTs.</p>
      <Blockchain className="w-screen" />
      <section className="my-8 text-center max-w-6xl font-light">
        <div className="h-32">Placeholder! PaintX by ArtistJodi</div>
        <h3 className="mb-8 font-medium text-xl">
          The original work - shipped to the minter.
        </h3>
        <p>Your journey begins as you unveil the curated gift box.</p>
        <p>
          The PaintX package comes with cotton gloves, ensuring the delicate
          handling required to cherish these artworks for generations to come.
          Each touch becomes a moment of connection, a tangible link to the
          artistic vision and craftsmanship behind each stroke.
        </p>
        <div className="justify-between flex flex-col-reverse md:flex-row my-16 w-full gap-4 items-center">
          <div className="text-left">
            <p className="font-medium text-lg mb-4">What's in the box</p>
            <ul className="space-y-2">
              <li>Original Work on Canvas (serial numbered and NFC* tagged)</li>
              <li>Certificate with NFC tag</li>
              <li>Care information</li>
              <li>Hand embellished brochure</li>
              <p>Cotton gloves</p>
              <p>ArtLevel Hanging Kit and instructions</p>
            </ul>
            <Link href="/artlevel">ARTLEVEL</Link>
          </div>
          <Image
            src={Packaging}
            alt="Example packaging"
            className="md:w-2/3 xl:w-3/5 pl-32"
          />
        </div>

        <h3 className="font-medium text-xl mb-8">
          The 1/1 digital assets - via unlockable content, viewable by the owner
          of the NFT
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-center h-64">
          <div className="h-full flex flex-col justify-end items-center">
            <Image
              className="justify-self-center"
              src={DigitalAsset1}
              alt="High resolution scan 300dpi 30cm x 30cm"
            />
            <div className="h-20 mt-4">
              <p>A high resolution scan - 300dpi</p>
              <p>30cm x 30cm</p>
            </div>
          </div>

          <div className="h-full flex flex-col justify-end items-center">
            <Image
              className="justify-self-center"
              src={DigitalAsset2}
              alt="Lower resolution scan"
            />
            <p className="h-20 mt-4">Lower resolution jpeg</p>
          </div>

          <div className="h-full flex flex-col justify-end items-center">
            <Image
              className="justify-self-center"
              src={DigitalAsset3}
              alt="Painting in the box"
            />
            <div className="h-20 mt-4">
              <p>Painting in the box</p>
              <p>3D glb twin and USDZ AR</p>
            </div>
          </div>

          <div className="h-full flex flex-col justify-end items-center">
            <Image
              className="justify-self-center"
              src={DigitalAsset4}
              alt="Painting 3D glb twin and usdz ar"
            />
            <div className="h-20 mt-4">
              <p>Painting</p>
              <p>3D glb twin and USDZ AR</p>
            </div>
          </div>
        </div>

        <p className="w-full text-center md:text-right mt-4 text-sm text-gray-400 md:pr-20">
          The 3D models can be used in the metaverse and beyond
        </p>
      </section>
    </main>
  );
}
