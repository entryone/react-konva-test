import React, {useState} from "react";
import "./style.css";
import { Stage, Layer } from "react-konva";
import { Cell } from './Cell'
import { RowHeader } from './RowHeader'

export default function App() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer onWheel={() => {console.log('scroll')}} >
        <Cell backgroundColor={'blue'} text={'[sdf sdf sdf sdf]'} fill={'transparent'} />
        <RowHeader textAlign={'right'} y={28} width={110} text={'[12345678903qewert]'} fill={'transparent'} />
        
        </Layer>
      </Stage>
  );
}

// API https://konvajs.org/api/Konva.html