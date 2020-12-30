import React, { useState, useRef, useCallback } from 'react';
import Sash, { ISashEvent } from '../sash';

type Props = {
  children?: React.ReactNode,
  minSize: number,
  maxSize: number,
  defaultSize: number,
  onChange?: Function,
  flexible?: boolean,
  style?: object,
}

// todo: 
// 
const ListView: React.FC<Props> = ({
  minSize,
  maxSize,
  children,
  onChange,
  defaultSize,
  style,
}) => {
  const currentSize = useRef(defaultSize);
  const [size, setSize] = useState(defaultSize);

  const _onChange = useCallback<(e: ISashEvent) => void>((e) => {
    let deltaX = e.currentX - e.startX;
    let newSize = deltaX > 0
      ? Math.min(currentSize.current + deltaX, maxSize)
      : Math.max(currentSize.current + deltaX, minSize);

    setSize(newSize);
    onChange && onChange();
  }, []);

  const onReset = useCallback(() => {
    if (currentSize.current !== defaultSize) {
      onChange && onChange();
    }

    setSize(defaultSize);
    currentSize.current = defaultSize;
  }, []);

  const onEnd = useCallback((e: ISashEvent) => {
    let deltaX = e.currentX - e.startX;
    let newSize = deltaX > 0
      ? Math.min(currentSize.current + deltaX, maxSize)
      : Math.max(currentSize.current + deltaX, minSize);

    currentSize.current = newSize;
  }, []);

  return (
    <div className="list-view" style={{ ...style, width: size, position: 'relative' }}>
      {children}
      <Sash
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
        }}
        onChange={_onChange}
        onReset={onReset}
        onEnd={onEnd}
        horizontal={false} />
    </div>
  )
}

ListView.defaultProps = {
  flexible: true
}

export default ListView;
