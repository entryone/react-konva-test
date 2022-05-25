import React, { useState } from "react";
import { Group, Rect, Text } from "react-konva";

export function Cell ({
  textAlign = 'left',
  text = '',
  x = 1,
  y = 1,
  width = 50,
  height = 27,
  fill='white'}) {
    
    return (<Group
      clipX={x}
      clipY={y}
      clipWidth={width}
      clipHeight={height}>
      <Rect
        stroke={'green'}
        strokeWidth={0.5}
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        shadowEnabled={false}
      />
      <Text
      align={textAlign}
      x={x}
      y={y}
      height={height}
      verticalAlign={'middle'}
      fontSize={38}
      tooltip='fff'
      text={text}
      width={width}
      wrap={'none'}   />
    </Group>);
  
}