import React, { useState } from 'react';
import Chat from './chat';

export default function (props) {
  const { chats } = props;
  const [activedIndex, setActivedIndex] = useState(-1);
  return (
    <div className="chats">
      {chats.map((chat, index) =>
        <Chat
          {...chat}
          key={index}
          active={activedIndex === index}
          onClick={() => { setActivedIndex(index) }}
        />)
      }
    </div>
  )
}
