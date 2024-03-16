import React from "react";
import './VideoSelected.scss'

function VideoSelected ({activeVideo}) {

    return (
        <section className='selected-video'>
            <video className='selected-video__preview' controls={true} poster={activeVideo.image}></video>
        </section>
    );
}

export default VideoSelected;