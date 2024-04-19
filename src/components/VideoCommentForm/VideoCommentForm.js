import React, {useRef, useState} from "react";
import './VideoCommentForm.scss';
import avatar from '../../assets/Images/Mohan-muruge.jpg';

function VideoCommentForm ({activeDetails, postComment}) {

    const formRef = useRef();
    const [textField, setTextField] = useState('comment__form-label-input');

    const submitHandler = (event) => {
        event.preventDefault();

        const form = formRef.current;
        const commentText = form.comment.value;
        const comment = {'name':'Andrei Karpau', 'comment':commentText};

        if (!commentText) {
            // alert('please write a comment');
            setTextField('comment__form-label-input--empty');
            return
        }

        postComment(activeDetails.id, comment);
        setTextField('comment__form-label-input');
        form.reset();
    }

    return(
        <form ref={formRef} className='comment__form' id='comment' onSubmit={submitHandler}>
            <span>{activeDetails.comments.length} comments</span>
            <img className='comment__form-user-image' src={avatar} alt = 'here could be an avatar'/>
            <label className="comment__form-label">
                <span>join the conversation</span>
                <textarea className={textField} name="comment" placeholder="Add a new comment">
                </textarea>
            </label>
            <button className="comment__form-button">comment</button>
        </form>
    );
}

export default VideoCommentForm;