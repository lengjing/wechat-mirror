import React from 'react';

const origin = 'https://wx.qq.com';

export default function (props) {
  const { HeadImgUrl, NickName } = props;
  return (
    <div className="chat-item">
      <div className="aux">
        <div className="avatar">
          <img className="img" src={origin + HeadImgUrl} />
        </div>
        <div className="info">
          <div className="nickname">{NickName}</div>
        </div>
      </div>
      <style jsx global>{`
      .chat-item{
        padding-left: 12px;
        height: 70px;
      }
      .chat-item.active{
        background-color: #ccc;
      }
      .chat-item .aux{
        overflow: hidden;
        // padding: 12px 18px 11px 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 100%;
      }
      .chat-item .info{
        flex: 1;
      }
      .chat-item .nickname{
        font-weight: 400;
        font-size: 13px;
        color: #000;
        line-height: 20px;
      }
      .chat-item .avatar{
        margin-right: 20px;
      }
      .chat-item .img{
        width: 40px;
        height: 40px;
        border-radius: 2px;
        display: block;
      }
      `}</style>
    </div>
  )
}