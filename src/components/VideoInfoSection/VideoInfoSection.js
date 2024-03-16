import React from 'react';
import './VideoInfoSection.scss';
import VideoList from '../VideosList/VideosList';
import VideoDetails from '../VideoDetails/VideoDetails';

function VideoInfoSection (props) {
    
    return (
        <section className='video-info'>
            <div className='video-info__container'>
                <VideoDetails
                    activeDetails = {props.activeDetails}
                />
                <VideoList 
                    propsFromVideoInfoSection = {props}
                />
            </div>
        </section>
    );
}

export default VideoInfoSection;

