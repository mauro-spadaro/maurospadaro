import ArticleCard from "@/app/components/ArticleCard";
import { getArticlesByTag, getAllTags } from "@/lib/articles";

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map(t => ({ slug: t.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const articles = getArticlesByTag(slug);
  const tagName = articles[0]?.tags?.find(t => t.slug === slug)?.name
    || slug.charAt(0).toUpperCase() + slug.slice(1);

  return {
    title: tagName,
    description: `Articles tagged with ${tagName}`,
  };
}

export default function TagPage({ params }) {
  const { slug } = params;
  const articles = getArticlesByTag(slug);
  const tagName = articles[0]?.tags?.find(t => t.slug === slug)?.name
    || slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl mb-4 font-extrabold text-gray-800">{tagName}</h1>
          <p className="text-xl text-gray-600 py-4">
            A collection of {articles.length} {articles.length === 1 ? 'post' : 'posts'}
          </p>
        </div>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))
        ) : (
          <p className="text-gray-600 text-center">No articles found for this tag.</p>
        )}
      </div>
    </div>
  );
}
