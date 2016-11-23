import {Entity} from 'aframe-react';
import React from 'react';

export default ({x,y,z, children}) => <Entity position={`${x} ${y} ${z}`}>
  {children}
</Entity>;
