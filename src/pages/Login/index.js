import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Button, List, InputItem, WingBlank, WhiteSpace} from 'antd-mobile';
import {SubPage} from '../../components/Page';
import {getState, dispatch} from './store';
import {
  dispatch as globalDispatch,
  getState as getGlobalState
} from '../../store';

import './styles.css';
import { PENDING } from '../../utils/status';
import * as utilUser from '../../utils/user';


class Login extends React.Component {

  handleInputPhone = (value) => {
    dispatch('user/setPhone', value);
  };

  handleInputPassword = (value) => {
    dispatch('user/setPassword', value);
  };

  handleSubmit = async () => {
    let {phone, password} = this.props;
    phone = phone.replace(/ /g, '');
    if (!utilUser.isPhone(phone)) {
      alert('手机号码格式错误');
    } else if (!utilUser.isPassword(password)) {
      alert('密码格式错误');
    } else {
      const error = await globalDispatch('me/authorize', {phone, password});
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  render() {
    const {password, phone, me} = this.props;

    return (
      <SubPage id='login' navBar={{children: '登录'}}>
        <h1 className='title'>daifee.com</h1>
        <List>
          <InputItem
            type='phone'
            labelNumber={3}
            placeholder='请输入手机号码'
            value={phone}
            onChange={this.handleInputPhone}
          >
            帐号
          </InputItem>
          <InputItem
            type='password'
            labelNumber={3}
            placeholder='请输入密码'
            value={password}
            onChange={this.handleInputPassword}
          >
            密码
          </InputItem>
        </List>
        <WingBlank>
          <WhiteSpace />
          <WhiteSpace />
          <WhiteSpace />
          <Button
            type='primary'
            disabled={!phone || !password}
            loading={me.status === PENDING}
            onClick={this.handleSubmit}
          >
            登录
          </Button>
          <WhiteSpace />
          <p className='register'>
            <Link to='/register'>免费注册</Link>
          </p>
        </WingBlank>
      </SubPage>
    );
  }
}

export default connect((rootState, props) => {
  const state = getState(rootState);
  const globalState = getGlobalState(rootState);
  const user = state.user;
  return {
    phone: user.phone,
    password: user.password,
    me: globalState.me,
    ...props
  };
})(Login);
