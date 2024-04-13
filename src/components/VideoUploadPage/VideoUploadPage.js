import React from 'react';
import './VideoUploadPage.scss';
import uploadImage from '../../assets/Images/Upload-video-preview.jpg'

function VideoUploadPage () {

    return (
        <section className='video-upload'>
            
            <div className='video-upload__container'>
                <span className='video-upload__container-header'>
                upload video 
                </span>
                <label className='video-upload__container-thumbnail'>
                    <span>video thumbnail</span>
                    <img className='video-upload__container-thumbnail--image' src={uploadImage} alt = 'upload video preview'/>
                </label>
                <div  className='video-upload__container-wrapper'>
                    <label className='video-upload__container-wrapper-label'>
                        <span>title your video</span>
                        <input className='video-upload__container-wrapper-label--input' name='video-title' placeholder='Add a title to your video'>
                        </input>
                    </label>
                    <label className='video-upload__container-wrapper-label'>
                        <span>add a video description</span>
                        <textarea className='video-upload__container-wrapper-label--textarea' name='video-description' placeholder='Add a description to your video'>
                        </textarea>
                    </label>
                </div>
                <button type='button' className='video-upload__container-cancel'>
                        cancel
                </button>
                <button type='button' className='video-upload__container-publish'>
                        publish
                </button>

            </div>
            
        </section>
    );
}

export default VideoUploadPage;