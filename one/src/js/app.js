import 'aframe';
import 'babel-polyfill';
import {Scene, Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import BaseLights from './components/BaseLights';

class Starter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Scene>
      <Camera>
        <Cursor/>
      </Camera>
      <BaseLights/>
      <Sky/>
    </Scene>;
  }
}

ReactDOM.render(<Starter/>, document.querySelector('.scene-container'));
