import Link from "next/link";
export default function ArticleCard({ article }) {
  return (
      <div className="bg-gray-300 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto mb-8 cursor-pointer hover:bg-gray-300 transition">
        <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail.url}`}
            alt={article.title}
            className="w-full h-auto"
          />
        </div>
        <div className="text-left md:w-2/3">
          <Link href={`/tags/${article.tags[0]?.slug}`}>
          <div className="inline-block px-3 py-1 bg-gray-200 rounded-full text-xs font-semibold text-gray-800 mb-2 hover:underline">
          {article.tags[0]?.name}
          </div>
          </Link>
          <Link href={`/articles/${article.slug}`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:underline">{article.title}</h3>
          <p className="text-gray-600 text-sm mb-4 hover:underline">{article.summary}</p>
          </Link>
          <p className="text-gray-500 text-sm">
            {new Date(article.publishedDate).toLocaleDateString()} — {article.readingTime} min
          </p>
        </div>
      </div>
  );
}
