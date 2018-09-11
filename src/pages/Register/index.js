import React from 'react';
import {Link} from 'react-router-dom';

export default class Register extends React.Component {

  render() {
    return (
      <main>
        <h1>Register</h1>
        <p>
          <Link to='/login'>登录</Link>
        </p>
      </main>
    );
  }
}
