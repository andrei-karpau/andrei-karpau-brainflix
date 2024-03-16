import React from 'react';
import Video from '../Video/Video';
import './VideosList.scss';

function VideosList ({propsFromVideoInfoSection}) {
    
    const {videoList, changeActiveVideo, changeActiveDetails} = propsFromVideoInfoSection;

    return (
        <article className='container-list'>
            <span className='container-list__header'>next videos</span>
            {videoList.map((video) => (
                <Video
                    key = {video.id}
                    id = {video.id}
                    title = {video.title}
                    image = {video.image}
                    channel = {video.channel}
                    changeActiveVideo = {changeActiveVideo}
                    changeActiveDetails = {changeActiveDetails}
                />
            ))}
        </article>
    );
}

export default VideosList;