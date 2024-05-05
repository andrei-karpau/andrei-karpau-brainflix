import React, { useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './HomePage.scss';
import VideoInfoSection from '../../components/VideoInfoSection/VideoInfoSection';

const apiUrl = 'http://localhost:8080/videos';
let initialVideoId = '84e96018-4022-434e-80bf-000ce4cd12b8';

function HomePage () {

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [videoList, setVideoList] = useState([]);
    const [activeVideo, setActiveVideo] = useState([]);
    const [activeDetails, setActiveDetails] = useState([]);

    const getVideos = async (id) => {
        try {
            const videosApi = await axios.get(`${apiUrl}`);
            setActiveVideo(videosApi.data.filter(video => video.id === id));
            setVideoList(videosApi.data.filter(video => video.id !== id));
            setActiveDetails(videosApi.data.filter(video => video.id === id));
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    const {videoId} = useParams();

    useEffect(() => {
        getVideos(videoId ? videoId : initialVideoId);
    }, [videoId]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
        {isLoading ? (<div>Loading...</div>) :
            (<>
                <section className='selected-video'>
                    <video className='selected-video__preview' controls={true} poster={activeVideo[0].image}></video>
                </section>
                <VideoInfoSection
                    getVideos = {getVideos} 
                    videoList = {videoList}
                    activeVideo = {activeVideo[0]}
                    activeDetails = {activeDetails[0]}
                    setActiveDetails = {setActiveDetails}
                />
            </>)
        }
        </div>
    );
}

export default HomePage;