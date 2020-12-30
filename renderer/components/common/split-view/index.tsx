import React, { useCallback, useRef, useEffect, useState } from 'react';
import Sash, { ISashEvent } from '../sash';

type Props = {
  horizontal?: boolean;
}

const SplitView: React.FC<Props> = (props) => {
  const [left, setLeft] = useState(0);
  const onChange = useCallback<(e: ISashEvent) => void>((e) => {
    let deltaX = e.currentX - e.startX;
    setLeft(deltaX);
  }, []);

  return (
    <div className="split-view">
      <div className="sash-container">
        <Sash horizontal={false} style={{ left: left }} onChange={onChange}></Sash>
      </div>
      <div className="view-container">
        {props.children}
      </div>
      <style jsx global> {`
      .split-view{
        position: relative;
        width: 100%;
        height: 100%;
      }
      .sash-container{
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .sash{
        position: absolute;
        touch-action: none;
      }
      .sash.vertical{
        width: 4px;
        height: 100%;
      }
      `}
      </style>
    </div>
  )
}

export default SplitView;
