import React from 'react';

import Layout from '../layouts/adminLayout';

import UsersModel from '../models/users.js';

export default function Page (props) {
  return <div>
Burası admin paneli layout içi
  </div>;
}

Page.getLayout = function getLayout (page) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};

export async function getServerSideProps (context) {
  const response = await UsersModel.getUserCount();

  console.log('burasi', response);

  return {
    props: { data: '10' }
  };
}
