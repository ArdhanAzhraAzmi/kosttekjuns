"use client";

import Image from "next/image";

export default function KamarList({ kamar }: { kamar: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {kamar.map((k) => (
        <div
          key={k.id}
          className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
          onClick={() => alert(`Kamu memilih ${k.nama}`)}
        >
          {k.gambar && (
            <Image
              src={k.gambar}
              alt={k.nama}
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
          )}
          <div className="p-4">
            <h3 className="text-lg font-semibold text-indigo-700 mb-1">
              {k.nama}
            </h3>
            <p className="text-gray-600 mb-2">
              Harga: Rp {new Intl.NumberFormat("id-ID").format(k.harga)}
            </p>
            {k.fasilitas && (
              <ul className="mb-2 flex flex-wrap gap-2 text-sm">
                {k.fasilitas.map((item: string, i: number) => (
                  <li
                    key={i}
                    className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            <p
              className={`text-sm font-semibold ${
                k.tersedia ? "text-green-600" : "text-red-600"
              }`}
            >
              {k.tersedia ? "Tersedia" : "Tidak Tersedia"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
