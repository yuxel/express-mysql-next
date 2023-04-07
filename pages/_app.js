import React from 'react';
import '../public/stylesheets/style.css';

import Layout from '../layouts/main';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
