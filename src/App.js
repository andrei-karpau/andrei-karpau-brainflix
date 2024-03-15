import React, { useState }  from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Videos from './data/videos.json';
import VideoDetails from './data/video-details.json';
import VideoInfoSection from './components/VideoInfoSection/VideoInfoSection';
import VideoSelected from './components/VideoSelected/VideoSelected';



function App() {
  // eslint-disable-next-line
  const [videos, setVideos] = useState(Videos);
  // eslint-disable-next-line
  const [videoDetails, setVideoDetails] = useState(VideoDetails);

  const initialDetails = (id) => videoDetails.filter((details) => details.id === id);

  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [activeDetails, setActiveDetails] = useState(initialDetails(activeVideo.id));

  const changeActiveVideo = (videoID, videoImage) => {
    setActiveVideo({id: videoID, image: videoImage});
    setActiveDetails(videoDetails.filter((details) => details.id === videoID));
  };

  return (
    <div className="App">
      <Header />
      <VideoSelected 
        activeVideo = {activeVideo}
      />
      <VideoInfoSection 
        videos = {videos}
        activeVideo = {activeVideo}
        changeActiveVideo = {changeActiveVideo}
        videoDetails = {videoDetails}
        activeDetails = {activeDetails}
      />
    </div>
  )
}

export default App;
