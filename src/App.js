import land from "./land.png";
import sky from "./sky.jpg";
import rgif from "./react.gif";

import {Parallax, ParallaxLayer} from "@react-spring/parallax";

function App() {
  return (
    <div>
      <Parallax pages={4}>
        <ParallaxLayer 
          offset={0} 
          speed={1} 
          factor={2} 
          style={{
            backgroundImage: `url(${sky})`, 
            backgroundSize: 'cover',
            width: '100%'
          }}/>
          <ParallaxLayer 
            offset={2} 
            speed={1} 
            factor={4} 
            style={{
              backgroundImage: `url(${land})`, 
              backgroundSize: 'cover'
            }}/>
        <ParallaxLayer
          sticky={{ start: 0.9, end: 2.5 }}
          style={{ textAlign: 'center' }}
        >
          <img src={rgif} />
        </ParallaxLayer>
        <ParallaxLayer speed={0.05} offset={0.2}>
          <h2>Parallax Effect</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2}>
          <h2>Web development is fun</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
