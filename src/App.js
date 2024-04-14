import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import VideoUploadPage from './pages/VideoUploadPage/VideoUploadPage';

//test git repo renaming

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/video-player/:videoId" element={<HomePage />} />
        <Route path="/video-upload" element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
