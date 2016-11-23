import {Entity} from 'aframe-react';
import React from 'react';

export default ({height, width, depth, colour = "#DD8800", onClick}) => <Entity
    geometry={`primitive: box; width: ${width}; height: ${height}; depth: ${depth}`}
    material={{color: colour, shader: 'flat'}}
    onClick={onClick}
  />;