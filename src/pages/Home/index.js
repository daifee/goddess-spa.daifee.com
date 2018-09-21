import React from 'react';
// import {Link} from 'react-router-dom';
import {NavBar, Tabs} from 'antd-mobile';
import {connect} from 'react-redux';
import utilUrl from 'url';
import {getState, dispatch} from './store';
import {
  selector as globalStateSelector
} from '../../store';
import Page from '../../components/Page';
import BlogList from '../../components/BlogList';
import {FAILURE, SUCCESS} from '../../utils/status';
import './styles.css';


const TABS = [
  {title: '美女', type: 'goddess'},
  {title: '风景', type: 'landscape'},
  {title: '萌宠', type: 'animal'}
];

function getType(url) {
  const urlObj = utilUrl.parse(url, true);
  return urlObj.query.type || 'goddess';
}

class Home extends React.Component {
  unlisten = null;

  handleLeftClick = () => {
    const {user, history} = this.props;
    if (user) {
      history.push(`/users/${user.id}`);
    } else {
      history.push('/login');
    }
  };

  handleRightClick = () => {
    const {history} = this.props;

    history.push('/blogs/edit');
  };

  handleTabClick = (tabData) => {
    const {history} = this.props;

    history.replace(`?type=${tabData.type}`);
  };

  componentDidMount() {
    const {history, type} = this.props;

    dispatch(`${type}/get`);

    this.unlisten = history.listen((newLocation) => {
      if (newLocation.pathname !== '/') return;

      const type = getType(newLocation.search);
      dispatch(`${type}/get`);
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const {type} = this.props;
    let page;
    TABS.forEach((item, index) => {
      if (item.type === type) page = index;
    });

    return (
      <Page id='home'>
        <NavBar
          mode='light'
          leftContent='我'
          onLeftClick={this.handleLeftClick}
          rightContent={(
            <div
              className='right-btn'
              onClick={this.handleRightClick}
            >
              <span>发布</span>
            </div>
          )}
        >
          daifee.com
        </NavBar>
        <Tabs
          animated={false}
          tabs={TABS}
          page={page}
          onTabClick={this.handleTabClick}
        >
          {this.renderContent(this.props)}
        </Tabs>
      </Page>
    );
  }

  renderContent = ({tabState}) => {

    return (
      <div className='content'>
        <BlogList
          blogList={tabState.data}
          renderFooter={this.renderFooter}
        />
      </div>
    );
  }

  renderFooter = () => {
    const {tabState} = this.props;
    switch (tabState.status) {
      case SUCCESS:
        return (<footer>只显示2条内容...</footer>);
      case FAILURE:
        return (<footer>加载失败！</footer>);
      default:
        return (<footer>loading...</footer>);
    }
  }
}

export default connect((rootState, props) => {
  const state = getState(rootState);
  const type = getType(window.location.href);
  const tabState = state[type];
  const user = globalStateSelector.user(rootState);

  return {
    ...state,
    ...props,
    type,
    tabState,
    user
  };
})(Home);
