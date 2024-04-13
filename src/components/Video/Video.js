import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import './Video.scss';

function Video ({id, title, image, channel, getVideos}) {

    const clickHandler = () => {
        getVideos(id);
        window.scrollTo(0, 0);
    }

    return (
        <Link to={`/video-player/${id}`}>
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
        </Link>
    );
}

export default Video;