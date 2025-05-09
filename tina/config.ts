import { allEmbedTemplates } from "@/components/markdown-embeds";
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "category",
        label: "Categories",
        path: "content/categories",
        fields: [
          {
            type: "number",
            name: "precedence",
            label: "Precedence",
            description: "The priority of the category in the navigation. Lower numbers are higher in the navigation.",
            required: true,
          },
          {
            type: "string",
            name: "label",
            label: "Label",
            description: "The navigation label for the category",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
      {
        name: "resource",
        label: "Resources",
        path: "content/resources",
        format: "mdx",
        templates: [
          {
            name: 'link',
            label: 'Link',
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "link",
                label: "Link",
                required: true,
              },
              {
                type: 'boolean',
                name: 'isExternal',
                label: 'External Link',
                description: 'If true, the link will open in a new tab',
              },
              {
                label: 'Category',
                name: 'category',
                type: 'reference',
                collections: ['category'],
                required: true,
              },
            ],
          },
          {
            name: 'article',
            label: 'Article',
            fields: [
              {
                type: "string",
                name: "title",
                label: "Title",
                isTitle: true,
                required: true,
              },
              {
                type: "string",
                name: "slug",
                label: "Slug",
                required: true,
              },
              {
                type: "rich-text",
                name: "content",
                label: "Content",
                isBody: true,
                required: true,
                templates: allEmbedTemplates
              },
              {
                label: 'Category',
                name: 'category',
                type: 'reference',
                collections: ['category'],
                required: true,
              },
            ],
          },
        ],
      },
      {
        name: "timeline",
        label: "Timeline",
        path: "content/timeline",
        format: "mdx",
        fields: [
          {
            type: "datetime",
            name: "timestamp",
            label: "Timestamp",
            required: true,
            ui: {
              timeFormat: "HH:mm"
            },
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
            templates: allEmbedTemplates
          }
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
