import React from 'react';
import {Link} from 'react-router-dom';
import {Button, List, InputItem, WingBlank, WhiteSpace} from 'antd-mobile';
import './styles.css';

export default class Register extends React.Component {

  render() {
    return (
      <main id='register'>
        <h1 className='title'>daifee.com</h1>
        <List>
          <InputItem
            type='phone'
            labelNumber={5}
            placeholder='请输入手机号码'
          >
            手机号
          </InputItem>
          <InputItem
            type='text'
            labelNumber={5}
            placeholder='请输昵称'
          >
            昵称
          </InputItem>
          <InputItem
            type='password'
            labelNumber={5}
            placeholder='请输入密码'
          >
            密码
          </InputItem>
          <InputItem
            type='password'
            labelNumber={5}
            placeholder='请输入密码'
          >
            确认密码
          </InputItem>
        </List>
        <WingBlank>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button type='primary'>注册</Button>
          <WhiteSpace />
          <p className='login'>
            <Link to='/login'>登录</Link>
          </p>
        </WingBlank>
      </main>
    );
  }
}
