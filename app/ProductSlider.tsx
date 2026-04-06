"use client";

import { useRef } from "react";

const PRODUCTS = [
  { name: "Business Website", img: "💻" },
  { name: "Landing Page", img: "📄" },
  { name: "Portfolio Site", img: "🖼️" },
  { name: "Startup Website", img: "🚀" },
  { name: "Ecommerce UI", img: "🛒" },
  { name: "SEO Setup", img: "🔍" },
  { name: "Web App UI", img: "📱" },
  { name: "Custom System", img: "⚙️" },
] as const;

export default function ProductSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 300;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative mt-8 w-full min-w-0">
      <button
        type="button"
        aria-label="Previous products"
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 
        flex items-center justify-center 
        w-10 h-10 
        rounded-full 
        bg-gray-200/70 backdrop-blur-md 
        text-gray-700 text-xl 
        shadow-sm 
        transition 
        hover:bg-gray-300 hover:scale-105 
        md:flex"
      >
        ‹
      </button>

      <button
        type="button"
        aria-label="Next products"
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 
        flex items-center justify-center 
        w-10 h-10 
        rounded-full 
        bg-gray-200/70 backdrop-blur-md 
        text-gray-700 text-xl 
        shadow-sm 
        transition 
        hover:bg-gray-300 hover:scale-105 
        md:flex"
      >
        ›        
      </button>

      <div
      ref={scrollRef}
      className="no-scrollbar -mx-4 flex w-full min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 sm:mx-0 sm:gap-6 sm:px-0 md:px-14"
    >
      {PRODUCTS.map((item, i) => (
        <div
          key={i}
          className="group flex w-[min(12rem,70vw)] shrink-0 snap-start flex-col items-center p-4 transition sm:w-[250px] sm:min-w-[250px] sm:p-6"
        >
          <div className="text-4xl transition duration-300 group-hover:scale-110">
            {item.img}
          </div>

          <p className="mt-3 text-center text-sm text-gray-600 group-hover:text-black">
            {item.name}
          </p>
        </div>
      ))}
    </div>
    </section>
  );
}
