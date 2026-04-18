"use client";
import Image from "next/image";

import ProductSlider from "./compenents/ProductSlider";
import WorkSlider from "./compenents/WorkSlider";
import Pricing from "./compenents/Pricing";
import SeoCtaSection from "./compenents/SeoCardSection";

/** 靜態匯出時 next/image 與原生 img 不會自動加 basePath，需與 next.config 一致 */
function publicAsset(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const p = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${p}` : p;
}

export default function Home() {
  return (
    <main className="relative w-full  overflow-x-hidden bg-[#F5F5F7] ">
        <div className="gradient-bg">
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
        </div>

      {/* 👤 HERO */}
      <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">

          {/* 左 */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
            MagmaNet
          </h1>

          {/* 右 */}
          <div className="mt-6 md:mt-0 text-left md:text-right max-w-md">
            <p className="text-lg md:text-xl font-medium text-gray-800">
              Powering Digital Systems.
            </p>

            <p className="text-gray-500 mt-1">
              built on power, driven by code
            </p>

            <div className="mt-4 space-y-2">
              <a
                href="https://wa.me/601133735676"
                target="_blank"
                className="block text-blue-600 hover:underline"
              >
                Connect with a Specialist ↗
              </a>

              <a
                href="#pricing"
                className="block text-blue-600 hover:underline"
              >
                View Products ↗
              </a>
            </div>
          </div>

        </section>

              

      {/* ⭐ TRUST BAR */}
      <section className="mt-20  fade-up ">
        <div className=" px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">

        <div className="max-w-3xl lg:max-w-none text-left">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-snug">
                <span className="text-black">   Our Products. </span>
                <span className="text-gray-500">
                  Explore what we build for modern businesses.
                </span>
              </h2>
              </div>
              </div>
      </section>

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">
      <section className="mt-10 fade-up">
              <ProductSlider />
      </section>
      </div>
      <WorkSlider />
      
      

      {/* 💰 PRICING */}
      <Pricing />

      {/* 💎 主內容 */}
    <SeoCtaSection
  seoBlocks={[
    {
      title: "Website Developer Malaysia",
      paragraphs: [
        "As a freelance web developer in Malaysia, I help businesses create professional websites that attract customers online.",
        "Whether you need a landing page, company profile, or personal website, I can build a fast and responsive solution.",
        "My websites are optimized for SEO, mobile-friendly, and designed to convert visitors into customers.",
      ],
    },

    // ✅ 未来可以一直加
    {
      title: "Freelance Web Designer Malaysia",
      paragraphs: [
        "I design modern and clean websites tailored to your brand.",
        "Every design is focused on user experience and conversions.",
      ],
    },
  ]}
/>

      <section className="mt-24 fade-up">
  <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">

    
    
    <div className="mt-12 border-t border-gray-200 pt-8"></div>

    {/* 📄 TERMS */}
    <div className="inline-block mt-12 max-w-3xl text-left space-y-4 text-sm text-gray-500 leading-relaxed">

      {/* 小標題 */}
      <p className="text-xs uppercase text-gray-400 tracking-wide">
        Terms & Details
      </p>

      <p>
        Prices shown are estimates and may vary depending on project scope,
        features, and customization requirements. Final pricing will be confirmed
        before project start.
      </p>

      <p>
        Timeline typically ranges from 3–7 days depending on project complexity.
        Delays may occur if required content or materials are not provided on time.
      </p>

      <p>
        All websites include basic SEO setup and mobile optimization. Advanced SEO,
        integrations, or custom systems may require additional fees.
      </p>

      <p>
        Domain and hosting (if included) are provided for 1 year unless otherwise
        stated. Renewal fees will apply after the first year.
      </p>

      <p>
        By proceeding with the service, you agree to our working process,
        communication via WhatsApp, and delivery timeline.
      </p>

    </div>

  </div>

  
  {/* 📌 FOOTER */}
  <footer className="mt-16 pt-6 text-sm text-gray-500">
    
  <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">
    
      <p className="text-xs text-gray-400 mb-4">
      Need help? Chat with us on WhatsApp for quick support.
    </p>
    </div>

    <div className="border-t border-gray-200"></div>
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40">
    {/* 🔹 上排（法律 + links） */}
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* 左邊 */}
      <p>
        © 2026 MagmaNet. All rights reserved.
      </p>

      {/* 中間 links */}
      <div className="flex flex-wrap gap-4">

        <a href="#" className="hover:underline">
          Privacy Policy
        </a>

        <a href="#" className="hover:underline">
          Terms of Use
        </a>

        <a href="#" className="hover:underline">
          Services
        </a>

        <a href="#" className="hover:underline">
          Contact
        </a>

      </div>

      {/* 右邊 */}
      <p className="text-gray-400">
        Malaysia
      </p>

    </div>

  </div>

</footer>
</section>

      {/* 💬 FLOATING BUTTON */}
      <a
        href="https://wa.me/601133735676"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>
    </main>
  );
}