import React,{useContext} from "react";
import ReactDom from "react-dom";
import { Overlay, ModalBox, ExitButton, VidDescription } from "./VideoWindow.style";
import VideoFrame from "../VideoFrame/VideoFrame";
import { LangContext } from "../../../App";

const VideoWindow = ({ open, onClose, vidInfos}) => {
    const {language} = useContext(LangContext);
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <Overlay onClick={onClose} />
            <ModalBox>
                {/* <VidTitle>{vidInfos.title}</VidTitle> */}
                {/* Video frame component */}
                <VideoFrame embed={vidInfos.embed} />
                <VidDescription>{(language === "FR") ? vidInfos.descriptionFR : vidInfos.descriptionEN}</VidDescription>
                <ExitButton onClick={onClose} />
            </ModalBox>
        </>,
        document.getElementById('portal')
  )
}

export default VideoWindow;