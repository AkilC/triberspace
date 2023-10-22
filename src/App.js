import React from 'react';
import './index.css';

const App = () => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
      const videoElement = videoRef.current;
      if (videoElement) {
          videoElement.play();
      }
  }, []);
  return (
    <div className="container">
      <div className="video-background">
      <video ref={videoRef} autoPlay loop muted playsInline>
          <source src="/assets/WallBG.mp4" type="video/mp4" />
      </video>
        <div className="video-overlay"></div>
      </div>
      {/* Header */}
      <div className="header">
        <div className="logo" /* style={{backgroundImage: "url('/assets/TribeT.png')"}} */></div>
        <div className="button-group">
          <button className="button button-outline">Log In</button>
          <button className="button button-filled">Sign Up</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Title and Body */}
        <div className="text-section">
          <h1 className="large-title">triber.space</h1>
          <p className="body-copy">Find your tribe across a universe of immersive content worlds.</p>
        </div>
        
        {/* Tiles */}
        <div className="tiles">
        <a href="https://v2.triber.space" className="tile-container">
          <div className="tile" style={{backgroundImage: "url('/assets/V2Thumbnail.png')"}}></div>
          <h3>V2 World (Demo)</h3>
        </a>
        <a href="#" className="tile-container">
          <div className="tile" style={{backgroundImage: "url('/assets/ComingSoonV2.png')"}}></div>
          <h3>Beloved. World</h3>
        </a>
        <a href="#" className="tile-container">
          <div className="tile" style={{backgroundImage: "url('/assets/ComingSoonV2.png')"}}></div>
          <h3>Ajaar World</h3>
        </a>
      </div>
      </div>
      <div className="footer-text">
        BY <a href='https://triberstudios.com'>TRIBER STUDIOS!</a>
      </div>
    </div>
  );
};

export default App;
