import React, {useState} from "react";
import "./style.css";
import { Stage, Layer, Rect, Text } from "react-konva";


function Cell ({textAlign = 'left', text = '', x = 1, y = 1, width = 50, height = 27, fill='white'}) {
    return (<>
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
      <Text align={textAlign} x={x} y={y + 5} tooltip='fff' text={text} width={width} wrap={'none'} ellipsis  />
    </>);
  
}

export default function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer onWheel={() => {console.log('scroll')}} >
        <Cell text={'sdf sdf sdf sdf'} fill={'transparent'} />
        <Cell textAlign={'right'} y={28} width={200} text={'12345678903qewert'} fill={'transparent'} />
        
        </Layer>
      </Stage>
  );
}
