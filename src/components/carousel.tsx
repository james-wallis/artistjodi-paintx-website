"use client";

import { ART_ITEMS } from "@/art";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, useEffect, useRef, useState } from "react";

interface CarouselItem {
  image: StaticImport;
  alt: string;
  href: string;
}

const CarouselItem = forwardRef<HTMLDivElement, CarouselItem>(
  ({ image, alt, href }, ref) => {
    return (
      <div
        ref={ref}
        className={`snap-start mx-1
    w-1/2 min-w-[calc(50%-0.3rem)] max-w-[calc(50%-0.3rem)]
    md:mx-2 md:w-1/3 md:min-w-[calc(33.333333%-0.65rem)] md:max-w-[calc(33.333333%-0.65rem)]
    lg:mx-0 lg:w-1/4 lg:min-w-[calc(25%-0.95rem)] lg:max-w-[calc(25%-0.95rem)]
`}
      >
        <Link href={href}>
          <Image src={image} alt={alt} width={300} height={300} />
        </Link>
      </div>
    );
  },
);
CarouselItem.displayName = "CarouselItem";

export const Carousel = () => {
  const [{ numPages, activePage, itemsInPage }, setActivePage] = useState({
    numPages: 6,
    activePage: 0,
    itemsInPage: 4,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const firstCarouselItemRef = useRef<HTMLDivElement>(null);

  const itemWidth = firstCarouselItemRef.current?.offsetWidth;

  const calculateActivePage = () => {
    const numberOfItems = ART_ITEMS.length;

    const itemWidth = firstCarouselItemRef.current?.offsetWidth;

    if (!containerRef.current || !itemWidth) {
      setActivePage({
        numPages: 6,
        activePage: 0,
        itemsInPage: 4,
      });
      return;
    }

    const containerWidth = containerRef.current?.offsetWidth;
    const itemsInPage = Math.round(containerWidth / itemWidth);

    const activePage = Math.round(
      containerRef.current.scrollLeft / itemWidth / itemsInPage,
    );

    const numPages = numberOfItems / itemsInPage;

    setActivePage({
      numPages,
      activePage,
      itemsInPage,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", calculateActivePage);
    // Call handler right away so state gets updated with initial window size
    calculateActivePage();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", calculateActivePage);
  }, []);

  return (
    <div className="my-2 md:my-4">
      <div
        ref={containerRef}
        onScroll={() => calculateActivePage()}
        className={`flex overflow-scroll w-full snap-x snap-mandatory scroll-smooth
     flex-row overflow-x-auto
            hide-scrollbar
            lg:gap-5`}
      >
        {ART_ITEMS.map(({ images, name, slug }, index) => (
          <CarouselItem
            ref={index === 0 ? firstCarouselItemRef : null}
            key={slug}
            image={images.main}
            alt={name}
            href={`/${slug}`}
          />
        ))}
      </div>
      <div className="w-full sm:-mt-8 lg:-mt-14 flex justify-center items-center">
        {[...Array(numPages || 6)].map((_, i) => (
          <button
            className="p-1 md:p-2"
            key={`indicator-${i}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();

              if (!itemWidth) return;

              const newScrollPosition = i * itemsInPage * itemWidth;
              containerRef.current?.scrollTo({
                left: newScrollPosition,
                behavior: "smooth",
              });
            }}
          >
            <span
              className={clsx(
                "w-2 h-2 md:h-3 md:w-3 rounded-full block transition-colors",
                activePage === i ? "bg-white" : "bg-gray-500",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
