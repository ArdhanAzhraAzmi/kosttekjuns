export interface Kamar {
  id: number;
  nama: string;
  harga: number;
  gambar?: string;
  fasilitas?: string[];
  tersedia: boolean;
}

export interface Rumah {
  id: number;
  nama: string;
  alamat: string;
  gambar?: string;
  fasilitas?: string[];
  kamar: Kamar[];
  gmaps: string;
}

export const rumahList: Rumah[] = [
  {
    id: 1,
    nama: "Kost Belut 1",
    alamat:
      "Jl. Belut 4 No.237, RT.003/RW.006, Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144",
    gambar:
      "https://res.cloudinary.com/djqireuls/image/upload/thumbnail2_qq5gme",
    fasilitas: ["WiFi", "AC", "Kamar Mandi Dalam"],
    gmaps: "https://maps.app.goo.gl/P3nZLkv5f1RzSqML7",
    kamar: [
      {
        id: 1,
        nama: "Kamar A",
        harga: 750000,
        gambar: "",
        fasilitas: ["AC"],
        tersedia: true,
      },
      {
        id: 2,
        nama: "Kamar B",
        harga: 850000,
        gambar: "",
        fasilitas: ["ExhaustFan"],
        tersedia: false,
      },
    ],
  },
  {
    id: 2,
    nama: "Rumah Kost Lele 1",
    alamat:
      "Jl. Lele 1 No.400, RT.001/RW.005, Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144",
    gambar:
      "https://res.cloudinary.com/djqireuls/image/upload/thumbnail2_qq5gme",
    fasilitas: ["AC", "Exhaust Fan"],
    gmaps: "https://maps.app.goo.gl/ittXm2ZKNoyNevUw5",
    kamar: [
      {
        id: 1,
        nama: "Kamar A",
        harga: 750000,
        gambar: "",
        fasilitas: ["WiFi", "AC"],
        tersedia: true,
      },
      {
        id: 2,
        nama: "Kamar B",
        harga: 850000,
        gambar: "",
        fasilitas: ["AC"],
        tersedia: false,
      },
    ],
  },
  {
    id: 3,
    nama: "Rumah Kost Lele 4",
    alamat:
      "Jl. Lele 4 No.353, RT.003/RW.005, Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144",
    gambar:
      "https://res.cloudinary.com/djqireuls/image/upload/thumbnail_kxrfdr",
    fasilitas: ["AC", "Exhaust Fan"],
    gmaps: "https://maps.app.goo.gl/bu89maHeComqd5xM6",
    kamar: [
      {
        id: 1,
        nama: "Kamar A",
        harga: 750000,
        gambar: "",
        fasilitas: ["WiFi", "AC"],
        tersedia: true,
      },
      {
        id: 2,
        nama: "Kamar B",
        harga: 850000,
        gambar: "",
        fasilitas: ["AC"],
        tersedia: false,
      },
    ],
  },
];
