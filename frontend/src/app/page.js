import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "speaktheproductup",
  description: "Homepage",
};

export default async function HomePage() {
  let latestArticle = null;

  try {
    // Fetch the latest article from Strapi API
    const response = await fetch(
      "http://localhost:1337/api/posts?populate=thumbnail&sort[0]=publishedDate:desc&pagination[page]=1&pagination[pageSize]=1", 
      {
        headers: {
          Authorization: `Bearer c1977edc4a07123a8efc71696d910daf2ede0a24ba57a73dfb2329e13529db2afc17329577d11cd2145cf3b032f579bd27f3b1bbc665679eced497a38a00ea779b02cb8a8c6c8c7820064b28bfdb1b2c81211bb0f49b869bebafb480e470de97be5f03bb82c30b59ee59e632d812aacea846ede2b67431862eac24ed0750669c`, // Replace with your actual token
        },
        next: { revalidate: 60 }, // Revalidate data every 60 seconds
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch latest article: ${response.statusText}`);
    }

    const result = await response.json();
    latestArticle = result.data?.[0] || null; // Fetch the first (latest) article
  } catch (error) {
    console.error("Error fetching the latest article:", error);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">
            Let&apos;s speak.
            <span className="block text-5xl font-extrabold text-gray-800">speaktheproductup</span>
          </h1>
          <p className="text-gray-700 text-xl mb-6">
            Hey 👋 I’m <strong>Mauro</strong>, product and technology enthusiast.
            <br />
            Here you will find thoughts and notes of what interests and makes me passionate the most.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/mauro_character.png"
            alt="Character illustration of Mauro"
            className="w-96 h-auto"
          />
        </div>
      </header>

      {/* Latest Articles Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-8 text-gray-800">Read the latest</h1>
          {latestArticle ? (
            <Link href={`/articles/${latestArticle.slug}`}>
            <div className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto mb-8">
              <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
              <img
                src={`http://localhost:1337${latestArticle.thumbnail.url}`}
                alt={latestArticle.title}
                className="w-full h-auto"
              />
              </div>
              <div className="text-left md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {latestArticle.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {latestArticle.summary}
                </p>
                <p className="text-gray-500 text-sm">
                  {new Date(latestArticle.publishedDate).toLocaleDateString()} —{" "}
                  {latestArticle.readingTime} min
                </p>
              </div>
            </div>
            </Link>
          ) : (
            <p className="text-gray-600">No latest article found.</p>
          )}
          {/* All Articles Button */}
          <Link href="/articles">
            <button className="bg-white border border-gray-300 text-gray-600 px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              All articles...
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
