export default async function ArticlePage({ params }) {
  const { slug } = params;

  try {
    const encodedSlug = encodeURIComponent(slug);

    // Log to debug issues
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${encodedSlug}&populate=thumbnail`;
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
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        {article.thumbnail && (
          <img
            src={`${process.env.NEXT_PUBLIC_API_URL}${article.thumbnail.url}`}
            alt={article.title}
          />
        )}
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
