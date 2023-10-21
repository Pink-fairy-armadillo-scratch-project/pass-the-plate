/* eslint-disable jsx-a11y/label-has-associated-control */
// this is our login component

import React from 'react';

function Login() {
  return (
    <form>
      <label>
        Username
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Password
        <input type="text" name="password" />
      </label>
      <br />
      <label>
        Zip Code
        <input type="text" name="zipcode" />
      </label>
      <br />
      <button type="submit">Login</button>
      <button type="submit">Sign Up</button>
    </form>
  );
}


export default Login;
