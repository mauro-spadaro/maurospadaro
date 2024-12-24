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
