import React, { useState }  from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Videos from './data/videos.json';
import VideoDetails from './data/video-details.json';
import VideoInfoSection from './components/VideoInfoSection/VideoInfoSection';
import VideoSelected from './components/VideoSelected/VideoSelected';

const initialDetails = (activeVideoId) => VideoDetails.filter(details => details.id === activeVideoId);
const initialVideoList = (activeVideoId) => Videos.filter(video => video.id !== activeVideoId);

function App() {
  
  const [activeVideo, setActiveVideo] = useState(Videos[0]);
  const [activeDetails, setActiveDetails] = useState(initialDetails(activeVideo.id));
  const [videoList, setVideoList] = useState(initialVideoList(activeVideo.id));

  const changeActiveVideo = (videoID, videoImage) => {
    setActiveVideo(
      {
        id: videoID,
        image: videoImage
      }
    );
    setActiveDetails(VideoDetails.filter(details => details.id === videoID));
    setVideoList(Videos.filter(video => video.id !== videoID));
  }

  return (
    <div className="App">
      <Header 

      />
      <VideoSelected 
        activeVideo = {activeVideo}
      />
      <VideoInfoSection 
        videoList = {videoList}
        activeVideo = {activeVideo}
        changeActiveVideo = {changeActiveVideo}
        activeDetails = {activeDetails}
      />
    </div>
  );
}

export default App;
