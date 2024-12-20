export const metadata = {
    title: "Articles",
    description: "All articles page",
  };
  
  export default async function ArticlesPage() {
    let articles = []; // Default to an empty array
  
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=thumbnail`, {
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
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
        {/* Header Section */}
        <header className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl font-extrabold mb-4 text-gray-800">Articles</h1>
          <p className="text-xl text-gray-600 mb-12">
            Read some of the latest stuff I&apos;ve written ✍️
          </p>
        </header>
  
        {/* Articles Section */}
        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800 text-center">
            Latest Releases
          </h2>
  
          {articles.length > 0 ? (
            articles.map((article) => {
              const { title, summary, publishedDate, readingTime, thumbnail } =
                article || {};
  
              const thumbnailUrl = thumbnail?.url
                ? `http://localhost:1337${thumbnail.url}`
                : null;
  
              return (
                <div
                  key={article.id}
                  className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto mb-8"
                >
                  {/* Article Thumbnail */}
                  <div className="w-full md:w-1/3 rounded-lg overflow-hidden">
                    {thumbnailUrl ? (
                      <img
                        src={thumbnailUrl}
                        alt={title || "Thumbnail"}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="bg-gray-400 w-full h-32 flex items-center justify-center">
                        <span className="text-4xl text-white font-bold">▶</span>
                      </div>
                    )}
                  </div>
                  {/* Article Content */}
                  <div className="text-left md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {title || "Untitled"}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {summary || "No summary available."}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {publishedDate
                        ? new Date(publishedDate).toLocaleDateString()
                        : "Unknown date"}{" "}
                      — {readingTime || "Unknown"} min
                    </p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-600">No articles found.</p>
          )}
        </section>
      </div>
    );
  }
  