import React from 'react';
import Message from './Message';
import Sender from './sender';

export default function (props) {
  const { title, messages } = props;
  return (
    <div className="dialog">
      <div className="title">
        <h3>{title}</h3>
        <i></i>
      </div>
      <div className="content">
        {
          messages.map((message, index) =>
            <Message
              {...message}
              key={index}
            />)
        }
      </div>
      <Sender />
    </div>
  )
}