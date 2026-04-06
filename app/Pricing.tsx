"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";

export default function Pricing() {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
  const el = scrollRef.current;
  if (!el) return;

  el.scrollBy({
    left: dir === "left" ? -400 : 400,
    behavior: "smooth",
  });
};

  const plans = [
    {
      name: "Basic",
      price: "RM588",
      tag: "Promo",
      image: "/basic.png",
      available: true,
      path: "/pricing/basic",
      features: [
        "1-page website",
        "Domain + Hosting (1 year)",
        "Design + Copywriting + Development",
        "SEO Setup",
      ],
    },
    {
      name: "Standard",
      price: "Coming Soon",
      image: "/standard.png",
      available: false,
      features: [],
    },
    {
      name: "Pro",
      price: "Coming Soon",
      image: "/pro.png",
      available: false,
      features: [],
    },
  ];

  useEffect(() => {
  const el = scrollRef.current;
  if (!el) return;

  const handleScroll = () => {
    const { scrollLeft, scrollWidth, clientWidth } = el;

    setShowLeft(scrollLeft > 10);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  handleScroll();
  el.addEventListener("scroll", handleScroll);

  return () => el.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section id="pricing" className="mt-20 fade-up relative">

      {/* ✅ 標題（完全對齊 WorkSection） */}
      <div className=" max-w-3xl lg:max-w-none text-left px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-3xl lg:max-w-none">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
            <span className="text-black">Simple Pricing. </span>
            <span className="text-gray-500">
              Everything you need to launch your business online — fast, clean, and scalable.
            </span>
          </h2>
        </div>
      </div>

      {/* ✅ 卡片區（對齊 slider spacing） */}
      <div ref={scrollRef} className="mt-10 flex gap-4 sm:gap-6 lg:gap-10 overflow-x-auto no-scrollbar scroll-smooth px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        {plans.map((plan, index) => (
          <div
            key={index}
            onClick={() => {
              if (plan.available && plan.path) {
                router.push(plan.path);
              }
            }}
            className={`group 
              w-[260px] 
              sm:w-[280px] 
              md:w-[320px] 
              lg:w-[420px] 
              xl:w-[480px]
              shrink-0 
              rounded-2xl 
              bg-white 
              shadow-md 
              transition 
              hover:shadow-2xl 
              overflow-hidden 
              ${
                plan.available
                  ? "cursor-pointer"
                  : "opacity-60 cursor-not-allowed"
              }`}
          >

            {/* 🖼 Image（統一比例） */}
            <div className="relative">
              <img
                src={plan.image}
                alt={plan.name}
                className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover transition group-hover:scale-105"
              />

              {/* gradient（Apple感） */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

              {/* Tag */}
              {plan.tag && (
                <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                  {plan.tag}
                </span>
              )}
            </div>

            {/* 📦 Content */}
            <div className="p-4 sm:p-6">

              <h3 className="text-base sm:text-lg md:text-xl font-semibold tracking-tight">
                {plan.name}
              </h3>

              <p className="mt-1 text-lg sm:text-xl font-semibold tracking-tight">
                {plan.price}
              </p>

              {/* features */}
              {plan.available && (
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
              )}

              {/* CTA */}
              <div className="mt-4">
                {plan.available ? (
                  <span className="text-sm font-medium text-blue-600 group-hover:underline">
                    View Details ↗
                  </span>
                ) : (
                  <span className="text-sm text-gray-400">
                    Coming Soon
                  </span>
                )}
              </div>

            </div>
          </div>
        ))}
        

      </div>
      {/* 左箭頭 */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 top-1/2 hidden md:flex -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow hover:bg-white transition"
        >
          ‹
        </button>
      )}

      {/* 右箭頭 */}
      {showRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-6 top-1/2 hidden md:flex -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur-md shadow hover:bg-white transition"
        >
          ›
        </button>
      )}
    

    </section>

    
  );
}