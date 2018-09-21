
import React from 'react';
import {SubPage} from '../../components/Page';
import BlogList from '../../components/BlogList';

import './styles.css';


class UserBlogList extends React.Component {
  handleEndReached = () => {
    console.log('handleEndReached');
  }

  render() {
    return (
      <SubPage id='recommend-blog-list' navBar={{children: '被推荐的微博'}}>
        <BlogList
          blogList={[]}
          onEndReached={this.handleEndReached}
        />
      </SubPage>
    );
  }
}


export default UserBlogList;
