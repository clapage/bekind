import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';



const VIDEO_SOURCE = [
  {
    src: 'https://vjs.zencdn.net/v/oceans.mp4',
    type: 'video/mp4',
  },
];

const THUMBNAIL1_SOURCE = [
  {
    src: 'https://example.com/thumbnail1.mp4',
    type: 'video/mp4',
  },
];

const THUMBNAIL2_SOURCE = [
  {
    src: 'https://example.com/thumbnail2.mp4',
    type: 'video/mp4',
  },
];

const LandingPage = () => {
  return (
      <>
      <NavBar />
      <div className="landing">
      <h1>Welcome to MeKindly</h1>
      <h2>Where you will discover more about yourself</h2>
      <VideoPlayer
        sources={VIDEO_SOURCE}
        thumbnails={[THUMBNAIL1_SOURCE, THUMBNAIL2_SOURCE]}
      />
    </div>
    </>
  );
};

export default LandingPage;

/*
//Working homepage
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import NavBar from '../../components/NavBar/NavBar';

// This imports the functional component from the previous sample.
import VideoJS from '../../components/VideoPlayer/VideoPlayer';

const LandingPage = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'https://vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <NavBar />
      <h1>Welcome to MeKindly</h1>
      <h2>Where you will discover more about yourself</h2>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </>
  );
}

export default LandingPage;
*/