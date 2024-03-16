import React from "react";
import './VideoDetails.scss';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';
import VideoComments from "../VideoComments/VideoComments";
import VideoCommentForm from "../VideoCommentForm/VideoCommentForm";

function VideoDetails ({activeDetails}) {

    const [details] = activeDetails;

    const timeDifference = (current, previous) => {
        let msPerMinute = 60 * 1000;
        let msPerHour = msPerMinute * 60;
        let msPerDay = msPerHour * 24;
        let msPerMonth = msPerDay * 30;
        let msPerYear = msPerDay * 365;
    
        let elapsed = current - previous;
    
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        } else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        } else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        } else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
        } else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
        } else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    };

    const timestamp = details.timestamp;

    return (
        <article className='container-details'>
            <span className='container-details__header'>
                {details ? details.title : 'something went wrong with details:('}
            </span>
            <div className='container-details__wrapper'>
                <div className='container-details__wrapper-date'>
                    <span>
                        {'by ' + details.channel}
                    </span>
                    <span>
                        {timeDifference(Date.now(), timestamp)}
                    </span>
                </div>
                <div className='container-details__wrapper-views'>
                    <div>
                        <img src = {viewsIcon} alt = {'views'} />
                        <span>
                            {details.views}
                        </span>
                    </div>
                    <div>
                        <img src = {likesIcon} alt = {'likes'} />
                        <span>
                            {details.likes}
                        </span>
                    </div>
                </div>
            </div>
            <div className = 'container-details__description'>                
                <span>
                    {details.description}
                </span>
            </div>
            <VideoCommentForm
                commentsCount = {details.comments.length}
            />
            {details.comments.map(comment => (
            <VideoComments
                key = {comment.id}
                id =  {comment.id}
                comment = {comment.comment}
                name = {comment.name}
                likes = {comment.likes}
                timestamp = {comment.timestamp}
                timeDifference = {timeDifference}
            />
            ))}
        </article>
    );
}

export default VideoDetails;