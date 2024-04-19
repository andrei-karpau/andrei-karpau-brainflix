import React from 'react';
import './Video.scss';

function Video ({id, title, image, channel, getVideos}) {

    const clickHandler = () => {
        getVideos(id);
        window.scrollTo(0, 0);
    }

    return (
        <div className='list-wrapper' onClick={clickHandler}>
            <img className = 'list-wrapper__image' src = {image} alt = 'here could be video preview'></img>
            <div className='list-wrapper__text'>
                <span className='list-wrapper__text-title'>
                    {title}
                </span>
                <span className='list-wrapper__text-channel'>
                    {channel}
                </span>
            </div>
        </div>
    );
}

export default Video;