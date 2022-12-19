import React from "react";
import ReactDom from "react-dom";

const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "150px",
    zIndex: 1000
}

const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000
} 

const VideoWindow = ({ open, children, onClose }) => {
    if (!open) return null
    
    return ReactDom.createPortal(
        <>
            <div style={overlayStyle} onClick={onClose} />
            <div style={modalStyle}>
                <h1>HELLO WORLD !</h1>
                <p>I'm so happy to be here !</p>
                <button onClick={onClose}>Close</button>
            </div>
        </>,
        document.getElementById('portal')
  )
}

export default VideoWindow;