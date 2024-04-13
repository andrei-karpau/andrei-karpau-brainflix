import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header';
import VideoInfoSection from './components/VideoInfoSection/VideoInfoSection';
import VideoSelected from './components/VideoSelected/VideoSelected';

const apiKey = 'api_key=22094491-ef19-4361-bf15-b34fe3402f2b';
const apiUrl = 'https://project-2-api.herokuapp.com/';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [videoList, setVideoList] = useState([]);
  const [activeVideo, setActiveVideo] = useState([]);
  const [activeDetails, setActiveDetails] = useState([]);

  const getVideos = async (id) => {
    try {
      const videosApi = await axios.get(`${apiUrl}videos?${apiKey}`);
      setActiveVideo(videosApi.data.filter(video => video.id === id));
      setVideoList(videosApi.data.filter(video => video.id !== id));
      const activeVideoDetails = await axios.get(`${apiUrl}videos/${id}?${apiKey}`);
      setActiveDetails(activeVideoDetails.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    getVideos('84e96018-4022-434e-80bf-000ce4cd12b8');
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {isLoading ? (<div>Loading...</div>) :
      (<div className="App">
        <Header 

        />
        <VideoSelected 
          activeVideo = {activeVideo[0]}
        />
        <VideoInfoSection
          getVideos = {getVideos} 
          videoList = {videoList}
          activeVideo = {activeVideo[0]}
          activeDetails = {activeDetails}
        />
      </div>)
      } 
    </div>
  );
}

export default App;
