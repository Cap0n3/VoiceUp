import React, { useState } from 'react'
import { VideoThumbnail } from './VideoModal.style';
import VideoWindow from './VideoWindow';


const VideoModal = ({thumbWidth, imgSRC}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <>
            <VideoThumbnail onClick={() => setIsOpen(true)} width={thumbWidth} imgSRC={imgSRC}></VideoThumbnail>   
            <VideoWindow open={isOpen} onClose={() => setIsOpen(false)} />   
        </>
    );
}

export default VideoModal;