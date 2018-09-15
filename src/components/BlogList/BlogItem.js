import React from 'react';
import {WingBlank} from 'antd-mobile';


const IMG = 'https://goddess-1257388993.cos.ap-chengdu.myqcloud.com/5b935fd6a160ca5598526e23/1536386375425-1-2.jpg';

export default class BlogItem extends React.Component {

  render() {
    return (
      <WingBlank className='components-blog-list-item'>
        <p className='content'>@大V家喵 说到血小板cos我们小猫咪肯定也不会认输滴[喵喵][喵喵][喵喵] #poppy波波茶# ​​​​</p>
        <div className='picture-wrap'>
          <ul>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
            <li>
              <div className='placeholder' />
              <div
                className='img'
                style={{
                  backgroundImage: `url(${IMG})`
                }}
              />
            </li>
          </ul>
        </div>
      </WingBlank>
    );
  }
}
