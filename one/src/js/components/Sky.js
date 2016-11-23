import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity geometry={{primitive: 'sphere', radius: 100}}
          material={{color: "#fff"}}
          scale="1 1 -1"/>
);
