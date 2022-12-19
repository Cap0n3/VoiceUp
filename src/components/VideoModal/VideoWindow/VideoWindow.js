import React from "react";
import ReactDom from "react-dom";
import { Overlay, ModalBox, ExitButton, VidTitle, VidDescription } from "./VideoWindow.style";
import { GrClose } from "react-icons/gr";
import VideoFrame from "../VideoFrame/VideoFrame";

const VideoWindow = ({ open, onClose, vidInfos}) => {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <Overlay onClick={onClose} />
            <ModalBox>
                <VidTitle>{vidInfos.title}</VidTitle>
                <VideoFrame embed={vidInfos.embed} />
                <VidDescription>{vidInfos.description}</VidDescription>
                <ExitButton onClick={onClose}><GrClose color="#fff" fontSize="1.5em" /></ExitButton>
            </ModalBox>
        </>,
        document.getElementById('portal')
  )
}

export default VideoWindow;