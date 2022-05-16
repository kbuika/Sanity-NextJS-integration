import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '05e3t74t',
  dataset: 'production',
  token: 'skwbzXnbTlQaEjknA9hEWvghEfyyLcK5ZeJ136mJ4jHhQPcyryVnhLHUk6BGCinFxQmRZ2yYxHLjeWjhdgvByXOEBXBj2CFooh9EjGljCADVJMYyxJtt73CmfkCRZqWmCpvPEOP54QvZAcSwUASgjVaAm8caLOb8z9LdLIFOQXPeowpc5buV', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});

export default client;