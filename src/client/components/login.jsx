/* eslint-disable jsx-a11y/label-has-associated-control */
// this is our login component

import React from 'react';

function Login() {
  return (
    <form method="post">
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <label>
        Zip Code:
        <input type="text" name="zipcode" />
      </label>
      <br />
      <div className="button-div">
        <button type="submit" formAction="/login">Login</button>
        <button type="submit" formAction="/signup">Sign Up</button>
      </div>
    </form>
  );
}


export default Login;
