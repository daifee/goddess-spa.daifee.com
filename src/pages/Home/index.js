import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    return (
      <main>
        <h1>Home</h1>
        <p>
          <Link to='/login'>登录</Link>
          <Link to='/register'>注册</Link>
        </p>
      </main>
    );
  }
}
