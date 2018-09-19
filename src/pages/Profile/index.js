/**
 * 用户主页
 * * 被推荐
 * * 收藏
 * * 设置
 *   * 关于
 *   * 版本
 *   * 退出
 * * 所有微博列表
 *
 */

import React from 'react';
import {connect} from 'react-redux';
import {SubPage} from '../../components/Page';
import {getState as getGlobalState} from '../../store';

import './styles.css';


class Profile extends React.Component {
  render() {
    const {user} = this.props;
    return (
      <SubPage id='profile' navBar={{children: user.name}}>
        <h1>Profile</h1>
      </SubPage>
    );
  }
}

export default connect((rootState, props) => {
  const globalState = getGlobalState(rootState);

  return {
    user: globalState.me.data,
    ...props
  };
})(Profile);
