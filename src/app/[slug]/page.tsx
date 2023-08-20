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
    <main className="max-w-2xl mx-auto mb-20 mt-16 md:mt-6 relative">
      <Image
        src={LogoTag}
        alt="ArtistJodi logo tag"
        className="absolute -top-8 right-4"
        width={150}
      />
      <Image src={images.main} alt={name} height={1000} />
      <section className="flex w-full -mt-40 md:-mt-80 items-center flex-col md:flex-row px-2 md:px-0">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl mb-2 text-white">{name}</h1>
          <h2 className="text-3xl mb-4">#{id}</h2>
          <p className="text-xl mb-4">30cm x 30cm x 3cm</p>
          <p>{description}</p>
        </div>
        <div className="w-full md:w-1/2">
          <Image src={images.other2} alt={`${name} small`} width={400} />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 justify-center items-end text-center w-full">
        <div className="flex flex-col">
          <Image src={images.other3} alt={`${name} boxed original`} />
          <p>Physical Boxed Original</p>
        </div>
        <div className="flex flex-col">
          <Image src={images.other1} alt={`${name} metaverse and AR ready`} />
          <p>3D Digital twins metaverse and AR Ready</p>
        </div>
      </section>
      <section className="text-center my-20 text-sm px-2 md:px-0">
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
