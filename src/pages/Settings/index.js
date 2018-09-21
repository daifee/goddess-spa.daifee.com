
import React from 'react';
import {SubPage} from '../../components/Page';
import { List, WhiteSpace } from 'antd-mobile';
import {dispatch as globalDispatch} from '../../store';

import pkg from '../../../package.json';

import './styles.css';

class Settings extends React.Component {
  handleAbout = () => {
    const {history} = this.props;
    history.push('/about');
  };

  handleLogout = async () => {
    const {history} = this.props;
    await globalDispatch('me/deauthorize');

    history.replace('/');
  };

  render() {
    return (
      <SubPage id='settings' navBar={{children: '设置'}}>

        <WhiteSpace />

        <List className='section-1'>
          <List.Item
            arrow='horizontal'
            onClick={this.handleAbout}
            extra='daifee.com'
          >
            关于
          </List.Item>
        </List>

        <WhiteSpace />

        <List className='logout'>
          <List.Item onClick={this.handleLogout}>
            退出登录
          </List.Item>
        </List>

        <WhiteSpace />
        <WhiteSpace />

        <div className='version'>版本号 {pkg.version}</div>
      </SubPage>
    );
  }
}

export default Settings;
