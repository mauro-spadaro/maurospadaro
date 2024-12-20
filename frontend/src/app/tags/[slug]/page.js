import ArticleCard from "../../../components/ArticleCard";

export default async function TagPage({ params }) {
  let articles = [];

  try {
    // Hard-coded API URL to fetch articles by tag slug
    const apiUrl = "http://localhost:1337/api/posts?filters[tags][slug][$eq]=crypto&populate=thumbnail&populate=tags";
    console.log("Using hard-coded API URL:", apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }

    const result = await response.json();
    articles = result.data || [];
  } catch (error) {
    console.error("Error fetching articles for tag:", error);
  }

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-8 text-gray-800 text-center">
          Articles tagged with "crypto"
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
