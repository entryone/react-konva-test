import React, { useState } from 'react';
import { Group, Rect, Text } from 'react-konva';

export function Cell({
  textAlign = 'left',
  text = '',
  x = 1,
  y = 1,
  width = 50,
  height = 27,
  backgroundColor = 'white'
}) {
  const [stroke, setStroke] = useState('black');
  const onMouseOver = () => {
    setStroke('red');
  };
  const onMouseOut = () => {
    setStroke('black');
  };
  return (
    <Group
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      clipX={x}
      clipY={y}
      clipWidth={width}
      clipHeight={height}
    >
      <Rect
        fill={backgroundColor}
        stroke={'red'}
        strokeWidth={1}
        x={x}
        y={y}
        width={width}
        height={height}
        shadowEnabled={false}
      />
      <Text
        stroke={stroke}
        align={textAlign}
        x={x}
        y={y}
        height={height}
        verticalAlign={'middle'}
        fontSize={48}
        tooltip="fff"
        text={text}
        width={width}
        wrap={'none'}
      />
    </Group>
  );
}
