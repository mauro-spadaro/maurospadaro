import ArticleCard from "@/app/components/ArticleCard";
export default async function TagPage({ params }) {
  const { slug } = params; // Ensure params is accessed correctly
  let articles = [];

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
    console.log('Fetched articles:', articles.length);

  } catch (error) {
    console.error("Error fetching articles:", error);
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-800 text-center">
          Articles tagged with "{slug}"
        </h1>
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
