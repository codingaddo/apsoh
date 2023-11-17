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
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
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