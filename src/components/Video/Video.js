import React, { useEffect } from 'react';
import './Video.scss';

function Video (props) {

    const clickHandler = () => {
        props.changeActiveVideo(props.id, props.image);
    }

    useEffect(() => {
        // console.log(props.id);
        // props.changeActiveDetails(props.id);
    })

    return (
        <div className='list-wrapper' onClick={clickHandler}>
            <img className = 'list-wrapper__image' src = {props.image} alt = 'here could be video preview'></img>
            <div className='list-wrapper__text'>
                <span className='list-wrapper__text-title'>
                    {props.title}
                </span>
                <span className='list-wrapper__text-channel'>
                    {props.channel}
                </span>
            </div>
        </div>
    )
}

export default Video;