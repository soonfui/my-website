"use client";

export default function BasicPage() {
  return (
    <div className="bg-[#f5f5f7] min-h-screen">

      {/* 🔥 HERO */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-16">

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* 左邊內容 */}
          <div>
            <p className="text-sm text-orange-500 font-medium">New</p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mt-2">
              Basic Website <br />
              for Modern Businesses
            </h1>

            <p className="text-2xl font-semibold text-green-600 mt-4">
              RM588 <span className="text-sm text-gray-500">(Promo)</span>
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/601133735676?text=Hi%20I%20want%20Basic%20Website"
              target="_blank"
              className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-green-600 transition"
            >
              Get Started →
            </a>

            {/* 小補充 */}
            <p className="mt-4 text-sm text-gray-500">
              Launch your website in days, not weeks.
            </p>
          </div>

          {/* 右邊圖片 */}
          <div className="flex justify-center">
            <img
              src="/basic.png"
              alt="website preview"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
            />
          </div>

        </div>
      </section>

      {/* 🔥 FEATURES */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-12 border-t">

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          What’s included
        </h2>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 text-gray-700">

          {[
            "Custom Design (Not Template)",
            "Domain + Hosting (1 Year)",
            "Copywriting + Development",
            "Clean Scalable Code",
            "Google SEO Setup",
            "WhatsApp Integration",
            "Google Map",
            "Fast Loading",
            "SSL Included",
            "Lifetime Technical Support",
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-green-500">✔</span>
              <span>{item}</span>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 PRODUCT INFO（Apple感） */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-12 border-t">

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Product Information
        </h2>

        <div className="mt-6 space-y-6 text-gray-700 max-w-3xl">

          <p>
            This website package is designed for businesses that want to launch
            fast with a professional online presence. Built with clean and
            scalable code, your website is ready for future expansion.
          </p>

          <p>
            With built-in SEO setup, fast loading speed, and mobile-first
            design, your site is optimized for performance and visibility from
            day one.
          </p>

          <p>
            Everything is handled for you — from design and copywriting to
            deployment and maintenance — so you can focus on growing your
            business.
          </p>

        </div>
      </section>

      {/* 🔥 CTA */}
      <section className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Ready to launch your website?
        </h2>

        <a
          href="https://wa.me/601133735676?text=Hi%20I%20want%20Basic%20Website"
          target="_blank"
          className="inline-block mt-6 bg-green-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-600 transition"
        >
          Get Started via WhatsApp
        </a>

      </section>

          {/* FOOTER */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2026 MagmaNet • Web Developer Malaysia
      </footer>
    </div>

    
    
  );

}