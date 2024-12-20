/// to be the article page build


import ArticleCard from "../../../components/ArticleCard";

export default async function TagPage({ params }) {
  const { slug } = params;
  let articles = [];

  try {
    // Construct the API URL to fetch articles by tag slug
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[tags][slug][$eq]=${encodeURIComponent(slug)}&populate=thumbnail&populate=tags`;
    console.log("Constructed API URL:", apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("API response data:", result);

    articles = result.data || [];
  } catch (error) {
    console.error("Error fetching articles for tag:", error);
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
