import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Video from '../Video/Video';
import './VideosList.scss';

function VideosList ({propsFromVideoInfoSection}) {
    
    const {videoId} = useParams();
    const {videoList, getVideos} = propsFromVideoInfoSection;

    return (
        <article className='container-list'>
            <span className='container-list__header'>next videos</span>
            {videoList.filter((element) => element.id !== videoId).map((video) => (
                <Link key = {video.id} to={`/video-player/${video.id}`}>
                    <Video
                        id = {video.id}
                        title = {video.title}
                        image = {video.image}
                        channel = {video.channel}
                        getVideos = {getVideos}
                    />
                </Link>
            ))}
        </article>
    );
}

export default VideosList;