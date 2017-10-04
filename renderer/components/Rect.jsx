import React from 'react';

const Rect = ({ x, y, width, height }) => (
  <div
    style={{
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      border: 'solid 1px #ddd'
    }}
  />
);

export default Rect;
