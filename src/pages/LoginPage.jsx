import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../hook/useAuth';

const LoginPage = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;

    signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h3>LoginPage</h3>
      <div>Вы попали на эту страницу потому что не авторизованы на сайте</div>
      <div>Вы пришли с этой страницы:</div>
      {fromPage}
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name='username' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export { LoginPage };
