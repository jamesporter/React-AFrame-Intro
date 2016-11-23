import 'aframe';
import 'babel-polyfill';
import {Scene, Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import Cube from './components/InteractiveCube';
import Sphere from './components/Sphere';
import Translation from './components/Translation';
import BaseLights from './components/BaseLights';

import {generateLocations} from './randomise'

class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: generateLocations(30)
    };
  }

  render() {
    return <Scene>
      <Camera>
        <Cursor/>
      </Camera>
      <BaseLights/>

      {this.state.locations.map((loc, idx) => <Translation {...loc}>
        <Cube size={2} colour="#336699" onClick={() => this.removeCube(idx)}/>
      </Translation>)}

      <Sky/>
    </Scene>;
  }

  removeCube(idx){
    this.setState({
      locations: [...this.state.locations.slice(0, idx), ...this.state.locations.slice(idx + 1)]
    })
  }
}

ReactDOM.render(<Starter/>, document.querySelector('.scene-container'));
