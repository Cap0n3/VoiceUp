import React from "react";
import ReactDom from "react-dom";
import { Overlay, ModalBox, ExitButton, VidDescription } from "./VideoWindow.style";
import VideoFrame from "../VideoFrame/VideoFrame";

const VideoWindow = ({ open, onClose, vidInfos}) => {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <Overlay onClick={onClose} />
            <ModalBox>
                {/* <VidTitle>{vidInfos.title}</VidTitle> */}
                {/* Video frame component */}
                <VideoFrame embed={vidInfos.embed} />
                <VidDescription>{vidInfos.description}</VidDescription>
                <ExitButton onClick={onClose} />
            </ModalBox>
        </>,
        document.getElementById('portal')
  )
}

export default VideoWindow;