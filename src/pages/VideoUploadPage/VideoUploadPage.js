import React, {useRef, useState} from 'react';
import axios from 'axios';
import './VideoUploadPage.scss';
import uploadImage from '../../assets/Images/Upload-video-preview.jpg';
import { useNavigate } from 'react-router-dom';

const apiUrl = 'http://localhost:8080';

function VideoUploadPage () {

    const navigate = useNavigate();
    const formRef = useRef();
    const [inputClass, setInputClass] = useState('video-upload__container-wrapper-label--input');
    const [textAreaClass, setTextAreaClass] = useState('video-upload__container-wrapper-label--textarea');

    const postVideo = async (video) => {
        try {
            await axios.post(`${apiUrl}`, video);
        } catch (error) {
            console.log(error);
        }
    }

    const publishHandler = (event) => {
        event.preventDefault();

        const form = formRef.current;
        const videoTitle = form.videoTitle.value;
        const videoDescription = form.videoDescription.value;
        const emptyTitle = 'video-upload__container-wrapper-label--input--empty';
        const emptyDescription = 'video-upload__container-wrapper-label--textarea--empty';

        if (!videoTitle && !videoDescription) {
            setInputClass(emptyTitle);
            setTextAreaClass(emptyDescription);
            return
        } else if (!videoTitle) {
            setInputClass(emptyTitle);
            return
        } else if (!videoDescription) {
            setTextAreaClass(emptyDescription);
            return
        }
        
        const videoUpload = {'title':videoTitle, 'description':videoDescription, 'image': uploadImage};

        postVideo(videoUpload);
        alert('Video is uploaded');
        navigate('/');
    }

    const cancelHandler = (event) => {
        event.preventDefault();
        navigate('/');
    }

    return (
        <section className='video-upload'>
            
            <form ref={formRef} className='video-upload__container'>
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
                        <input className={inputClass} name='videoTitle' placeholder='Add a title to your video'>
                        </input>
                    </label>
                    <label className='video-upload__container-wrapper-label'>
                        <span>add a video description</span>
                        <textarea className={textAreaClass} name='videoDescription' placeholder='Add a description to your video'>
                        </textarea>
                    </label>
                </div>
                <div className='video-upload__container-delimiter'>
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