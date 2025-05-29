// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-white text-center py-8 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Kost TekJun. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Dibuat dengan ❤️ oleh Tim Kost TekJun
        </p>
      </div>
    </footer>
  );
}
