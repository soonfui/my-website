"use client";

import { useRef, useState, useEffect } from "react";

function publicAsset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}

type WorkItem = {
  image: string;
  dark: boolean;
  category: string;
  title: string;
  description: string;
  url?: string;
};

const WORK_ITEMS: WorkItem[] = [
  {
    image: "/client/trenta.png",
    dark: true,
    category: "Corporate Website",
    title: "Trenta Event & Media Website",
    description:
      "Designed and developed a premium website for Trenta to showcase event production, advertising, lighting and sound services.",
     url: "https://trenta.my",
    },
  {
    image: "/peak.png",
    dark: false,
    category: "Portfolio Website",
    title: "Personal Brand Website",
    description:
      "Designed a clean portfolio to showcase services and attract clients.",
  },
  {
    image: "/dash.png",
    dark: false,
    category: "Startup Website",
    title: "SaaS Landing Page",
    description:
      "Built a modern landing page focused on conversions and speed.",
  },
  {
    image: "/heandshe.png",
    dark: true,
    category: "Business Website",
    title: "Restaurant Landing Page",
    description:
      "Built a fast-loading website to help a local restaurant get more customers.",
  },
  // {
  //   image: "/peak.png",
  //   dark: false,
  //   category: "Portfolio Website",
  //   title: "Personal Brand Website",
  //   description:
  //     "Designed a clean portfolio to showcase services and attract clients.",
  // },
  // {
  //   image: "/heandshe.png",
  //   dark: true,
  //   category: "Business Website",
  //   title: "Restaurant Landing Page",
  //   description:
  //     "Built a fast-loading website to help a local restaurant get more customers.",
  // },
  // {
  //   image: "/peak.png",
  //   dark: false,
  //   category: "Portfolio Website",
  //   title: "Personal Brand Website",
  //   description:
  //     "Designed a clean portfolio to showcase services and attract clients.",
  // },
  // {
  //   image: "/dash.png",
  //   dark: false,
  //   category: "Startup Website",
  //   title: "SaaS Landing Page",
  //   description:
  //     "Built a modern landing page focused on conversions and speed.",
  // },
  // {
  //   image: "/heandshe.png",
  //   dark: true,
  //   category: "Business Website",
  //   title: "Restaurant Landing Page",
  //   description:
  //     "Built a fast-loading website to help a local restaurant get more customers.",
  // },
  // {
  //   image: "/peak.png",
  //   dark: false,
  //   category: "Portfolio Website",
  //   title: "Personal Brand Website",
  //   description:
  //     "Designed a clean portfolio to showcase services and attract clients.",
  // },
] as const;

export default function WorkSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = 400;
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !el.parentElement) return;
  
    const computed = window.getComputedStyle(el.parentElement);
    const paddingLeft = parseInt(computed.paddingLeft, 10);
  
    el.scrollLeft = paddingLeft;
  
    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;
  
      setShowLeft(scrollLeft > paddingLeft + 5);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
    };
  
    handleScroll();
    el.addEventListener("scroll", handleScroll);
  
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
   <section className="mt-20 fade-up relative">

      {/* 標題 */}
      <div className="max-w-3xl lg:max-w-none text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-3xl  lg:max-w-none">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
            <span className="text-black">Our Work. </span>
            <span className="text-gray-500">
              Real projects built for real businesses.
            </span>
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="mt-10 flex gap-4 sm:gap-6 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40"
      >
        {WORK_ITEMS.map((item, i) => {
          const Card = (
            <div
              className="
              group
              w-[240px]
              sm:w-[260px]
              md:w-[320px]
              lg:w-[520px]
              xl:w-[580px]
              shrink-0 overflow-hidden rounded-2xl bg-white shadow-md transition hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              <img
                src={publicAsset(item.image)}
                className={`h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full object-cover transition group-hover:scale-105 ${
                  item.dark ? "brightness-90" : ""
                }`}
              />

              <div className={`p-4 sm:p-6 ${item.dark ? "bg-black text-white" : ""}`}>
                <p
                  className={`text-xs uppercase ${
                    item.dark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.category}
                </p>

                <h3 className="mt-2 text-base sm:text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>

                <p
                  className={`mt-2 text-sm md:text-base ${
                    item.dark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          );

            return item.url ? (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                {Card}
              </a>
            ) : (
              <div key={i}>{Card}</div>
            );
      })}
      </div>

      {/* 左箭頭 */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-[65%] hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/70 backdrop-blur-md hover:bg-gray-300 transition"
        >
          ‹
        </button>
      )}

      {/* 右箭頭 */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-[65%] hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/70 backdrop-blur-md hover:bg-gray-300 transition"
        >
          ›
        </button>
      )}

    </section>
  );
}
