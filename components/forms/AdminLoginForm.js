import React, { useState } from 'react';

import { useForm } from 'react-hook-form';

export default function AdminLoginForm ({ onLoginSuccess, onLoginFail }) {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [backendError, setBackendError] = useState(false);

  const onSubmit = data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data })
    };

    fetch('/api/user/login', requestOptions)
      .then(async response => {
        const responseJson = await response.json();
        if (response.status !== 200) {
          throw new Error(JSON.stringify({ status: response.status, data: responseJson }));
        }
      })
      .then(data => {
        setUserLoggedIn(data);
        onLoginSuccess(data);
      }).catch((e) => {
        onLoginFail('faa');
        setBackendError(JSON.parse(e.message).data.errorMessage);
      });
  };

  return <div>
    {!userLoggedIn &&
    <div>
    {backendError && <div>{backendError}</div> }
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="username" defaultValue="" {...register('username', { required: true })} />
      {errors.username && <span>This field is required</span>}
      <input placeholder="password" {...register('password', { required: true })} />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </div>
    }
  </div>;
}
