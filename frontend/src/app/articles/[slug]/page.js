import { notFound } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { slug } = params;
  let article;

  try {
    const response = await fetch(
      `http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=thumbnail`,
      {
        headers: {
          Authorization: `Bearer c1977edc4a07123a8efc71696d910daf2ede0a24ba57a73dfb2329e13529db2afc17329577d11cd2145cf3b032f579bd27f3b1bbc665679eced497a38a00ea779b02cb8a8c6c8c7820064b28bfdb1b2c81211bb0f49b869bebafb480e470de97be5f03bb82c30b59ee59e632d812aacea846ede2b67431862eac24ed0750669c`, // Replace with your actual Strapi token
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
