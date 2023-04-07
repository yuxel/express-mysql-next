import React from 'react';

export default function LogoutButton ({ onLogout }) {
  const onSubmit = data => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    };

    fetch('/api/user/logout', requestOptions)
      .then(async response => {
        const responseJson = await response.json();
        if (response.status !== 200) {
          throw new Error(JSON.stringify({ status: response.status, data: responseJson }));
        }
      })
      .then(data => {
        onLogout();
      }).catch((e) => {
        alert(e);
      });
  };

  return <button onClick={onSubmit}>Logout</button>;
}
