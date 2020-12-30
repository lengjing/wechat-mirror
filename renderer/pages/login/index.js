import React, { useState, useEffect } from 'react';
import { remote } from 'electron';

export default function () {
  const [qrcodeUrl, setQrcodeUrl] = useState('');

  useEffect(() => {
    const wc = remote.require('./common/wechat');
    console.log(wc);
    wc.getQrcodeUrl()
      .then(url => setQrcodeUrl(url));
  }, []);

  return (
    <div id="login">
      <img className="img" width="190" height="190" src={qrcodeUrl} />
      <div className="notice">
        <p>使用手机微信扫码登录</p>
      </div>
      <style jsx global>{`
      html,
      body{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        user-select: none;
        font-family: Helvetica Neue,Helvetica,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
      }
      .img{
        display: block;
        margin: 50px auto 0;
      }
      .notice{
        text-align: center;
      }
      `}</style>
    </div>
  )
}