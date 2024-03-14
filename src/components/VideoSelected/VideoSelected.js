import React from "react";
import './VideoSelected.scss'

function VideoSelected (props) {

    return (
        <section className='selected-video'>
            <video className='selected-video__preview' controls = {true} poster = {props.activeVideo.image}></video>
        </section>
    )
}

export default VideoSelected;