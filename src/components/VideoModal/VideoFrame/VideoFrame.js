/**
 * For styling of iframe see : https://codepen.io/susanwinters/pen/gvqOwd
 */

import React from 'react'
import { VidWrapper, iFrame } from "./VideoFrame.style";

const VideoFrame = ({embed}) => {
  return (
    <VidWrapper>
        <iframe width="" height="" src={embed} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </VidWrapper>
  );
}

export default VideoFrame;