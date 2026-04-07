import ArticleCard from '@/app/components/ArticleCard';
import { getAllArticles } from '@/lib/articles';

export const metadata = {
  title: "Articles",
  description:
    "Browse all articles by Mauro Spadaro on tech, product management, and digital innovation.",
  openGraph: {
    title: "Articles | maurospadaro",
    description:
      "Browse all articles by Mauro Spadaro on tech, product management, and digital innovation.",
    url: "https://maurospadaro.com/articles",
  },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-gray-800">Articles</h1>
        <p className="text-xl text-gray-600 py-4">
          Read some of the latest stuff I&apos;ve written ✍️
        </p>
      </header>

      {/* Articles Section */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-4xl font-bold mb-12 text-gray-800 text-center">
          Latest Releases
        </h2>

        <div className="space-y-8">
          {articles.length > 0 ? (
            articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))
          ) : (
            <p className="text-center text-gray-600">No articles found.</p>
          )}
        </div>
      </section>
    </div>
  );
}
