
"use client";

import useReveal from "./hooks/useReveal"; // follow my path
export default function Home() {
    useReveal(); 
  return (
    <main className="relative px-4 sm:px-6 lg:px-8 py-12 max-w-6xl mx-auto bg-gradient-to-b from-white via-gray-50 to-gray-200">
        <div className="gradient-bg">
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
        </div>

      {/* 👤 HERO */}
      <section className="text-center fade-up">
        <img
          src="/profile.jpeg"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto shadow-lg"
        />

        <h1 className="text-3xl md:text-5xl font-bold mt-6 leading-tight">
          Build a High-Converting Website <br />
          for Your Business 🚀
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Modern, fast, and SEO-ready websites that help you get more customers.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/601133735676"
            target="_blank"
            className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold 
            shadow-md transition duration-300 
            hover:bg-green-600 hover:shadow-xl hover:scale-105 
            active:scale-95"
          >
            💬 WhatsApp Now
          </a>

        
          <a
            href="#pricing"
            className="px-6 py-3 rounded-xl border 
            bg--gray-100 text-black px-6 py-3 rounded-xl font-semibold 
            shadow-md transition duration-300 
            hover:bg-green-600 hover:shadow-xl hover:scale-105 
            active:scale-95"
          >
            View Pricing
          </a>
        </div>
      </section>

      {/* ⭐ TRUST BAR */}
      <section className="mt-16 text-center fade-up">
        <p className="text-gray-500">Trusted by small businesses</p>
      </section>

      {/* 💎 FEATURES */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
        {[
          "⚡ Fast Loading Website",
          "📱 Mobile Optimized",
          "🔍 SEO Ready",
          "💬 WhatsApp Integration",
          "🎯 Conversion Focused Design",
          "🚀 Launch in Days",
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-2xl hover:-translate-y-2 transition"
          >
            {item}
          </div>
        ))}
      </section>

      {/* 🖼️ PORTFOLIO */}
      <section className="mt-20 fade-up">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Recent Work
        </h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["/selfie.jpg", "/selfie.jpg", "/selfie.jpg"].map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl shadow hover:shadow-xl transition"
            >
              <img
                src={src}
                className="w-full h-52 object-cover hover:scale-105 transition"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ⭐ TESTIMONIAL */}
      <section className="mt-20 fade-up">
        <h2 className="text-2xl font-semibold text-center">
          What Clients Say
        </h2>

        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-2xl shadow-md 
            transition duration-300 
            hover:shadow-2xl hover:-translate-y-2">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              “Super fast delivery and very professional design!”
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-md 
            transition duration-300 
            hover:shadow-2xl hover:-translate-y-2">
            ⭐⭐⭐⭐⭐
            <p className="mt-3">
              “Got more customers after launching my website.”
            </p>
          </div>
        </div>
      </section>

      {/* 💰 PRICING */}
      <section id="pricing" className="mt-20 text-center fade-up">
        <h2 className="text-3xl font-bold">Simple Pricing</h2>

        <div className="mt-10 max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition">
          <h3 className="text-xl font-semibold">Basic Website</h3>

          <p className="text-4xl font-bold mt-4">RM399</p>

          <ul className="mt-6 space-y-3 text-left">
            <li>✅ 1-page website</li>
            <li>✅ Mobile responsive</li>
            <li>✅ WhatsApp button</li>
            <li>✅ SEO basic setup</li>
            <li>✅ Fast loading</li>
          </ul>

          <a
            href="https://wa.me/601133735676?text=Hi%20I%20want%20website"
            target="_blank"
            className="block mt-6 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* 🚀 FINAL CTA */}
      <section className="mt-24 bg-green-500 text-white text-center p-12 rounded-2xl fade-up">
        <h2 className="text-3xl font-bold">
          Ready to Grow Your Business? 🚀
        </h2>

        <p className="mt-4">
          Get your website live in just a few days.
        </p>

        <a
          href="https://wa.me/601133735676"
          target="_blank"
          className="inline-block mt-6 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          💬 Chat on WhatsApp
        </a>
      </section>

      {/* 💬 FLOATING BUTTON */}
      <a
        href="https://wa.me/601133735676"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 transition z-50"
      >
        💬
      </a>

      {/* FOOTER */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2026 MagmaNet • Web Developer Malaysia
      </footer>
    </main>
  );
}