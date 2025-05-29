import { rumahList } from "@/data/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import KamarList from "@/components/KamarList";

export default async function RumahDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const rumah = rumahList.find((r) => r.id === id);

  if (!rumah) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 font-satoshi">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">{rumah.nama}</h1>
      <p className="text-gray-700 mb-6">{rumah.alamat}</p>

      {rumah.gambar && (
        <div className="mb-6">
          <Image
            src={rumah.gambar}
            alt={rumah.nama}
            width={800}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
      )}

      <a
        href={rumah.gmaps}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg mb-8 hover:bg-indigo-700 transition"
      >
        Lihat di Google Maps
      </a>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        Daftar Kamar
      </h2>

      {/* Interaktif: Client Component */}
      <KamarList kamar={rumah.kamar} />
    </div>
  );
}
