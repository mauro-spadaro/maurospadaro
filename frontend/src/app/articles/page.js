import ArticleCard from '@/app/components/ArticleCard';

export const metadata = {
    title: "Articles",
    description: "All articles page",
  };
  
  export default async function ArticlesPage() {
    let articles = []; // Default to an empty array
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=thumbnail&populate=tags&sort=createdAt:desc`, {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN} `, // Replace with your actual token
        },
        next: { revalidate: 60 }, // Revalidate the data every 60 seconds
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch articles: ${response.statusText}`);
      }
  
      const result = await response.json();
      articles = result.data || []; // Fallback to empty array if `data` is undefined
  
      console.log("Fetched articles:", articles); // Debugging the articles response
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  
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
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))
            ) : (
              <p className="text-center text-gray-600">No articles found.</p>
            )}
          </div>
        </section>
      </div>
    );
  }
  