import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {TouristRoute} from './components/Route';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'antd-mobile';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import {getState, dispatch} from './store';
import { INIT, PENDING } from './utils/status';




/**
 * 初始化登录后再注册路由
 */
class Router extends React.Component {

  componentDidMount() {
    dispatch('me/reauthorize');
  }

  render() {
    const {status, message, data: user} = this.props.me;
    // 初始化或 reauthorize 过程
    if (status === INIT || (status === PENDING && message === 'reauthorize')) {
      return this.renderReauthorizing();
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <TouristRoute user={user} exact path='/login' component={Login} />
          <TouristRoute user={user} exact path='/register' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }

  renderReauthorizing() {
    return (
      <div id='reauthorizing'>
        <ActivityIndicator size='large' />
        <br />
        daifee.com
      </div>
    );
  }
}




export default connect((rootState, props) => {
  const state = getState(rootState);
  return {
    me: state.me,
    ...props
  };
})(Router);