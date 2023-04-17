# bekind


Starting local server:

In the root run
To test the sever run:

~~~
npm run server
~~~
Check on http://localhost:5000

If you recieve na error make sure that your ip is listed in the mongodb whitelist.


Testing the front-end server: 

In /client run 


'''npm start'''

Visit: http://localhost:3000



Video Player:

Use the VideoPlayer component in your application. For example, you can add it to a page like this:
javascript

'''
import React from 'react';
import VideoPlayer from './components/VideoPlayer';

const VIDEO_SOURCES = [
  {
    src: 'https://path/to/your/video1.mp4',
    type: 'video/mp4',
  },
  {
    src: 'https://path/to/your/video2.mp4',
    type: 'video/mp4',
  },
  {
    src: 'https://path/to/your/video3.mp4',
    type: 'video/mp4',
  },
];

const THUMBNAILS = [
  {
    src: 'https://path/to/your/thumbnail1.jpg',
    alt: 'Thumbnail 1',
  },
  {
    src: 'https://path/to/your/thumbnail2.jpg',
    alt: 'Thumbnail 2',
  },
];

const App = () => {
  return (
    <div>
      <VideoPlayer sources={VIDEO_SOURCES} thumbnails={THUMBNAILS} />
    </div>
  );
};

export default App;

'''


Replace https://path/to/your/videoX.mp4 and https://path/to/your/thumbnailX.jpg with the actual URLs of your video and thumbnail files.
