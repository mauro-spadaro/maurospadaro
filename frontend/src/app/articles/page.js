export const metadata = {
    title: "Articles",
    description: "All articles page",
  };
  
  export default async function ArticlesPage() {
    let articles = []; // Default to an empty array
  
    try {
      const response = await fetch("http://localhost:1337/api/posts", {
        headers: {
          Authorization: `Bearer c1977edc4a07123a8efc71696d910daf2ede0a24ba57a73dfb2329e13529db2afc17329577d11cd2145cf3b032f579bd27f3b1bbc665679eced497a38a00ea779b02cb8a8c6c8c7820064b28bfdb1b2c81211bb0f49b869bebafb480e470de97be5f03bb82c30b59ee59e632d812aacea846ede2b67431862eac24ed0750669c`, // Replace with your actual token
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
            articles.map((article) => (
              <div
                key={article.id}
                className="bg-gray-200 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center gap-6 max-w-3xl mx-auto mb-8"
              >
                {/* Article Thumbnail */}
                <div className="bg-gray-400 w-full md:w-1/3 rounded-lg aspect-video flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">▶</span>
                </div>
                {/* Article Content */}
                <div className="text-left md:w-2/3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {article.title} {/* Adjusted to match the backend data */}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.summary} {/* Adjusted to match the backend data */}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {new Date(article.publishedDate).toLocaleDateString()} —{" "}
                    {article.readingTime} min
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No articles found.</p>
          )}
        </section>
      </div>
    );
  }
  