import React from 'react';
import './VideoComments.scss';
import deleteIcon from '../../assets/Icons/icon-delete.svg';

function VideoComments ({id, comment, name, timestamp, timeDifference, deleteComment, videoId}) {

    const handleDelete = () => {
        deleteComment(videoId, id);
    } 

    return (
        <div className='comment__wrapper' id={id}>
            <div className='comment__wrapper-avatar'>

            </div>
            <div className='comment__wrapper-container'>
                <div className='comment__wrapper-container-date'>
                    <span className='comment__wrapper-container-date--user-name'>{name}</span>
                    <span className='comment__wrapper-container-date--relative-date'>
                        {timeDifference(Date.now(), timestamp)}
                    </span>
                </div>
                <div className='comment__wrapper-container-text'>
                    <span className='comment__wrapper-container-text--user-opinion'>
                        {comment}
                    </span>
                </div>
                
            </div>
            <img className='comment__wrapper-delete' src = {deleteIcon} alt = {'delete'} onClick={handleDelete} />
        </div>
    );
}

export default VideoComments;