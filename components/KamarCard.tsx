import Image from "next/image";

interface KamarCardProps {
  nama: string;
  harga: number;
  gambar?: string;
  fasilitas?: string[];
  tersedia: boolean;
}

export default function KamarCard({
  nama,
  harga,
  gambar,
  fasilitas = [],
  tersedia,
}: KamarCardProps) {
  return (
    <div className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 cursor-pointer max-w-sm">
      {gambar && (
        <div className="w-full h-48 relative rounded-t-2xl overflow-hidden">
          <Image
            src={gambar}
            alt={nama}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-indigo-700 mb-2 truncate">
          {nama}
        </h3>

        <p className="text-gray-600 mb-4 font-semibold">
          Harga: Rp {harga.toLocaleString()}
        </p>

        {fasilitas.length > 0 && (
          <ul className="mb-4 flex flex-wrap gap-2">
            {fasilitas.map((f, idx) => (
              <li
                key={idx}
                className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold"
              >
                {f}
              </li>
            ))}
          </ul>
        )}

        <div
          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
            tersedia ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {tersedia ? "Tersedia" : "Tidak Tersedia"}
        </div>
      </div>
    </div>
  );
}
