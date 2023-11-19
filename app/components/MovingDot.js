'use client'
import { useState } from 'react';
export default function MovingDot() {
  
  const [position, setPosition] = useState({
    x: -10,
    y: -10
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      onMouseLeave={e=>
        setPosition({
    x: -10,
    y: -10
  })
      }
      style={{
        // position: 'absolute',
        width: '100vw',
        height: '100vh',
        zIndex:'999999'
      }}>


      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(101,163,13)',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 15,
        height: 15,
      }} 
        />
    </div>
  );
}