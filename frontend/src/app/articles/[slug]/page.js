import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from 'next/link';
import { getAllArticles, getArticleBySlug } from '@/lib/articles';
import ReadingProgressBar from '@/app/components/ReadingProgressBar';
import ArticleCard from '@/app/components/ArticleCard';
import ShareButtons from '@/app/components/ShareButtons';
import BackToTop from '@/app/components/BackToTop';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map(a => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Article Not Found', description: 'The requested article could not be found.' };
  }

  const thumbnailUrl = article.thumbnail
    ? `https://maurospadaro.com${article.thumbnail}`
    : 'https://maurospadaro.com/opengraph-image';

  return {
    title: article.title,
    description: article.summary,
    alternates: {
      canonical: `https://maurospadaro.com/articles/${slug}`,
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      url: `https://maurospadaro.com/articles/${slug}`,
      images: [{ url: thumbnailUrl, width: 1200, height: 630, alt: article.title }],
      publishedTime: article.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
      images: [thumbnailUrl],
    },
  };
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function ArticlePage({ params }) {
  const { slug } = params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article not found</h1>
          <Link href="/articles" className="text-blue-600 underline">Back to articles</Link>
        </div>
      </div>
    );
  }

  const thumbnailUrl = article.thumbnail
    ? `https://maurospadaro.com${article.thumbnail}`
    : null;

  const allArticles = getAllArticles();
  const tagSlugs = (article.tags || []).map(t => t.slug);
  const related = allArticles
    .filter(a => a.slug !== slug && (a.tags || []).some(t => tagSlugs.includes(t.slug)))
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.summary,
    "datePublished": article.publishedDate,
    "dateModified": article.publishedDate,
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://maurospadaro.com/articles/${slug}` },
    ...(thumbnailUrl && { "image": { "@type": "ImageObject", "url": thumbnailUrl } }),
    "author": { "@type": "Person", "name": "Mauro Spadaro", "url": "https://maurospadaro.com/about" },
    "publisher": { "@type": "Person", "name": "Mauro Spadaro", "url": "https://maurospadaro.com" },
    "url": `https://maurospadaro.com/articles/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ReadingProgressBar />
      <BackToTop />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Tag */}
          {article.tags?.[0]?.name && (
            <Link
              href={`/tags/${article.tags[0].slug}`}
              className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm font-medium mb-4 transition-colors hover:underline"
            >
              {article.tags[0].name}
            </Link>
          )}

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">{article.title}</h1>
          {/* Summary */}
          <p className="text-xl text-gray-600 mb-6">{article.summary}</p>
          {/* Date and Reading Time */}
          <div className="text-gray-500 text-sm mb-8">
            {formatDate(article.publishedDate)} · {article.readingTime} min read
          </div>

          {/* Share buttons */}
          <ShareButtons title={article.title} slug={slug} />

          <hr className="border-gray-800/20 mt-10 mb-12" />
        </div>

        {/* Hero thumbnail */}
        {article.thumbnail && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-md">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Article Content */}
        <article className="container mx-auto px-4 py-2 prose prose-lg max-w-prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
              p: ({node, children, ...props}) => {
                const hasImage = node.children?.some(c => c.tagName === 'img');
                if (hasImage) return <>{children}</>;
                return <p className="mb-4 text-gray-700 leading-relaxed" {...props}>{children}</p>;
              },
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4" {...props} />
              ),
              img: ({node, ...props}) => (
                <figure className="my-8">
                  <img className="rounded-lg w-full" {...props} alt={props.alt || ''} />
                  {props.title && (
                    <figcaption className="text-center text-sm text-gray-500 mt-2 italic">
                      {props.title}
                    </figcaption>
                  )}
                </figure>
              ),
            }}
          >
            {article.body}
          </ReactMarkdown>
        </article>

        {/* Share buttons bottom */}
        <div className="mt-12 border-t border-gray-200 pt-10">
          <p className="text-center text-gray-600 font-medium mb-2">Enjoyed this article?</p>
          <ShareButtons title={article.title} slug={slug} />
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-extrabold text-gray-800 mb-10 text-center">More to read</h2>
            <div className="space-y-6">
              {related.map(a => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
