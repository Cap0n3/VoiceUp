import React, { useState } from 'react'
import { VideoThumbnail, PlayButton } from './VideoModal.style';
import VideoWindow from './VideoWindow/VideoWindow';

const VideoModal = ({thumbWidth, vidData}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <VideoThumbnail onClick={() => setIsOpen(true)} width={thumbWidth} imgSRC={vidData.thumbnail}>
                <PlayButton />
            </VideoThumbnail>   
            <VideoWindow open={isOpen} onClose={() => setIsOpen(false)} vidInfos={vidData} />    
        </>
    );
}

export default VideoModal;