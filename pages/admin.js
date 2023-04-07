import React, { useState } from 'react';

import Layout from '../layouts/adminLayout';
import AdminLoginForm from '../components/forms/AdminLoginForm';
import LogoutButton from '../components/LogoutButton';

export default function Page (props) {
  const [userLoggedIn, setUserLoggedIn] = useState(props.user);

  const onLoginSuccess = () => {
    setUserLoggedIn(true);
    console.log('login succecss');
  };

  const onLoginFail = () => {
    console.log('login fail etti');
  };

  const onLogout = () => {
    setUserLoggedIn(false);
  };

  return <div>
    {userLoggedIn &&
      <div>
        Admin giriş yapmış
          <LogoutButton onLogout={onLogout}/>
        </div>
    }

    {!userLoggedIn &&
    <div>
      <AdminLoginForm onLoginSuccess={onLoginSuccess} onLoginFail={onLoginFail}/>
    </div>
    }
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
  // const response = await UsersModel.getUserCount();

  console.log('burasi', context.req.session);

  return {
    props: { user: context.req.session.user || null }
  };
}
