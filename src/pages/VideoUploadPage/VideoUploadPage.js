import React from 'react';
import './VideoUploadPage.scss';
import uploadImage from '../../assets/Images/Upload-video-preview.jpg';
import { useNavigate } from 'react-router-dom';

function VideoUploadPage () {

    const navigate = useNavigate();

    const publishHandler = (event) => {
        event.preventDefault();
        alert('Video is uploaded');
        navigate('/');
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return (
        <section className='video-upload'>
            
            <form className='video-upload__container'>
                <span className='video-upload__container-header'>
                upload video 
                </span>
                <div className='video-upload__container-thumbnail'>
                    <span>video thumbnail</span>
                    <img className='video-upload__container-thumbnail--image' src={uploadImage} alt = 'upload video preview'/>
                </div>
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
                <button type='button' onClick={cancelHandler} className='video-upload__container-cancel'>
                        cancel
                </button>
                <button type='button' onClick={publishHandler} className='video-upload__container-publish'>
                        publish
                </button>

            </form>
            
        </section>
    );
}

export default VideoUploadPage;