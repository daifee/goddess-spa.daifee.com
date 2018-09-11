import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {

  render() {
    return (
      <main>
        <h1>Login</h1>
        <p>
          <Link to='/register'>注册</Link>
        </p>
      </main>
    );
  }
}
