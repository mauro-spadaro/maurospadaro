export const metadata = {
    title: "Articles",
    description: "All articles page",
  };

  export default function ArticlesPage() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-extrabold mb-4 text-gray-800">Articles</h1>
          <p className="text-xl text-gray-600 mb-12">
            Read some of the latest stuff I&apos;ve written ✍️
          </p>
        </header>
  
        {/* Latest Release Section */}
        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">Latest release</h2>
          <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto">
            {/* Article Thumbnail */}
            <div className="bg-gray-400 w-full md:w-1/3 rounded-lg aspect-video flex items-center justify-center">
              <span className="text-4xl text-white font-bold">▶</span>
            </div>
            {/* Article Content */}
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
        </section>
      </div>
    );
  }
  