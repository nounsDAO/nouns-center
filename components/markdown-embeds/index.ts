import { LinkButtonEmbed, linkButtonEmbedTemplate } from "@/components/markdown-embeds/link-button-embed";
import { YoutubeEmbed, youtubeEmbedTemplate } from "@/components/markdown-embeds/youtube-embed";

export const allEmbedTemplates = [youtubeEmbedTemplate, linkButtonEmbedTemplate];

export const components = {
    [youtubeEmbedTemplate.name]: YoutubeEmbed,
    [linkButtonEmbedTemplate.name]: LinkButtonEmbed,
};
