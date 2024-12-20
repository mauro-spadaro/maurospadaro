import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { slug } = params;
  let article;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${slug}&populate=thumbnail`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`, // Replace with your actual Strapi token
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch article");
    }

    const result = await response.json();
    article = result.data[0];

    if (!article) {
      notFound();
    }
  } catch (error) {
    console.error("Error fetching article:", error);
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{article.attributes.title}</h1>
      {article.attributes.thumbnail && (
        <img
          src={`http://localhost:1337${article.attributes.thumbnail.data.attributes.url}`}
          alt={article.attributes.title}
          className="w-full rounded-lg mb-6"
        />
      )}
      <div dangerouslySetInnerHTML={{ __html: article.attributes.body }} />
    </div>
  );
}
