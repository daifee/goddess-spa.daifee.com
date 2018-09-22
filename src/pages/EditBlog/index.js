import React from 'react';
import { List, TextareaItem, WingBlank, WhiteSpace, ImagePicker, NavBar } from 'antd-mobile';
import './styles.css';

class EditBlog extends React.Component {
  handleChange = (files, type, index) => {
    console.log(files, type, index);
  };

  render() {
    return (
      <main id='edit-blog'>
        <NavBar
          mode='light'
          leftContent='取消'
          onLeftClick={this.handleCancel}
          rightContent={(
            <div
              className='right-btn'
              onClick={this.handlePublish}
            >
              <span>发布</span>
            </div>
          )}
        >
          发布微博
        </NavBar>

        <List>
          <TextareaItem
            placeholder='请输入...'
            autoHeight
            rows={2}
            count={140}
          />
        </List>

        <WhiteSpace />

        <WingBlank>
          <ImagePicker
            files={[]}
            onChange={this.handleChange}
            selectable={true}
          />
        </WingBlank>
      </main>
    );
  }
}

export default EditBlog;
