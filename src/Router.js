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


const config = [
  {
    path: '/',
    component: Home,
    _route: Route,
  },
  {
    path: '/login',
    component: Login,
    _route: TouristRoute
  },
  {
    path: '/register',
    component: Register,
    _route: TouristRoute
  },
  {
    path: '/settings',
    component: Settings,
    _route: UserRoute
  },
  {
    path: '/users/:id',
    component: Profile,
    _route: UserRoute
  },
  {
    path: '/users/:id/blogs',
    component: UserBlogList,
    _route: UserRoute
  },
  {
    path: '/users/:id/likes/',
    component: UserLikes,
    _route: UserRoute
  },
  {
    path: '/blogs/edit',
    component: EditBlog,
    _route: UserRoute
  },
  {
    path: '/admin/users',
    component: UserList,
    _route: UserRoute
  },
  {
    path: '/admin/blogs',
    component: BlogList,
    _route: UserRoute
  },
  {
    exact: false,
    component: NotFound,
    _route: Route
  }
];


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
          {config.map(({_route: Route, ...rest}, index) => {
            // 默认 `exact=true`
            if (typeof rest.exact === 'undefined') {
              rest.exact = true;
            }
            const key = `${index}-${rest.path}`;
            return (<Route key={key} {...rest} user={user} />);
          })}
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
