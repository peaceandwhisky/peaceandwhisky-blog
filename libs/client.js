// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'peaceandwhisky',
  apiKey: process.env.API_KEY,
});