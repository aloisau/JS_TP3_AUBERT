import React from 'react';
import Fish from "./Fish.jsx"

// eslint-disable-next-line import/prefer-default-export
export const ExerciseThreePage = () => {
  const [size, setSize] = React.useState(2);
  return (
    <main>

      <button onClick = {setSize( size+1)}>-</button>
      <button onClick = {setSize (size-1)}>+</button>
      <Fish>
        size = {size}
      </Fish>

    </main>
  )
};
