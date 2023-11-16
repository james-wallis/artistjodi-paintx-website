import { ART_ITEMS } from "@/art";
import Image from "next/image";
import Link from "next/link";

import { Blockchain } from "@/components/blockchain";
import { Carousel } from "@/components/carousel";
import { GoToTopButton } from "@/components/go-to-top-button";
import { ScrollToIdButton } from "@/components/scrollToIdButton";

import JodiSignature from "@/assets/JodiSig.png";
import TopPic from "@/assets/TopPic.png";
import XLogo from "@/assets/X.png";
import ArtistJodi from "@/assets/artistjodi.png";
import ArtLevel from "@/assets/artlevel-logo.png";
import DigitalAsset4 from "@/assets/digital-assets-3d-glb.png";
import DigitalAsset1 from "@/assets/digital-assets-high-resolution.png";
import DigitalAsset2 from "@/assets/digital-assets-lower-resolution.png";
import DigitalAsset3 from "@/assets/digital-assets-painting-in-box.png";
import Packaging from "@/assets/packaging.png";
import PaintXCollectionByArtistJodi from "@/assets/paintx-collection-by-artistodi.png";
import PhoneDiagram from "@/assets/phonediagram.png";
import QualityStatement from "@/assets/quality-statement.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-24 md:py-24 w-full mx-auto font-light overflow-x-hidden">
      <GoToTopButton />

      <div className="overflow-hidden absolute top-10 md:-top-64 left-0 right-0 -z-[8] ">
        <Image
          src={TopPic}
          alt="opened digital art box"
          className="scale-[2] md:scale-100"
        />
      </div>

      <section className="text-xl md:text-2xl font-medium text-center flex flex-col w-full mt-16 md:mt-44 mb-10 md:mb-20 relative gutter">
        {/* <BlendBackground className="top-10 md:-top-32" /> */}
        <Image
          src={PaintXCollectionByArtistJodi}
          alt="paintx brand logo"
          width={500}
          className="mb-6 md:mb-10 mx-auto"
        />
        <div className="my-8">
          <h1>Welcome to PaintX</h1>
          <p>A fusion of creativity and cutting-edge technology.</p>
          <p>Embrace the Future of Art & NFTs.</p>
        </div>
        <Carousel />
        <div className="flex w-full flex-col md:flex-row items-center justify-between mb-4 mt-8 md:items-end gap-y-4 md:gap-y-0">
          <div className="uppercase text-center md:text-left flex flex-col ">
            <p>PaintX NFT Genesis Collection</p>
            <p>Launching 19 Nov 2023</p>
          </div>
          <ScrollToIdButton id="collection">Collection</ScrollToIdButton>
        </div>
        <div className="mt-4 mb-8 self-start flex flex-col-reverse md:flex-row gap-y-4 md:gap-y-0 items-center md:justify-between w-full">
          <a className="btn" href="mailto:jodi@artistjodi.co.uk">
            Email me
          </a>
          <p>24 x 1/1</p>
        </div>
      </section>
      <Blockchain className="w-screen scale-200 sm:scale-150 md:scale-100" />
      <section className="my-4 md:my-12 text-center font-light relative gutter">
        {/* <BlendBackground className="top-28" /> */}
        <Image
          src={PaintXCollectionByArtistJodi}
          alt="paintx brand logo"
          width={300}
          className="my-10 mx-auto"
        />
        <h3 className="mb-8 font-medium text-xl">
          The original work - shipped to you.
        </h3>
        <p>Your journey begins as you unveil the curated gift box.</p>
        <p>
          The PaintX package comes with cotton gloves, ensuring the delicate
          handling required to cherish these artworks for generations to come.
          Each touch becomes a moment of connection, a tangible link to the
          artistic vision and craftsmanship behind each stroke.
        </p>
        <div className="justify-between flex flex-col-reverse md:flex-row my-12 w-full gap-4 items-center">
          <div className="text-center md:text-left">
            <p className="font-medium text-lg mb-4">What&apos;s in the box</p>
            <ul className="space-y-2">
              <li>
                Original Work on Canvas
                <br />
                <span className="text-xs">
                  (serial numbered and NFC* tagged)
                </span>
              </li>
              <li>Certificate with NFC tag</li>
              <li>Care information</li>
              <li>Hand embellished brochure</li>
              <p>Cotton gloves</p>
              <p>ArtLevel Hanging Kit and instructions</p>
            </ul>
            <Link href="/artlevel" className="btn mt-4">
              <Image src={ArtLevel} alt="Artlevel logo" width={150} />
            </Link>
          </div>
          <Image
            src={Packaging}
            alt="Example packaging"
            className="md:w-2/3 xl:w-3/5 md:pl-32"
          />
        </div>

        <h3 className="font-medium text-xl mb-2 mt-20">
          With 1/1 digital assets included in the box and via download from
          secure link
        </h3>
        <p className="mb-8">
          The 3D models can be used in the metaverse and beyond
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center md:h-64 gap-4">
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
            <p className="h-10 md:h-20 mt-4">Lower resolution jpeg</p>
          </div>

          <div className="h-full flex flex-col justify-end items-center">
            <Image
              className="justify-self-center"
              src={DigitalAsset3}
              alt="Painting in the box"
            />
            <div className="h-10 md:h-20 mt-4">
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
            <div className="h-10 md:h-20 mt-4">
              <p>Painting</p>
              <p>3D glb twin and USDZ AR</p>
            </div>
          </div>
        </div>
      </section>

      <section className="text-left my-6 md:my-12 relative gutter">
        {/* <BlendBackground className="top-48 md:-top-20" /> */}
        <h3 className="font-medium text-center text-xl mb-8">
          Connecting the physical and digital
        </h3>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="w-full md:w-1/3 space-y-4">
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
          <div className="w-full md:w-2/3 flex justify-end">
            <Image src={PhoneDiagram} alt="NFT diagrams 2" height={350} />
          </div>
          {/* <div className="flex justify-between flex-col md:flex-row grow w-full md:w-1/3 mt-4 md:mt-0">
            <Image
              src={ConnectingPhysicalAndDigital1}
              alt="NFT diagrams 1"
              className="hidden md:show"
              width={250}
            />
            <Image
              src={ConnectingPhysicalAndDigital2}
              alt="NFT diagrams 2"
              width={350}
            />
          </div> */}
        </div>
      </section>
      <Blockchain className="w-screen scale-200 sm:scale-150 md:scale-100" />

      {/* <section className="my-12 grid grid-cols-2 md:grid-cols-4 w-full gap-8 gutter">
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
      </section> */}

      <section className="my-6 md:my-12 relative overflow-y-visible gutter">
        {/* <BlendBackground className="top-48 md:-top-30" /> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-0">
          <div className="flex items-center justify-start flex-col md:items-start space-y-4 md:col-span-2">
            <Image src={ArtistJodi} alt="ArtistJodi" width={100} height={100} />
            <p className="text-lg font-medium">ArtistJodi</p>
            <div className="max-w-md flex flex-col text-center md:text-left">
              <p>
                Meet the artist behind the PaintX Genisis Collection. Each piece
                tells a story, evoking emotion and imagination. With a style
                ranging from smooth to heavily textured, digital and physical,
                no two ArtistJodi pieces are the same.
              </p>
              <Link
                href="https://artistjodi.com/aboutjodi"
                target="_blank"
                className="btn mt-8 self-center md:self-end"
              >
                About Jodi
              </Link>
            </div>
          </div>
          <div className="flex justify-start flex-col items-center md:items-start space-y-4 mt-8 md:mt-0">
            <Image
              src={QualityStatement}
              alt="Quality Statement badge"
              width={100}
              height={100}
            />
            <p className="text-lg font-medium">Quality Statement</p>
            <div className="text-center md:text-left">
              <p>
                The artwork has been created by Jodi in her studio, using the
                finest quality materials:
              </p>
              <div className="flex flex-col md:flex-row items-center gap-2 md:justify-between">
                <ul>
                  <li>100% cotton canvas</li>
                  <li>Pine stretcher bar</li>
                  <li>Primed with gesso</li>
                  <li>Acrylic</li>
                  <li>Mixed media</li>
                </ul>

                <Image
                  src={JodiSignature}
                  alt="Jodi Signature"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gutter" id="collection">
        <Image
          src={PaintXCollectionByArtistJodi}
          alt="paintx brand logo"
          width={300}
          className="my-20 mx-auto"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {ART_ITEMS.map(({ images, name, slug, href }) => (
            <div key={slug} className="relative">
              <Link href={`/${slug}`}>
                <Image src={images.main} alt={name} width={300} height={300} />
              </Link>
              <div className="absolute flex-col bottom-0 left-0 right-0 flex justify-center items-center">
                <p className="mb-3 font-normal text-white">{name}</p>
                <a
                  href={href}
                  target="_blank"
                  className="btn w-3/4 mb-6 sm:mb-2 2xl:mb-8"
                  rel="noopener noreferrer"
                >
                  Buy
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gutter w-full mt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full py-6 pb-8 border-t border-b border-gray-300 gap-8 md:gap-2">
          <div className="flex justify-center flex-col items-center md:items-start w-full h-full">
            <Image
              src={PaintXCollectionByArtistJodi}
              alt="paintx brand logo"
              width={250}
            />
            <Image src={ArtLevel} alt="Artlevel logo" width={150} />
          </div>
          <div className="flex justify-center items-center w-full h-full">
            <Link href="https://twitter.com/artist_jodi" target="_blank">
              <Image src={XLogo} alt="X logo" width={40} />
            </Link>
          </div>
          <div className="flex justify-center md:justify-end items-center w-full h-full">
            <Link href="https://artistjodi.com/" target="_blank">
              <Image
                src={JodiSignature}
                alt="Jodi Signature"
                width={100}
                height={100}
              />
            </Link>
          </div>
        </div>
      </section>
      <p className="w-full text-left text-xs text-gray-300 gutter mt-8">
        ©2023 ArtistJodi
      </p>
    </main>
  );
}
