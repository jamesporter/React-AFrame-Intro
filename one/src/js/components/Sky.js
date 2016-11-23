import {Entity} from 'aframe-react';
import React from 'react';

export default props => <Entity geometry={{primitive: 'sphere', radius: 100}}
                                material={{color: "#63BFF9", shader: 'flat'}}
                                scale="1 1 -1" />;
