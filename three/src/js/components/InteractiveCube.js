import {Entity} from 'aframe-react';
import React from 'react';

export default ({size = 1, colour = "#DD8800", onClick}) => <Entity
    geometry={`primitive: box; width: ${size}, height: ${size}, depth: ${size}`}
    material={{color: colour, shader: 'flat'}}
    onClick={onClick}
  />;