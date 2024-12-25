import Image from "next/image";
import Link from "next/link";
import ArticleCard  from "./components/ArticleCard";

export const metadata = {
  title: "maurospadaro",
  description: "Homepage",
};

export default async function HomePage() {
  let latestArticle = null;

  try {
    // Fetch the latest article from Strapi API
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=thumbnail&populate=tags&sort[0]=publishedDate:desc&pagination[page]=1&pagination[pageSize]=1`, 
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`, // Replace with your actual token
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
      <header className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Writing about tech, <span className="text-blue-600">product</span>, and digital innovation
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed">
            Hey 👋 I'm <strong>Mauro</strong>. I share insights about technology, product development, 
            and lessons learned building digital products. 
            As well as some other random stuff. 
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Link href="/about" className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              More about me
            </Link>
            <Link href="/articles" className="inline-flex items-center px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
              Read articles
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="/mauro_character.png"
            alt="Character illustration of Mauro"
            className="w-96 h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </header>

      {/* Latest Articles Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-8 text-gray-800">Read the latest</h1>
          {latestArticle ? (
            <ArticleCard article={latestArticle} />
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
