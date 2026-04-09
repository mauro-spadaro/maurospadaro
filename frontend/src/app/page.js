import Link from "next/link";
import ArticleCard from "./components/ArticleCard";
import { getAllArticles } from "@/lib/articles";

export const metadata = {
  title: {
    absolute: "Mauro Spadaro",
  },
  description:
    "Mauro Spadaro — Product Manager at Perk, writing about product management, fintech, and tech. Based in Barcelona.",
  alternates: { canonical: "https://maurospadaro.com" },
  openGraph: {
    title: "Mauro Spadaro",
    description:
      "Mauro Spadaro — Product Manager at Perk, writing about product management, fintech, and tech. Based in Barcelona.",
    url: "https://maurospadaro.com",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mauro Spadaro",
  "url": "https://maurospadaro.com",
  "image": "https://maurospadaro.com/mauro_nature.jpeg",
  "jobTitle": "Product Manager",
  "worksFor": {
    "@type": "Organization",
    "name": "Perk",
  },
  "description": "Product Manager at Perk, writing about product management, fintech, and tech. Based in Barcelona.",
  "sameAs": [
    "https://www.linkedin.com/in/mauro-spadaro/",
    "https://github.com/mauro-spadaro",
  ],
};

export default function HomePage() {
  const articles = getAllArticles();
  const latestArticle = articles[0] || null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="min-h-screen">
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
              <Link href="/about" className="inline-flex items-center px-6 py-3 rounded-full bg-blue-800 text-white hover:bg-blue-800/80 transition-colors">
                More about me
              </Link>
              <Link href="/articles" className="inline-flex items-center px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-600 shadow hover:bg-gray-100 transition">
                Read articles
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src="/mauro_character.png"
              alt="Character illustration of Mauro"
              className="w-96 h-auto"
            />
          </div>
        </header>

        {/* Latest Articles Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-extrabold mb-8 text-gray-800">Read the latest</h2>
            {latestArticle ? (
              <ArticleCard article={latestArticle} />
            ) : (
              <p className="text-gray-600">No latest article found.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
