import { ART_ITEMS } from "@/art";
import Image from "next/image";
import Link from "next/link";

import { BlendBackground } from "@/components/blend-background";
import { Blockchain } from "@/components/blockchain";

import TopPic from "@/assets/TopPic.png";
import ArtistJodi from "@/assets/artistjodi.png";
import ConnectingPhysicalAndDigital2 from "@/assets/connecting-physical-digital-nft2.png";
import ConnectingPhysicalAndDigital1 from "@/assets/connecting-pyhsical-digital-nft1.png";
import DigitalAsset4 from "@/assets/digital-assets-3d-glb.png";
import DigitalAsset1 from "@/assets/digital-assets-high-resolution.png";
import DigitalAsset2 from "@/assets/digital-assets-lower-resolution.png";
import DigitalAsset3 from "@/assets/digital-assets-painting-in-box.png";
import Packaging from "@/assets/packaging.png";
import PaintXCollectionByArtistJodi from "@/assets/paintx-collection-by-artistodi.png";
import QualityStatement from "@/assets/quality-statement.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 w-full max-w-6xl mx-auto font-light">
      <Image
        src={TopPic}
        alt="opened digital art box"
        className="absolute -top-96 left-0 right-0 -z-[8]"
        width={1500}
      />

      <section className="text-2xl font-medium text-center flex flex-col w-full mt-44 mb-20 relative">
        <BlendBackground className="-top-32" />
        <Image
          src={PaintXCollectionByArtistJodi}
          alt="paintx brand logo"
          width={500}
          className="mb-10 mx-auto"
        />
        <h1>Welcome to PaintX</h1>
        <p>A fusion of creativity and cutting-edge technology.</p>
        <p>Embrace the Future of Art & NFTs.</p>
        <div className="flex justify-center items-center w-full h-96">
          CAROUSEL
        </div>
        <div className="flex w-full justify-between my-8">
          <div className="uppercase text-left">
            <p>PaintX NFT Genesis Collection</p>
            <p>Mint is live 3 Sept 2022 Time: 12.00AM</p>
          </div>
          <button className="btn">COLLECTION</button>
        </div>
        <div className="my-8 self-start">
          <button className="btn">Next drop waitlist</button>
        </div>
      </section>
      <Blockchain className="w-screen" />
      <section className="my-20 text-center font-light relative">
        <BlendBackground className="top-28" />
        <Image
          src={PaintXCollectionByArtistJodi}
          alt="paintx brand logo"
          width={300}
          className="my-10 mx-auto"
        />
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
        <div className="justify-between flex flex-col-reverse md:flex-row my-20 w-full gap-4 items-center">
          <div className="text-left">
            <p className="font-medium text-lg mb-4">What&apos;s in the box</p>
            <ul className="space-y-2">
              <li>Original Work on Canvas (serial numbered and NFC* tagged)</li>
              <li>Certificate with NFC tag</li>
              <li>Care information</li>
              <li>Hand embellished brochure</li>
              <p>Cotton gloves</p>
              <p>ArtLevel Hanging Kit and instructions</p>
            </ul>
            <Link href="/artlevel" className="btn mt-4">
              ARTLEVEL
            </Link>
          </div>
          <Image
            src={Packaging}
            alt="Example packaging"
            className="md:w-2/3 xl:w-3/5 pl-32"
          />
        </div>

        <h3 className="font-medium text-xl mb-8 mt-20">
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

      <section className="text-left my-20 relative">
        <BlendBackground className="-top-20" />
        <h3 className="font-medium text-center text-xl mb-8">
          Connecting the physical and digital
        </h3>
        <div className="flex justify-between items-center w-full">
          <div className="w-1/3 space-y-4">
            <p>
              The artwork is paired with a digital twin, as a Non-Fungible Token
              (NFT) on the Ethereum blockchain.
            </p>

            <p>
              Each has its own NFC* tag that links to the digital asset on the
              blockchain, as well as a unique serial number.
            </p>

            <p>
              With an enabled mobile phone, the NFC tag on each painting and
              certificate can be scanned to open a link to the NFT.
            </p>

            <p>*Near Field Communication</p>
          </div>
          <div className="flex justify-between grow w-2/3">
            <Image
              src={ConnectingPhysicalAndDigital1}
              alt="NFT diagrams 1"
              width={250}
            />
            <Image
              src={ConnectingPhysicalAndDigital2}
              alt="NFT diagrams 2"
              width={350}
            />
          </div>
        </div>
      </section>
      <Blockchain className="w-screen" />
      <section className="my-20 grid grid-cols-2 md:grid-cols-4 w-full gap-8">
        <div className="rounded-lg bg-gray-400 w-full h-48 flex justify-center items-center">
          Placeholder
        </div>
        <div className="rounded-lg bg-gray-400 w-full h-48 flex justify-center items-center">
          Placeholder
        </div>
        <div className="rounded-lg bg-gray-400 w-full h-48 flex justify-center items-center">
          Placeholder
        </div>
        <div className="rounded-lg bg-gray-400 w-full h-48 flex justify-center items-center">
          Placeholder
        </div>
      </section>

      <section className="my-20 relative overflow-y-visible">
        <BlendBackground className="-top-36" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
          <div className="flex justify-start flex-col items-start space-y-4 md:col-span-2">
            <Image src={ArtistJodi} alt="ArtistJodi" width={100} height={100} />
            <p className="text-lg font-medium">ArtistJodi</p>
            <div className="max-w-md flex flex-col">
              <p>
                Meet the artist behind the PaintX Genisis Collection. Each piece
                tells a story, evoking emotion and imagination. With a style
                ranging from smooth to heavily textured, digital and physical,
                no two ArtistJodi pieces are the same.
              </p>
              <Link href="https://artistjodi.com" className="btn mt-8 self-end">
                About Jodi
              </Link>
            </div>
          </div>
          <div className="flex justify-start flex-col items-start space-y-4">
            <Image
              src={QualityStatement}
              alt="Quality Statement badge"
              width={100}
              height={100}
            />
            <p className="text-lg font-medium">Quality Statement</p>
            <div>
              <p>
                The artwork has been created by Jodi in her studio, using the
                finest quality materials:
              </p>
              <ul>
                <li>100% cotton canvas</li>
                <li>Pine stretcher bar</li>
                <li>Primed with gesso</li>
                <li>Acrylic</li>
                <li>Mixed media</li>
              </ul>
            </div>
          </div>
        </div>
        <Image
          src={PaintXCollectionByArtistJodi}
          alt="paintx brand logo"
          width={300}
          className="my-10 mx-auto"
        />
      </section>

      <section>
        <div className="grid grid-cols-4 gap-8">
          {ART_ITEMS.map(({ images, name, slug }) => (
            <div key={slug} className="relative">
              <Link href={`/${slug}`}>
                <Image src={images.main} alt={name} width={300} height={300} />
              </Link>
              <div className="absolute flex-col bottom-0 left-0 right-0 flex justify-center items-center">
                <p className="mb-4">{name}</p>
                <button className="btn w-3/4">Mint</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
