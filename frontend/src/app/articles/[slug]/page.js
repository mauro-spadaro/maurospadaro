import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from 'next/link';


export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const encodedSlug = encodeURIComponent(slug);
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${encodedSlug}&populate=thumbnail&populate=tags`;
    
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    const data = await response.json();
    const article = data?.data?.[0];

    if (!article) {
      return {
        title: 'Article Not Found',
        description: 'The requested article could not be found.',
      };
    }

    return {
      title: article.title,
      description: article.summary,
    };
  } catch (error) {
    return {
      title: 'Error',
      description: 'Failed to load article metadata',
    };
  }
}

export default async function ArticlePage({ params }) {
  const { slug } = params;

  try {
    const encodedSlug = encodeURIComponent(slug);

    // Log to debug issues
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${encodedSlug}&populate=thumbnail&populate=tags`;
    console.log("Constructed API URL:", apiUrl);

    const apiToken = process.env.STRAPI_API_TOKEN;
    if (!apiToken) {
      console.error("API token is not set.");
      throw new Error("API token is not set.");
    }
    console.log("Authorization Header:", `Bearer ${apiToken}`);

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
      next: { revalidate: 60 },
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", response.headers);

    if (!response.ok) {
      throw new Error(`Failed to fetch article: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("API response data:", data);

    const article = data?.data?.[0];

    if (!article) {
      throw new Error("No article found for the given slug.");
    }

    return (
      <div className="max-w-4xl mx-auto px-4 py-16" >
        <div className="text-center">
          {/* Tag */}
          {article.tags[0]?.name && (
            <Link 
              href={`/tags/${article.tags[0].slug}`} 
              className="inline-block px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full text-sm font-medium mb-4 transition-colors hover:underline"
            >
              {article.tags[0].name}
            </Link>
          )}
          {!article.tags[0]?.name && (
            <div className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium mb-4">
              No Tag
            </div>
          )}
          {/* Title */}
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">{article.title}</h1>
          {/* Summary */}
          <p className="text-xl text-gray-600 mb-6">{article.summary}</p>
          {/* Date and Reading Time */}
          <div className="text-gray-500 text-sm mb-12">
            {new Date(article.publishedDate).toLocaleDateString()} • {article.readingTime} min
          </div>
          
          {/* Separator Line */}
          <hr className="border-gray-800/20 border-t-3 max-w-3xl mx-auto mb-12" />
        </div>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-2 prose prose-lg max-w-prose">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
              p: ({node, ...props}) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-gray-200 pl-4 italic my-4" {...props} />
              ),
              img: ({node, ...props}) => (
                <img className="rounded-lg my-8 w-full" {...props} alt={props.alt || ''} />
              ),
            }}
          >
            {article.body}
          </ReactMarkdown>
        </article>
      </div>
    );    
  } catch (error) {
    console.error("Error fetching article:", error);

    return (
      <div>
        <h1>Error</h1>
        <p>Failed to load the article. Please try again later.</p>
      </div>
    );
  }
}
