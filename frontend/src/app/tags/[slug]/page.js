import ArticleCard from "@/app/components/ArticleCard";


export async function generateMetadata({ params }) {
  const { slug } = params;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiUrl = `${baseUrl}/api/posts?filters[tags][slug][$eq]=${encodeURIComponent(slug)}&populate=tags`;
    
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch tag data');
    }

    const data = await response.json();
    const tagName = data.data[0]?.tags[0]?.name || slug.charAt(0).toUpperCase() + slug.slice(1);

    return {
      title: tagName,
      description: `Articles tagged with ${slug}`,
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: slug.charAt(0).toUpperCase() + slug.slice(1),
      description: `Articles tagged with ${slug}`,
    };
  }
}


export default async function TagPage({ params }) {
  const { slug } = params; // Ensure params is accessed correctly
  let articles = [];
  let totalArticles = 0;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';
    const url = new URL(`${baseUrl}/api/posts`);
    
    // Append query parameters
    url.searchParams.append('filters[tags][slug][$eq]', slug);
    url.searchParams.append('populate', 'thumbnail');
    url.searchParams.append('populate', 'tags');

    // Log the constructed URL for debugging
    console.log('Constructed API URL:', url.toString());

    const apiToken = process.env.STRAPI_API_TOKEN;
    if (!apiToken) {
      console.error("API token is not set.");
      throw new Error("API token is not set.");
    }
    console.log("Authorization Header:", `Bearer ${apiToken}`);

    const response = await fetch(url.toString(), {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      next: { revalidate: 60 }
    });

    // Log response status and headers for debugging
    console.log('Response status:', response.status);
    console.log('Response headers:', response.headers);

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('API response data:', result);

    articles = result.data || [];
    totalArticles = result.meta?.pagination?.total || articles.length;
    console.log('Total articles:', totalArticles);

  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  // Just get the tag name directly from the first article
  const tagName = articles[0]?.tags[0]?.name || slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-6xl mb-4 font-extrabold text-gray-800">{tagName}</h1>
          <p className="text-xl text-gray-600 py-4">
            A collection of {totalArticles} {totalArticles === 1 ? 'post' : 'posts'}
          </p>
        </div>
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))
        ) : (
          <p className="text-gray-600 text-center">No articles found for this tag.</p>
        )}
      </div>
    </div>
  );
}
