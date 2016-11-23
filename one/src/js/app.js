import 'aframe';
import 'babel-polyfill';
import {Scene, Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import Cube from './components/Cube';
import Sphere from './components/Sphere';
import Translation from './components/Translation';
import BaseLights from './components/BaseLights';

class Starter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Scene>
      <Camera>
        {/*<Cursor/>*/}
      </Camera>
      <BaseLights/>

      <Translation x={-2} y={-1} z={-2}>
        <Cube size={2}/>
        {/*<Sphere size={1}/>*/}
      </Translation>

      <Translation x={2} y={-1} z={-2}>
        <Cube size={2} colour="#336699"/>
      </Translation>
      <Sky/>
    </Scene>;
  }
}

ReactDOM.render(<Starter/>, document.querySelector('.scene-container'));
