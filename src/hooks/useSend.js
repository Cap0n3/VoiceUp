import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser';


/**
 * @typedef {Object} returnedData
 * @property {Object} serverResponse - Object containing server response and custom messages. {status : <"success"/"error">, msg: <message>, responseObject: <response_object>}
 * @property {bool} isWaitingServerResp - Are we waiting for server to respond ?
 * @property {bool} isSendSuccess - Was email sending a success ?
 * @property {function} sendEmail - Function to send email with emailJS.
 * @property {function} mockSend - Test function that simulates email sending and server response time delay.
 */

/**
 * Custom hook to send email with emailJS and handle related states.
 * > External dependency : emailjs
 * 
 * 
 * @param {string} serviceID - Service ID for emailJS.
 * @param {string} templateID - Template ID for emailJS.
 * @param {string} publicKey - Public key of emailJS user account.
 * @param {Object} formRef - Form reference.
 * @param {string} successMsg - Custom message for success. Default: "Message successfully sent".
 * @param {string} errorMsg - Custom messsage for error. Default: "An error occured !".
 * @param {int} resetTime - serverResponse state reset time (in ms) to origin values (useful to make notification box dissapear). Default=4000.
 * @returns {returnedData} 
 */
const useSend = (serviceID, templateID, publicKey, formRef, successMsg="Message successfully sent", errorMsg="An error occured !", resetTime=4000) => {
    const [serverResponse, setServerResponse] = useState(null);
    const [isWaitingServerResp, setIsWaitingServerResp] = useState(false);
    const [isSendSuccess, setIsSendSuccess] = useState(null);
    
    /**
     * Send email with emailJS.
     * 
     * @param {Object} formEvent - Form event object.
     */
    const sendEmail = (formEvent) => {
        formEvent.preventDefault();
        setIsWaitingServerResp(true); // Waiting for response
        
        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                // === SUCCESS === //
                setIsWaitingServerResp(false);
                setIsSendSuccess(true);
                setServerResponse({status : "success", msg: successMsg, responseObject: result});
            }, (error) => {
                // === ERROR === //
                console.log(error);
                setIsWaitingServerResp(false);
                setIsSendSuccess(false);
                setServerResponse({status : "error", msg: errorMsg, responseObject: error});
            });
    }

    /**
     * Function that simulates sending an email to server (with response time delay).
     * 
     * @param {String} status - Stutus needed for test, can be "success" or "error".
     * @param {int} waitingMs - Simulated server response delay in ms.
     */
    const mockSend = (status, waitingMs) => {
        setIsWaitingServerResp(true); // Waiting for response
        setTimeout(() => {
            if(status === "success"){
                setIsWaitingServerResp(false);
                setIsSendSuccess(true);
                setServerResponse({status : "success", msg: successMsg, responseObject: ""});
            }
            else if(status === "error") {
                setIsWaitingServerResp(false);
                setIsSendSuccess(false);
                setServerResponse({status : "error", msg: errorMsg, responseObject: ""});
            }    
        }, waitingMs);
    }

    /**
     * Reset response state after n milliseconds.
     */
    useEffect(() => {
        if(serverResponse) {
            // Make info, warn and error messages disappear
            setTimeout(() => {
                setServerResponse(null);
            }, resetTime);
        }
    }, [serverResponse]);

    const returnedData = {
        serverResponse: serverResponse,
        isWaitingServerResp: isWaitingServerResp,
        isSendSuccess: isSendSuccess,
        sendEmail: sendEmail, 
        mockSend: mockSend
    }

    return [returnedData];
}

export default useSend;