const BASE_URL = 'https://maurospadaro.com';

export default async function sitemap() {
  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/articles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?fields[0]=slug&fields[1]=updatedAt&pagination[pageSize]=100`,
      {
        headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) return staticRoutes;

    const data = await response.json();
    const articleRoutes = (data?.data ?? []).map((post) => ({
      url: `${BASE_URL}/articles/${post.slug}`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.8,
    }));

    return [...staticRoutes, ...articleRoutes];
  } catch {
    return staticRoutes;
  }
}
