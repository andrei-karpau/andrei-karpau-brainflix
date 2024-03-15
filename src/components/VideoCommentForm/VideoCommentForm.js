import React from "react";
import './VideoCommentForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function VideoCommentForm ({commentsCount}) {

    const submitHandler = (event) => {
        event.preventDefault();
    }

    return(
        <form className='comment__form' name='comment' id='comment' onSubmit={submitHandler}>
            <span>{commentsCount} comments</span>
            <img className='comment__form-user-image' src={avatar} alt = 'here could be an avatar'/>
            <label className="comment__form-label">
                <span>join the conversation</span>
                <textarea className="comment__form-label-input" name="comment-text" placeholder="Add a new comment">
                </textarea>
            </label>
            <button className="comment__form-button">comment</button>
        </form>
    )
}

export default VideoCommentForm;