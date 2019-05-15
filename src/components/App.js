import React from 'react';
import Colors from './Colors';

const colorArr = [
  { name: 'red', rgb: { red: 255, green: 0, blue: 0 } },
  { name: 'sky blue', rgb: { red: 135, green: 206, blue: 235 } },
  { name: 'green', rgb: { red: 0, green: 255, blue: 0 } },
  { name: 'blue', rgb: { red: 0, green: 0, blue: 255 } },
];

export default function App() {
  return (
    <>
      <Colors colors={colorArr}/>
    </>
  );
}
