import { components } from '@/components/markdown-embeds';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';

export const TinaMarkdownWithEmbeds = ({ content }: { content: TinaMarkdownContent }) => {
  return <TinaMarkdown content={content} components={components} />;
};
