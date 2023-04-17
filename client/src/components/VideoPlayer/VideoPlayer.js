import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ sources, thumbnails }) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);

  React.useEffect(() => {
    const videoElement = document.createElement('video-js');
    videoElement.classList.add('vjs-big-play-centered');
    videoRef.current.appendChild(videoElement);

    const player = (playerRef.current = videojs(
      videoElement,
      { controls: true, sources },
      () => {
        console.log('player is ready');
      }
    ));

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [sources]);

  const handleThumbnailClick = (source) => {
    if (playerRef.current) {
      playerRef.current.src(source);
    }
  };

  return (
    <div>
      <div className="video-wrapper">
      <div data-vjs-player>
        <div ref={videoRef} />
      </div>
      </div>
      <div className="thumbnails">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className="thumbnail"
            onClick={() => handleThumbnailClick(thumbnail.sources)}
          >
            <video
              className="video-js vjs-default-skin"
              controls
              src={thumbnail.src}
              type={thumbnail.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;

/*
//Working video player
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const {options, onReady} = props;

  React.useEffect(() => {

    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode. 
      const videoElement = document.createElement("video-js");

      videoElement.classList.add('vjs-big-play-centered');
      videoRef.current.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        onReady && onReady(player);
      });

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
}

export default VideoJS;
*/

/*
//not working
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import './VideoPlayer.css';

function VideoPlayer({ sources }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      playerRef.current = videojs(videoRef.current, {
        sources,
      }, () => {
        console.log('Video player is ready');
      });
    }
  
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [sources, videoRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered"></video>
    </div>
  );
}

export default VideoPlayer;
*/

/*

First version

import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import '@videojs/http-streaming';

const VideoPlayer = ({ sources, thumbnails }) => {
  const videoRef = useRef();

  useEffect(() => {
    const player = videojs(videoRef.current, { controls: true });
    player.src(sources[0]);

    const onThumbnailClick = (index) => {
      player.src(sources[index]);
    };

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => onThumbnailClick(index));
    });

    return () => {
      player.dispose();
    };
  }, [sources, thumbnails]);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js"></video>
      </div>
      <div className="thumbnails">
        {thumbnails.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail.src}
            alt={thumbnail.alt}
            className="thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayer;
*/