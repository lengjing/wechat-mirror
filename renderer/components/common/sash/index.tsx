import React, { useCallback, useRef, useEffect, useState } from 'react';
import classNames from 'classnames';

export interface ISashEvent {
  startX: number;
  currentX: number;
  startY: number;
  currentY: number;
}

type Props = {
  horizontal?: boolean,
  onStart?: (e: ISashEvent) => any,
  onChange?: (e: ISashEvent) => any,
  onEnd?: (e: ISashEvent) => any,
  onReset?: (e: ISashEvent) => any,
  style?: object,
}

const Sash: React.FC<Props> = ({
  horizontal,
  onStart,
  onChange,
  onEnd,
  onReset,
  style
}) => {
  const savedEvent = useRef({
    startX: null,
    startY: null,
    target: null,
  });

  const [active, setActive] = useState(false);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    savedEvent.current.target = e.target;
    const startX = savedEvent.current.startX = e.pageX;
    const startY = savedEvent.current.startY = e.pageY;
    const startEvent: ISashEvent = { startX, startY, currentX: startX, currentY: startY };
    setActive(true);
    onStart && onStart(startEvent);
  }, []);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (savedEvent.current.target) {
      const startX = savedEvent.current.startX;
      const startY = savedEvent.current.startY;
      const currentX = e.pageX;
      const currentY = e.pageY;
      const event: ISashEvent = { startX, startY, currentX, currentY };

      onChange && onChange(event);
    }
  }, []);

  const onMouseUp = useCallback((e: MouseEvent) => {
    const startX = savedEvent.current.startX;
    const startY = savedEvent.current.startY;
    const currentX = e.pageX;
    const currentY = e.pageY;
    const event: ISashEvent = { startX, startY, currentX, currentY };

    setActive(false);
    onEnd && onEnd(event);
    savedEvent.current.target = null;
  }, []);

  const onDoubleClick = useCallback((e: React.MouseEvent) => {
    const startX = e.pageX;
    const startY = e.pageY;
    const event: ISashEvent = { startX, startY, currentX: startX, currentY: startY };

    onReset && onReset(event);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    }
  }, []);

  const cursor = horizontal ? 'row-resize' : 'col-resize';
  const classnames = classNames({
    sash: true,
    horizontal: horizontal,
    vertical: !horizontal,
    active: active,
  })

  return (
    <div
      className={classnames}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
      style={{ ...style, cursor }}>
      {active ? <style>{`* { cursor: ${cursor} !important; user-select: none; }`}</style> : null}
    </div>
  )
}

Sash.defaultProps = {
  horizontal: true,
}

export default Sash;
