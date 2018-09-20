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
import dayjs from 'dayjs';
import {SubPage} from '../../components/Page';
import {getState as getGlobalState} from '../../store';

// import {} from 'antd-mobile';

import './styles.css';


class Profile extends React.Component {
  goToRecommend = () => {
    const {user, history} = this.props;
    history.push(`/users/${user.id}/blogs/?recommend=all`);
  };

  goToLikes = () => {
    const {user, history} = this.props;
    history.push(`/users/${user.id}/likes/`);
  };

  goToSettings = () => {
    const {history} = this.props;
    history.push(`/settings`);
  };

  render() {
    const {user} = this.props;

    return (
      <SubPage id='profile' navBar={{children: user.name}}>
        <header>
          <div className='user'>
            <div className='avatar'>
              <img
                alt='头像'
                src='https://tva2.sinaimg.cn/crop.0.0.180.180.180/852a97e7jw1e8qgp5bmzyj2050050aa8.jpg'
              />
            </div>
            <div className='info'>
              <h2>{user.name}</h2>
              <p>{dayjs(user.createdAt).format('YYYY-MM-DD')}</p>
            </div>
          </div>
          <div className='gird-box'>
            <div onClick={this.goToRecommend}>
              <span>被推荐</span>
            </div>
            <div onClick={this.goToLikes}>
              <span>收藏</span>
            </div>
            <div onClick={this.goToSettings}>
              <span>设置</span>
            </div>
          </div>
        </header>
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
