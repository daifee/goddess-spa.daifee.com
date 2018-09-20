import React from 'react';
import PropTypes from 'prop-types';
import {ListView} from 'antd-mobile';
import BlogList from './BlogList';

import './styles.css';
import { INIT, PENDING, SUCCESS, FAILURE } from '../../utils/status';



export default class BlogListContainer extends BlogList {
  static propTypes = {
    blogList: PropTypes.array.isRequired,
    status: PropTypes.oneOf([INIT, PENDING, SUCCESS, FAILURE])
  };

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1.id !== row2.id,
    });
  }

  render() {
    const {blogList} = this.props;

    const dataSource = this.ds.cloneWithRows(blogList);

    return (<BlogList {...this.props} dataSource={dataSource} />)
  }
}
