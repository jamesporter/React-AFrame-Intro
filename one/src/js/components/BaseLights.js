import {Entity} from 'aframe-react';
import React from 'react';

export default props => {
  const intensity = Math.max(0.0, (1.0 - props.time) * 0.4);
  return (
    <Entity>
      <Entity light={{type: 'directional', intensity}} position={[0, -1, 1]}/>
    </Entity>
  )
};