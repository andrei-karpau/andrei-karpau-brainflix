import React, {useEffect}  from "react";
import './VideoDetails.scss';
import viewsIcon from '../../assets/Icons/views.svg';
import likesIcon from '../../assets/Icons/likes.svg';

function VideoDetails (props) {

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

    const {activeDetails} = props
    console.log(activeDetails);
    // I should think about how to get activeDetails as Object not Array. these [0] and .map here look bad.
    const timestamp = activeDetails.map(detail => detail.timestamp);
    // let videoDate = new Date(timestamp[0]);

    return (
        <article className='container-details'>
            <span className='container-details__header'>
                {activeDetails ? activeDetails.map(detail => detail.title) : 'something went wrong with details:('}
            </span>
            <div className='container-details__wrapper'>
                <div className='container-details__wrapper-date'>
                    <span>
                        {activeDetails.map(detail => 'by ' + detail.channel)}
                    </span>
                    <span>
                        {timeDifference(Date.now(), timestamp[0])}
                    </span>
                </div>
                <div className='container-details__wrapper-views'>
                    <div>
                        <img src = {viewsIcon} alt = {'views'} />
                        <span>
                            {activeDetails.map(detail => detail.views)}
                        </span>
                    </div>
                    <div>
                        <img src = {likesIcon} alt = {'likes'} />
                        <span>
                            {activeDetails.map(detail => detail.likes)}
                        </span>
                    </div>
                </div>
            </div>
            <div className = 'container-details__description'>                
                <span>
                    {activeDetails.map(detail => detail.description)}
                </span>
            </div>
        </article>
    )
}

export default VideoDetails;