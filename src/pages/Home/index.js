import React from 'react';
// import {Link} from 'react-router-dom';
import {NavBar, Tabs} from 'antd-mobile';
import {connect} from 'react-redux';
import {getState, dispatch} from './store';
import Page from '../../components/Page';
import BlogList from '../../components/BlogList';
import './styles.css';


const TABS = [
  {title: '美女'},
  {title: '风景'},
  {title: '萌宠'}
];

class Home extends React.Component {

  componentDidMount() {
    dispatch('animal/get');
  }

  render() {
    console.log(this.props);
    return (
      <Page id='home'>
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
      </Page>
    );
  }

  renderContent = (tab) => {
    return (
      <div className='content'>
        <BlogList
          blogList={[{id: 'a'}, {id: 'b'}]}
          renderFooter={this.renderFooter}
        />
      </div>
    );
  }

  renderFooter = () => {
    return (<footer>只显示2条内容...</footer>);
  }
}

export default connect((rootState, props) => {
  const state = getState(rootState);
  return {
    ...state,
    ...props
  };
})(Home);
