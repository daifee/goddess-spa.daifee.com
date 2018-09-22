import React from 'react';
import {connect} from 'react-redux';
import {SubPage} from '../../components/Page';
import {dispatch, getState} from './store';
import './styles.css';
import { SUCCESS, shouldBlock } from '../../utils/status';

class UserList extends React.Component {
  handleEndReached = () => {
    const {page, status} = this.props;

    if (shouldBlock(status)) {
      return;
    }

    if (status === SUCCESS) {
      dispatch('userList/get', {page: (page + 1)});
    } else {
      dispatch('userList/get', {page: page});
    }
  };

  componentDidMount() {
    this.initData();
  }

  initData() {
    dispatch('userList/get', {page: 1});
  }

  render() {
    return (
      <SubPage id='user-list' navBar={{children: '所有用户'}}>
        <h1>TODO</h1>
      </SubPage>
    );
  }
}


export default connect((rootState, props) => {
  const {userList} = getState(rootState);

  return {
    status: userList.status,
    userList: userList.data,
    page: userList.page,
    ...props
  };
})(UserList);
