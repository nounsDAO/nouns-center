import { TinaMarkdownWithEmbeds } from '@/components/markdown-embeds/tina-markdown-with-embeds';
import client from '@tina/client';
import { ResourceArticle } from '@tina/types';
import { find } from 'remeda';

export async function generateStaticParams() {
  const articles = (
    await client.queries.resourceConnection({ first: 1000 })
  ).data.resourceConnection.edges
    ?.filter(edge => edge!.node!.__typename === 'ResourceArticle')
    .map(edge => edge!.node! as ResourceArticle)!;

  return articles.map(article => ({
    slug: article.slug,
  }));
}

export const generateMetadata = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const article = (
    await client.queries.resourceConnection({ filter: { article: { slug: { eq: slug } } } })
  ).data.resourceConnection.edges![0]?.node as ResourceArticle;
  return {
    title: `${article?.title} | Nouns Center`,
  };
};

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articles = (
    await client.queries.resourceConnection({ filter: { article: { slug: { eq: slug } } } })
  ).data.resourceConnection
    .edges!.filter(edge => edge!.node!.__typename === 'ResourceArticle')
    .map(edge => edge!.node! as ResourceArticle);

  const article = find(articles, article => article.slug === slug);
  if (!article) {
    throw new Error('Article not found');
  }
  const { content, title } = article;
  return (
    <div className="prose mx-auto mb-24 mt-16">
      <h1>{title}</h1>
      <TinaMarkdownWithEmbeds content={content} />
    </div>
  );
}
