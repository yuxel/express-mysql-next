import React from 'react';
import Head from 'next/head';

export default function Layout (props) {
  return <div>
    <Head>
      <title>Deneme</title>
      <meta name="description" content=""/>
      <meta name="keywords" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
    </Head>
    <div>

      <div>Admin header</div>
      {props.children}

      <div>Burası admin ooter</div>
    </div>
  </div>;
}
