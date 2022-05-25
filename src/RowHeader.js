import React, { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';
import {Cell} from './Cell'

export function RowHeader({
  textAlign,
  text,
  x,
  y,
  width,
  height,
  backgroundColor = 'gray'
}) {
  const [stroke, setStroke] = useState('black');
  const onMouseOver = () => {
    setStroke('red');
  };
  const onMouseOut = () => {
    setStroke('black');
  };
  return (
    <Cell
    textAlign={'left'}
    text={text}
    x={x}
    y={y}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    />
  );
}
