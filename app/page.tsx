import Link from "next/link"; // Voeg deze import toe
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Organiseer je favoriete recepten!
        </h1>
        <p className="text-gray-600 mb-6">
          Welkom bij jouw persoonlijke receptenverzameling. Begin nu met het opslaan, organiseren, en delen van je favoriete gerechten.
        </p>
        <Link href="/recipe"> {/* Gebruik Link voor navigatie */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Ga naar je recepten
          </button>
        </Link>
      </div>
    </div>
  );
}
