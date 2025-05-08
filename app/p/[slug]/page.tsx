import { ResourceArticle } from '@tina/types';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import client from '@tina/client';
import React from 'react';
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

const components = {
  Youtube: ({ videoId }: { videoId: string }) => {
    return (
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    );
  },
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
    <div className="prose mx-auto mb-24">
      <TinaMarkdown content={content} components={components} />
    </div>
  );
}
