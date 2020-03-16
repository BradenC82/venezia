import React from 'react';
import './assets/index.css'
import splashImage from './assets/images/boat.png';

function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <div className="w-1/2 h-full">

        </div>
        <div className="w-1/2 h-full bg-blue-500 bg-cover bg-right" style={{backgroundImage:`url(${splashImage})`,backgroundPosition: 'right 12% bottom 0'}}>

        </div>
      </div>
    </div>
  );
}

export default App;
