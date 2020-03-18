import React from 'react';
import './assets/index.css'
import splashImage from './assets/images/boat.png';
import ReactFullpage from '@fullpage/react-fullpage';

function App() {
  return (
    <div className="App">

      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */

        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">

                <div className="flex h-screen">
                  <div className="w-1/2 h-full flex flex-col items-center ">
                    {/* <p>Section 1 (welcome to fullpage.js)</p>
                      <button onClick={() => fullpageApi.moveSectionDown()}>
                        Click me to move down
                      </button> */}
                    <div className='mx-auto text-center max-w-sm mt-56'>
                      <h1 className="font-display text-5xl mb-8" >Explore Venice</h1>
                      <p className="font-body text-base text-gray-700 font-light mb-8 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800 ">Get Started</button>
                    </div>
                  </div>
                  
                  <div className="w-1/2 h-full bg-blue-500 bg-cover bg-right" style={{ backgroundImage: `url(${splashImage})`, backgroundPosition: 'right 12% bottom 0' }}>

                  </div>
                </div>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />

    </div>
  );
}

export default App;
