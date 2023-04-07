import React from 'react';

import fetch from 'node-fetch';

export default function Page (props) {
  return <div>
Internetten aldığım dolar kuru: {props.data}
  </div>;
}

export async function getServerSideProps (context) {
  const response = await fetch('https://api.genelpara.com/embed/para-birimleri.json');
  const data = await response.json();

  return {
    props: { data: data.USD.satis }
  };
}
