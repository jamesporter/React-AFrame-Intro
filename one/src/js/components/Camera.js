import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity camera="" look-controls="" wasd-controls="" {...props} position="0 0 0.75"/>
  </Entity>
);
