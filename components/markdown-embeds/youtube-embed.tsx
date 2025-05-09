import { Template } from 'tinacms';

export const YoutubeEmbed = ({ videoId }: { videoId: string }) => {
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
};

export const youtubeEmbedTemplate: Template = {
  name: 'Youtube',
  label: 'Youtube',
  fields: [
    {
      name: 'videoId',
      label: 'Video ID (e.g. LNR1TIxNjvs)',
      type: 'string',
    },
  ],
};
