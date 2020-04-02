import React, { useState } from 'react';
import './assets/index.css';
import './assets/app.css';
import splashImage from './assets/images/boat.png';
import splashImage2 from './assets/images/alley.png';
import splashImage3 from './assets/images/cathedral.png';
import splashImage4 from './assets/images/building.png';
import ReactFullpage from '@fullpage/react-fullpage';
import Drawer from './components/Drawer';
import { ReactComponent as InfoIcon } from './assets/icons/info.svg'
import { ReactComponent as HamburgerIcon } from './assets/icons/hamburger.svg'
import InfoPanel from './components/infoPanel';

function App() {

  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerToggleHandler = () => {
    setDrawerOpen((prevState) => !prevState);
  }

  const [infoOpen, setInfoOpen] = useState(false);

  const infoToggleHandler = () => {
    setInfoOpen((prevState) => !prevState);
  }

  return (
    <div className="App">

      <HamburgerIcon className="fixed m-12 top-0 right-0 z-10" onClick={drawerToggleHandler}></HamburgerIcon>
      <Drawer open={drawerOpen} toggle={drawerToggleHandler}></Drawer>

      <ReactFullpage
        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={800}
        navigation
        navigationPosition={'left'}
        navigationTooltips={['firstSlide', 'secondSlide']}
        showActiveTooltip
        anchors={['Explore', 'Communities', 'History', 'Attractions', 'Book']}
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
                        <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800" onClick={() => fullpageApi.moveSectionDown()}>Get Started</button>
                      </div>
                    </div>

                    <div className="p-8 md:w-1/2 h-100 h-full bg-cover bg-right" style={{ backgroundImage: `url(${splashImage})`, backgroundPosition: 'right 12% bottom 0' }}>

                    </div>

                  </div>
                </div>

                <div className="section">

                  <div className="flex flex-col-reverse md:flex-row h-full">

                    <div className="p-12 md:w-1/2 h-full flex flex-col items-center justify-center">
                      <div className='text-center flex flex-col items-center max-w-sm'>
                        <h1 className="font-display text-4xl md:text-5xl mb-3 md:mb-8" >Vibrant<br />Communities</h1>
                        <p className="font-body text-sm md:text-base text-gray-700 font-light mb-4 md:mb-8 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800 ">Get Started</button>
                      </div>
                    </div>

                    <div className="relative flex flex-col-reverse items-end p-12 md:w-1/2 h-100 h-full bg-cover bg-right" style={{ backgroundImage: `url(${splashImage2})`, backgroundPosition: 'left 12% bottom 0' }}>
                      <InfoIcon onClick={infoToggleHandler} className="z-10" style={{ width: '40px', height: '40px' }}></InfoIcon>
                      <InfoPanel open={infoOpen} title="Venetian Waterways">
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </InfoPanel>
                    </div>

                  </div>
                </div>

                <div className="section">

                  <div className="flex flex-col-reverse md:flex-row h-full">

                    <div className="p-12 md:w-1/2 h-full flex flex-col items-center justify-center">
                      <div className='text-center flex flex-col items-center max-w-sm'>
                        <h1 className="font-display text-4xl md:text-5xl mb-3 md:mb-8" >Romantic<br />History</h1>
                        <p className="font-body text-sm md:text-base text-gray-700 font-light mb-4 md:mb-8 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800 ">Get Started</button>
                      </div>
                    </div>

                    <div className="relative flex flex-col-reverse items-end p-12 md:w-1/2 h-100 h-full bg-cover bg-right" style={{ backgroundImage: `url(${splashImage3})`, backgroundPosition: 'left 12% bottom 0' }}>
                      <InfoIcon onClick={infoToggleHandler} className="z-10" style={{ width: '40px', height: '40px' }}></InfoIcon>
                      <InfoPanel open={infoOpen} title="Santa Maria della Salute">
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </InfoPanel>
                    </div>

                  </div>
                </div>

                <div className="section">

                  <div className="flex flex-col-reverse md:flex-row h-full">

                    <div className="p-12 md:w-1/2 h-full flex flex-col items-center justify-center">
                      <div className='text-center flex flex-col items-center max-w-sm'>
                        <h1 className="font-display text-4xl md:text-5xl mb-3 md:mb-8" >Breathtaking<br />Attractions</h1>
                        <p className="font-body text-sm md:text-base text-gray-700 font-light mb-4 md:mb-8 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800 ">Get Started</button>
                      </div>
                    </div>

                    <div className="relative flex flex-col-reverse items-end p-12 md:w-1/2 h-100 h-full bg-cover bg-right" style={{ backgroundImage: `url(${splashImage4})`, backgroundPosition: 'left 12% bottom 0' }}>
                      <InfoIcon onClick={infoToggleHandler} className="z-10" style={{ width: '40px', height: '40px' }}></InfoIcon>
                      <InfoPanel open={infoOpen} title="The Grand Canal">
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </InfoPanel>
                    </div>

                  </div>
                </div>

                <div className="section">

                  <div className="flex flex-col-reverse md:flex-row h-full">

                    <div className="p-12 md:w-1/2 h-full flex flex-col items-center justify-center">
                      <div className='text-center flex flex-col items-center max-w-sm'>
                        <h1 className="font-display text-4xl md:text-5xl mb-3 md:mb-8" >Book Now</h1>
                        <p className="font-body text-sm md:text-base text-gray-700 font-light mb-4 md:mb-8 max-w-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <button className="font-lora text-white py-2 px-12 rounded-full bg-gray-800 ">Get Started</button>
                      </div>
                    </div>

                    <div className="relative flex flex-col-reverse items-end p-12 md:w-1/2 h-100 h-full bg-cover bg-right">
                      <InfoPanel open solid title="Special thanks to">
                        <h2 className="font-display text-2xl mb-1">Nathaneal Down</h2>
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2 className="font-display text-2xl mb-1">Dianne Ameter</h2>
                        <p className="font-body text-sm md:text-base font-light mb-4 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                      </InfoPanel>
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
