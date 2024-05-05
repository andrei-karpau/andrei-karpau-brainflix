import React from "react";
import axios from 'axios';
import './VideoDetails.scss';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';
import VideoComments from "../VideoComments/VideoComments";
import VideoCommentForm from "../VideoCommentForm/VideoCommentForm";

const apiKey = 'api_key=22094491-ef19-4361-bf15-b34fe3402f2b';
// const apiUrl = 'https://project-2-api.herokuapp.com/';
const apiUrl = 'http://localhost:8080';

function VideoDetails ({activeDetails, setActiveDetails}) {

    const postComment = async (id, comment) => {
        try {
            await axios.post(`${apiUrl}/${id}/comments`, comment);
            const response = await axios.get(`${apiUrl}/videos/${id}`);
            setActiveDetails(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteComment = async (videoId, commentId) => {
        try {
            await axios.delete(`${apiUrl}/${videoId}/comments/${commentId}`);
            const response = await axios.get(`${apiUrl}/videos/${videoId}`);
            setActiveDetails(response.data);
        } catch (error) {

        }
    }

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

    const timestamp = activeDetails.timestamp;

    return (
        <article className='container-details'>
            <span className='container-details__header'>
                {activeDetails ? activeDetails.title : 'something went wrong with details:('}
            </span>
            <div className='container-details__wrapper'>
                <div className='container-details__wrapper-date'>
                    <span>
                        {'by ' + activeDetails.channel}
                    </span>
                    <span>
                        {timeDifference(Date.now(), timestamp)}
                    </span>
                </div>
                <div className='container-details__wrapper-views'>
                    <div>
                        <img src = {viewsIcon} alt = {'views'} />
                        <span>
                            {activeDetails.views}
                        </span>
                    </div>
                    <div>
                        <img src = {likesIcon} alt = {'likes'} />
                        <span>
                            {activeDetails.likes}
                        </span>
                    </div>
                </div>
            </div>
            <div className = 'container-details__description'>                
                <span>
                    {activeDetails.description}
                </span>
            </div>
            <VideoCommentForm
                activeDetails = {activeDetails}
                postComment = {postComment}
            />
            {activeDetails.comments.sort((a, b) => b.timestamp - a.timestamp).map(comment => (
            <VideoComments
                key = {comment.id}
                id =  {comment.id}
                comment = {comment.comment}
                name = {comment.name}
                likes = {comment.likes}
                timestamp = {comment.timestamp}
                timeDifference = {timeDifference}
                deleteComment = {deleteComment}
                videoId = {activeDetails.id}
            />
            ))}
        </article>
    );
}

export default VideoDetails;