import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;