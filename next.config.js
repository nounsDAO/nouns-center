// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: '/talks',
      destination: '/podcast',
      permanent: true,
    },
    {
      source: '/podcasts',
      destination: '/podcast',
      permanent: true,
    },
    {
      source: '/nounstalgia',
      destination: '/history',
      permanent: true,
    },
    {
      source: '/project',
      destination: '/projects',
      permanent: true,
    },
    {
      source: '/funding/small-grants',
      destination: '/funding/smallgrants',
      permanent: true,
    },
    {
      source: '/funding/sg',
      destination: '/funding/smallgrants',
      permanent: true,
    },
    {
      source: '/small-grants',
      destination: '/funding/smallgrants',
      permanent: true,
    },
    {
      source: '/sg',
      destination: '/funding/smallgrants',
      permanent: true,
    },
    {
      source: '/smallgrants',
      destination: '/funding/smallgrants',
      permanent: true,
    },
    {
      source: '/proposals',
      destination: '/funding/proposals',
      permanent: true,
    },
    {
      source: '/trait',
      destination: '/traits',
      permanent: true,
    },
    {
      source: '/asset',
      destination: '/assets',
      permanent: true,
    },
    {
      source: '/group',
      destination: '/groups',
      permanent: true,
    },
    {
      source: '/subdao',
      destination: '/subdaos',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
