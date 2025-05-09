import { Template } from 'tinacms';

export const LinkButtonEmbed = ({ link, label }: { link: string; label: string }) => (
  <a href={link} className="no-underline py-2 px-4 rounded-md bg-black text-white">
    {label}
  </a>
);

export const linkButtonEmbedTemplate: Template = {
  name: 'LinkButton',
  label: 'Link Button',
  fields: [
    {
      name: 'link',
      label: 'Link',
      type: 'string',
    },
    {
      name: 'label',
      label: 'Label',
      type: 'string',
    },
  ],
};
