import 'aframe';
import 'babel-polyfill';
import {Scene, Entity} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';
import Box from './components/Box';
import Translation from './components/Translation';
import BaseLights from './components/BaseLights';

import {generateWalk} from './randomise'

class Starter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: generateWalk(26)
    };
  }

  render() {
    return <Scene>
      <Camera>
        <Cursor/>
      </Camera>
      <BaseLights/>

      <Translation z={-3}>
        {this.state.data.map((value, idx) => {
          const loc = {
            x: idx - 13,
            y: value/4 - 5,
            z: -8 * Math.cos(idx/26 * 3.14 - 3.14/2)
          };

          //never do this!
          const i = idx + 1.0;
          const pad = n => n < 10 ? "0" + Math.round(n) : Math.round(n);
          const colour = "#" + pad(33 * i/13) + pad(66 * i/26) + pad(99 * i/26);

          return <Translation {...loc}>
            <Box height={value/2} width={0.8} depth={0.2} colour={colour} />
          </Translation>
        })}
      </Translation>

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
