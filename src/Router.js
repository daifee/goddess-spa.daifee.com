import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {TouristRoute, UserRoute} from './components/Route';
import {connect} from 'react-redux';
import {ActivityIndicator} from 'antd-mobile';

import {getState, dispatch} from './store';
import { INIT, PENDING } from './utils/status';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import UserBlogList from './pages/UserBlogList';
import UserLikes from './pages/UserLikes';

import UserList from './pages/UserList';
import BlogList from './pages/BlogList';
import EditBlog from './pages/EditBlog';

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
          <TouristRoute exact path='/login' component={Login}  user={user} />
          <TouristRoute exact path='/register' component={Register} user={user} />
          <UserRoute exact path='/settings' component={Settings} user={user} />
          <UserRoute exact path='/users/:id' component={Profile} user={user} />
          <UserRoute exact path='/users/:id/blogs/' component={UserBlogList} user={user} />
          <UserRoute exact path='/users/:id/likes/' component={UserLikes} user={user} />
          <UserRoute exact path='/blogs/edit' component={EditBlog} user={user} />
          <UserRoute exact path='/admin/users/' component={UserList} user={user} />
          <UserRoute exact path='/admin/blogs/' component={BlogList} user={user} />
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
