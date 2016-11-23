import {Entity} from 'aframe-react';
import React from 'react';

export default () => <Entity light={{type: 'directional', intensity: 1}} position={[0, -1, 1]}/>;