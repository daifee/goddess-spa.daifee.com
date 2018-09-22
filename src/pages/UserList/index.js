import React from 'react';
import {SubPage} from '../../components/Page';
import './styles.css';

class UserList extends React.Component {

  render() {
    return (
      <SubPage id='user-list' navBar={{children: '所有用户'}}>
        <h1>TODO</h1>
      </SubPage>
    );
  }
}

export default UserList;
