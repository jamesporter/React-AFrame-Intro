import {Entity} from 'aframe-react';
import React from 'react';

export default ({x=0,y=0,z=0, children}) => <Entity position={`${x} ${y} ${z}`}>
  {children}
</Entity>;
