import React from 'react';
// import {Link} from 'react-router-dom';
import {NavBar, Tabs} from 'antd-mobile';
import Blog from '../../components/Blog';
import './styles.css';

const TABS = [
  {title: '美女'},
  {title: '风景'},
  {title: '萌宠'}
];

export default class Home extends React.Component {

  render() {
    return (
      <main id='home'>
        <NavBar
          mode='light'
          leftContent='主页'
          rightContent='编辑'
        >
          daifee.com
        </NavBar>
        <Tabs
          tabs={TABS}
          initialPage={0}
        >
          {this.renderContent}
        </Tabs>
      </main>
    );
  }

  renderContent(tab) {
    return (
      <div className='content'>
        <Blog />
      </div>
    );
  }
}
