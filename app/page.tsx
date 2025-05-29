"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { rumahList, Rumah } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // 👉 INI bagian yang kamu maksud
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-indigo-50 font-satoshi">
        <div className="text-center">
          <Image
            src="/logo112.png"
            alt="Loading..."
            width={500}
            height={500}
            className="mx-auto animate-pulse"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-50 to-purple-50 py-16 font-satoshi">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-wide">
            Cari Rumah Kost <br /> dengan Mudah dan Cepat
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Temukan pilihan rumah kost terbaik yang nyaman dan terjangkau sesuai
            kebutuhanmu.
          </p>
        </div>
      </header>

      {/* Fasilitas Unggulan */}
      <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-40 font-satoshi">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 leading-tight mb-6 tracking-wide">
            Fasilitas Unggulan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <span className="text-4xl">❄️</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">AC Dingin</h3>
              <p className="text-gray-600 text-sm">
                Kamar dilengkapi AC untuk kenyamanan maksimal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <span className="text-4xl">🌀</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">Exhaust Fan</h3>
              <p className="text-gray-600 text-sm">
                Sirkulasi udara lancar dan ruangan tetap segar setiap saat.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <span className="text-4xl">🛁</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Kamar Mandi Dalam
              </h3>
              <p className="text-gray-600 text-sm">
                Privasi terjaga dengan fasilitas pribadi.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <span className="text-4xl">🛏️</span>
              <h3 className="text-xl font-semibold mt-4 mb-2">
                Tempat Tidur Nyaman
              </h3>
              <p className="text-gray-600 text-sm">
                Kasur empuk dan bersih untuk tidur nyenyak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* List Rumah Kost - Cards */}
      <main className="max-w-7xl mx-auto px-8 py-16 bg-gradient-to-r from-indigo-50 to-purple-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 font-satoshi">
        {rumahList.map((rumah: Rumah) => (
          <Link
            key={rumah.id}
            href={`/rumah/${rumah.id}`}
            className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer"
            data-aos="fade-up"
          >
            {rumah.gambar && (
              <div className="w-full h-48 relative rounded-t-2xl overflow-hidden">
                <Image
                  src={rumah.gambar}
                  alt={rumah.nama}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-2 truncate">
                {rumah.nama}
              </h2>
              <p className="text-gray-500 mb-4 line-clamp-2">{rumah.alamat}</p>

              {rumah.fasilitas && (
                <ul className="mb-4 flex flex-wrap gap-2">
                  {rumah.fasilitas.map((fasilitas, index) => (
                    <li
                      key={index}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold"
                    >
                      {fasilitas}
                    </li>
                  ))}
                </ul>
              )}

              <div className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                {rumah.kamar.length} Kamar Tersedia
              </div>
            </div>
          </Link>
        ))}
      </main>
    </>
  );
}
