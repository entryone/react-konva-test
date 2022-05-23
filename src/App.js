import React, {useState} from "react";
import "./style.css";
import { Stage, Layer, Rect, Text } from "react-konva";


function ColoredRect () {


  
  
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={'red'}
        shadowBlur={5}
        onClick={() => {}}
      />
    );
  
}

export default function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" width={40} />
          <ColoredRect />
        </Layer>
      </Stage>
  );
}
