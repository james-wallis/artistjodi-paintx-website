import { ART_ITEMS } from "@/art";
import Image from "next/image";
import { notFound } from "next/navigation";

import LogoTag from "@/assets/Logo-tag.png";

export default function Page({ params }: { params: { slug: string } }) {
  const item = ART_ITEMS.find(({ slug }) => slug === params.slug);

  if (!item) {
    notFound();
  }

  const { name, images, description, id } = item;

  return (
    <main className="max-w-2xl mx-auto mb-10 mt-16 md:mt-6 relative overflow-x-hidden">
      <Image
        src={LogoTag}
        alt="ArtistJodi logo tag"
        className="absolute -top-6 right-4"
        width={120}
      />
      <Image src={images.main} alt={name} />
      <section className="grid w-full -mt-40 md:-mt-80 items-center grid-cols-1 md:grid-cols-2 px-4 md:px-0 gap-4">
        <div className="w-full text-center md:text-left">
          <h1 className="text-4xl mb-2 text-white">{name}</h1>
          <h2 className="text-3xl mb-4">#{id}</h2>
          <p className="text-xl mb-4">30cm x 30cm x 3cm</p>
          <p>{description}</p>
        </div>
        <div className="w-72 md:w-full relative h-96 md:h-full mx-auto">
          <Image
            src={images.main}
            alt={`${name} small`}
            width={250}
            height={250}
            className="absolute top-0 right-0"
          />
          <Image
            src={images.main}
            alt={`${name} mid`}
            width={120}
            height={120}
            className="absolute bottom-0 left-0"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-end text-center w-full h-full gap-4 md:gap-0">
        <div className="flex flex-col w-full h-64 relative">
          <div className="relative w-full h-full flex justify-center">
            <Image
              src={images.other3}
              alt={`${name} boxed with gloves`}
              width={350}
              className="mx-auto"
            />
          </div>
          <p>Physical Boxed Original</p>
        </div>
        <div className="flex flex-col relative h-64 w-full">
          <div className="relative w-full h-full flex items-center justify-end">
            <Image
              src={images.other2}
              alt={`${name} angled`}
              width={350}
              className="z-[0]"
            />
          </div>
          <p>3D Digital twins metaverse and AR Ready</p>
        </div>
      </section>
      <section className="text-center my-10 md:my-12 text-sm px-2 md:px-0">
        <p>{`"${name}" original work was painted June 2023 by ArtistJodi in the
        United Kingdom`}</p>
        <p>© All rights reserved</p>
      </section>
    </main>
  );
}

export async function generateStaticParams() {
  return ART_ITEMS.map(({ slug }) => ({
    slug,
  }));
}
