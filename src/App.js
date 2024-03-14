// within some actions <iframe> pops-up and cover all the app:( only page reload helps:(
import React, { useState }  from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Videos from './data/videos.json';
import VideoDetails from './data/video-details.json';
import VideoInfoSection from './components/VideoInfoSection/VideoInfoSection';
import VideoSelected from './components/VideoSelected/VideoSelected';



function App() {
  const [videos, setVideos] = useState(Videos);
  const [videoDetails, setVideoDetails] = useState(VideoDetails);

  const initialDetails = (id) => videoDetails.filter((details) => details.id === id);

  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [activeDetails, setActiveDetails] = useState(initialDetails(activeVideo.id));

  const changeActiveVideo = (videoID, videoImage) => {
    setActiveVideo({id: videoID, image: videoImage});
    setActiveDetails(videoDetails.filter((details) => details.id === videoID));
  };

  //I do not understand how to call it!!! I use .filter over props with videos in VideoList and feel like it is not the best way
  const removeSelected = (id) => {
    const newArray = videos.filter((video) => video.id !== id);
    setVideos(newArray);
  };


  return (
    <div className="App">
      <Header />
      <VideoSelected 
        activeVideo = {activeVideo}
      />
      <VideoInfoSection 
        videos = {videos}
        removeSelected = {removeSelected}
        activeVideo = {activeVideo}
        changeActiveVideo = {changeActiveVideo}
        videoDetails = {videoDetails}
        activeDetails = {activeDetails}
      />
    </div>
  );
}

export default App;
