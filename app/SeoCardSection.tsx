"use client";

import { useEffect, useRef, useState } from "react";

type SeoBlock = {
  title: string;
  paragraphs: string[];
};

export default function SeoCtaSection({
  seoBlocks,
}: {
  seoBlocks: SeoBlock[];
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -440 : 440,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const PADDING = 24;

    el.scrollLeft = 0;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = el;

      setShowLeft(scrollLeft > PADDING + 5);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
    };

    handleScroll();
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mt-20 fade-up relative">

      {/* ✅ 标题（100% 对齐 Pricing） */}
      <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">
        <div className="max-w-3xl  text-left">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
            <span className="text-black">Website Services. </span>
            <span className="text-gray-500">
              SEO-focused, conversion-driven.
            </span>
          </h2>
        </div>
      </div>

      {/* ✅ Slider（spacing 完全一致） */}
      <div
        ref={scrollRef}
        className="
          mt-10
          flex gap-4 sm:gap-6 lg:gap-10
          overflow-x-auto no-scrollbar scroll-smooth
          px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40
        "
      >

        {/* 🔥 CTA（宽度完全对齐 Pricing） */}
        <div className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[420px] xl:w-[480px] shrink-0 flex">

          <div className="relative w-full h-full">
            <div className="rounded-2xl bg-white shadow-xl p-8 border border-gray-100 h-full flex flex-col justify-between">

              <div>
                <h3 className="text-xl font-semibold text-black">
                  Build a High-Converting Website 🚀
                </h3>

                <p className="mt-2 text-gray-500 text-sm">
                  Modern, fast, and SEO-ready websites that help you get more customers.
                </p>

                <div className="mt-6 text-sm text-gray-500 space-y-2">
                  <p>⚡ Fast delivery (3–7 days)</p>
                  <p>📱 Fully mobile optimized</p>
                  <p>🎯 Built for conversions</p>
                </div>
              </div>

              {/* CTA 固定底部 */}
              <div>
                <a
                  href="https://wa.me/601133735676"
                  target="_blank"
                  className="block mt-6 text-center bg-green-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                  💬 Chat on WhatsApp
                </a>

                <p className="mt-4 text-xs text-gray-500 text-center">
                  ⚡ Usually reply within minutes
                </p>
              </div>
            </div>

            {/* glow */}
            <div className="absolute -inset-2 -z-10 rounded-2xl bg-green-100 blur-xl opacity-40"></div>
          </div>
        </div>

        {/* 🔹 SEO Blocks */}
        {seoBlocks.map((block, i) => (
          <div
            key={i}
            className="w-[260px] sm:w-[280px] md:w-[320px] lg:w-[420px] xl:w-[480px] shrink-0 flex"
          >
            <div
              className="
                w-full h-full
                rounded-2xl
                bg-gray-50/70
                backdrop-blur-sm
                p-6 md:p-8
                hover:bg-gray-100
                transition
                flex flex-col
              "
            >
              <h2 className="text-2xl font-semibold text-black leading-snug">
                {block.title}
              </h2>

              <div className="mt-4 space-y-4 text-sm text-gray-600 leading-relaxed">
                {block.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* 左箭头 */}
      {showLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-[65%] hidden md:flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-200/70 backdrop-blur-md hover:bg-gray-300 transition"
        >
          ‹
        </button>
      )}

      {/* 右箭头 */}
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