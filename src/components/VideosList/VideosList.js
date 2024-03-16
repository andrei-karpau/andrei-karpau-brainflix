import React from 'react';
import Video from '../Video/Video';
import './VideosList.scss';

function VideosList ({propsFromVideoInfoSection}) {
    
    const {videos, activeVideo, changeActiveVideo, changeActiveDetails} = propsFromVideoInfoSection;
    const filtered = videos.filter(video => video.id !== activeVideo.id);

    return (
        <article className='container-list'>
            <span className='container-list__header'>next videos</span>
            {filtered.map((video) => (
                <Video
                    key = {video.id}
                    id = {video.id}
                    title = {video.title}
                    image = {video.image}
                    channel = {video.channel}
                    // activeVideo = {activeVideo}
                    changeActiveVideo = {changeActiveVideo}
                    changeActiveDetails = {changeActiveDetails}
                />
            ))}
        </article>
    );
}

export default VideosList;