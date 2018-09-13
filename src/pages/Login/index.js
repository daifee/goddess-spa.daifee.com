import React from 'react';
import {Link} from 'react-router-dom';
import {Button, List, InputItem, WingBlank, WhiteSpace} from 'antd-mobile';
import './styles.css';

export default class Login extends React.Component {

  render() {
    return (
      <main id='login'>
        <h1 className='title'>daifee.com</h1>
        <List>
          <InputItem
            type='phone'
            labelNumber={3}
            placeholder='请输入手机号码'
          >
            帐号
          </InputItem>
          <InputItem
            type='password'
            labelNumber={3}
            placeholder='请输入密码'
          >
            密码
          </InputItem>
        </List>
        <WingBlank>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button type='primary'>登录</Button>
          <WhiteSpace />
          <p className='register'>
            <Link to='/register'>免费注册</Link>
          </p>
        </WingBlank>
      </main>
    );
  }
}
