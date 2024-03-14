import React, {useEffect}  from "react";
import './VideoDetails.scss';

function VideoDetails (props) {

    const {activeDetails} = props
    console.log(activeDetails);

    return (
        <>
            <span>{activeDetails ? activeDetails.map(detail => detail.title) : 'something went wrong with details:('}</span>
        </>
    )
}

export default VideoDetails;