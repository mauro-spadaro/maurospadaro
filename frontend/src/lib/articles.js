import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles');

function parseArticleFile(filename) {
  const filepath = path.join(ARTICLES_DIR, filename);
  const raw = fs.readFileSync(filepath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    ...data,
    body: content.trim(),
  };
}

export function getAllArticles() {
  const files = fs.readdirSync(ARTICLES_DIR).filter(f => f.endsWith('.md'));
  const articles = files.map(parseArticleFile);
  // Sort by publishedDate descending
  articles.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
  return articles;
}

export function getArticleBySlug(slug) {
  const articles = getAllArticles();
  return articles.find(a => a.slug === slug) || null;
}

export function getArticlesByTag(tagSlug) {
  return getAllArticles().filter(a =>
    (a.tags || []).some(t => t.slug === tagSlug)
  );
}

export function getAllTags() {
  const articles = getAllArticles();
  const tagMap = new Map();
  for (const article of articles) {
    for (const tag of (article.tags || [])) {
      if (!tagMap.has(tag.slug)) {
        tagMap.set(tag.slug, tag);
      }
    }
  }
  return Array.from(tagMap.values());
}
