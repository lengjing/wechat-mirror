import React from 'react';

export default function (props) {
  const { nickName, message, avator, fromMe } = props;

  return (
    <div className="message">
      <div className="avator"><img src={avator}></img></div>
      <div>
        {!fromMe && <span>{nickName}</span>}
        <div className="message-box">{message}</div>
      </div>
    </div>
  )
}