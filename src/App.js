import React, {useState} from 'react';
import './assets/index.css';
import './assets/app.css';
import splashImage from './assets/images/boat.png';
import splashImage2 from './assets/images/alley.png';
import ReactFullpage from '@fullpage/react-fullpage';
import Drawer from './components/Drawer';

import { ReactComponent as HamburgerIcon } from './assets/icons/hamburger.svg'

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleHandler = () => {
    setDrawerOpen((prevState) => !prevState);
  }

  return (
    <div className="App">
      
      <HamburgerIcon className="fixed m-8 md:m-12 top-0 right-0 z-10" onClick={drawerToggleHandler}></HamburgerIcon>
      <Drawer open={drawerOpen} toggle={drawerToggleHandler}></Drawer>

      <ReactFullpage
        //fullpage options
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        navigation
        navigationPosition={'left'}
        navigationTooltips={['firstSlide', 'secondSlide']}
        showActiveTooltip
        anchors={['firstPage', 'secondPage']}
        render={({ state, fullpageApi }) => {
          return (
            <React.Fragment>

              <ReactFullpage.Wrapper>

                <div className="section">

                  <div className="flex flex-col-reverse md:flex-row h-full">

                    <div className="p-8 md:w-1/2 h-full flex flex-col items-center justify-center">
                      <div className='text-center flex flex-col items-center max-w-sm'>
                        <h1 className="font-display text-4xl md:text-5xl mb-3 md:mb-8" >Explore Venice</h1>
                        <p className="font-body text-sm md:text-base text-gray-700 font-light mb-4 md:mb-8 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800 ">Get Started</button>
                      </div>
                    </div>

                    <div className="p-8 md:w-1/2 h-100 h-full bg-blue-500 bg-cover bg-right" style={{ backgroundImage: `url(${splashImage})`, backgroundPosition: 'right 12% bottom 0' }}>

                    </div>

                  </div>
                </div>

                <div className="section">

                  <div className="flex flex-col-reverse md:flex-row h-full">

                    <div className="p-8 md:w-1/2 h-full flex flex-col items-center justify-center">
                      <div className='text-center flex flex-col items-center max-w-sm'>
                        <h1 className="font-display text-4xl md:text-5xl mb-3 md:mb-8" >Vibrant Communities</h1>
                        <p className="font-body text-sm md:text-base text-gray-700 font-light mb-4 md:mb-8 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800 ">Get Started</button>
                      </div>
                    </div>

                    <div className="p-8 md:w-1/2 h-100 h-full bg-blue-500 bg-cover bg-right" style={{ backgroundImage: `url(${splashImage2})`, backgroundPosition: 'left 12% bottom 0' }}>

                    </div>

                  </div>
                </div>

              </ReactFullpage.Wrapper>
            </React.Fragment>
          );
        }}
      />

    </div>
  );
}

export default App;
