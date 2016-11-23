import {Entity} from 'aframe-react';
import React from 'react';

export default ({size = 1, colour = "#DD8800"}) => <Entity geometry={`primitive: box; width: ${size}, height: ${size}, depth: ${size}`}
    material={{color: colour, shader: 'flat'}}
  />;
