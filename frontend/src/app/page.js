import Image from "next/image";

export const metadata = {
  title: "speaktheproductup",
  description: "Homepage",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Let&apos;s speak.
            <span className="block text-5xl font-extrabold text-gray-900">speaktheproductup</span>
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Hey 👋 I’m <strong>Mauro</strong>, product and technology enthusiast.
            <br />
            Here you will find thoughts and notes of what interests and makes me passionate the most.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/mauro_character.png" 
            alt="Character illustration of Mauro"
            className="w-64 h-auto"
          />
        </div>
      </header>

      {/* Latest Articles Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-8 text-gray-800">Read the latest</h2>
          {/* Article Card */}
          <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-gray-400 w-full md:w-1/3 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-4xl text-white font-bold">▶</span>
            </div>
            <div className="text-left md:w-2/3">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                How did I end up in Product Management?
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                A few lessons learned along my short-lived early professional life.
              </p>
              <p className="text-gray-500 text-sm">
                January 29, 2024 — 15 min
              </p>
            </div>
          </div>
          {/* All Articles Button */}
          <button className="bg-white border border-gray-300 text-gray-600 px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            All articles...
          </button>
        </div>
      </section>
    </div>
  );
}
