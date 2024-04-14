import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import VideoSelected from './components/VideoSelected/VideoSelected';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VideoSelected/>} />
        <Route path="/video-player/:videoId" element={<VideoSelected />} />
        <Route path="/video-upload" element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
