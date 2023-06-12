// Mobile Controls - Good but causing issues
import React, { useState, useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import IconButton from './tspace_components/components/IconButton';
import WelcomeScreen from './tspace_components/components/WelcomeScreen';
import { faThLarge, faUser, faCog } from '@fortawesome/free-solid-svg-icons';
import Overlay from './tspace_components/components/Overlay';
import './App.css';
import ThirdPersonCamera from './tspace_components/components/ThirdPersonCamera';
import { SocketProvider } from './tspace_components/contexts/SocketContext';
import Multiplayer from './tspace_components/components/Multiplayer';
import { LiveKitProvider } from './tspace_components/contexts/LiveKitContext';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScenesHandler from './scenes/ScenesHandler';
import WorldContextProvider from './tspace_components/contexts/WorldContext';
import MobileJoystick from './tspace_components/components/MobileControls';
import Loading from './tspace_components/components/Loading';

const App = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  const characterRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const key = useMemo(() => location.pathname, [location]);

  const [joystickData, setJoystickData] = useState(null);

  const handleJoystickMove = (data) => {
    if (data === null) {
      setJoystickData(null);
    } else {
      const angle = data.angle.radian;
      const force = data.force;
      setJoystickData({ angle, force });
    }
  };

  const handleIconClick = (iconName) => {
    if (iconName === 'thlarge') {
      setIsOverlayOpen(!isOverlayOpen);
    } else {
      console.log(`Icon ${iconName} clicked.`);
    }
  };

  return (
    <LiveKitProvider>
      <SocketProvider>
          <WorldContextProvider>
            <div className="app-container">
              <Canvas  gl={{ stencil: true }} key={key} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}>
                {/* <Scene1/> */}
                <ScenesHandler characterRef={characterRef} />
                {/* <OrbitControls enabled={true} /> */}
                <ThirdPersonCamera characterRef={characterRef} joystickData={joystickData}/>
                {/* <Stars/> */}
                <Multiplayer />
              </Canvas>
              {isLoading && <Loading onLoadComplete={() => setIsLoading(false)} />}
              {/* {showWelcomeScreen && <WelcomeScreen onEnter={() => setShowWelcomeScreen(false)} />} */}
              <MobileJoystick onJoystickMove={(data) => handleJoystickMove(data)} />
              <div className="icon-container">
                <IconButton icon={faCog} onClick={() => handleIconClick('cog')} />
                <IconButton icon={faUser} onClick={() => handleIconClick('user')} />
                <IconButton icon={faThLarge} onClick={() => handleIconClick('thlarge')} />
              </div>
              {isOverlayOpen && <Overlay onClose={() => setIsOverlayOpen(false)} />}
            </div>
          </WorldContextProvider>
      </SocketProvider>
    </LiveKitProvider>
  );
};

export default App;
