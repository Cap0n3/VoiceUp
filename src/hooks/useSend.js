import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser';

const useSend = (serviceID, templateID, publicKey, formRef, successMsg="Message successfully sent", errorMsg="An error occured !") => {
    const [serverResponse, setServerResponse] = useState(null);
    const [isWaitingServerResp, setIsWaitingServerResp] = useState(false);
    const [isSendSuccess, setIsSendSuccess] = useState(false);
    
    /**
     * Send email to emailJS
     * @param {Object} formEvent 
     */
    const sendEmail = (formEvent) => {
        formEvent.preventDefault();
        emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
            .then((result) => {
                // === SUCCESS === //
                setIsWaitingServerResp(false);
                // Show success to user
                setServerResponse({status : "success", msg: successMsg, responseObject: result});
                setIsSendSuccess(true);
            }, (error) => {
                // === ERROR === //
                console.log(error);
                setIsWaitingServerResp(false);
                // Display error message for user
                setServerResponse({status : "error", msg: errorMsg, responseObject: error});
                setIsSendSuccess(true);
            });
    }

    /**
     * Simulate sending email to server.
     * 
     * @param {String} status - Stutus needed for test, can be "success" or "error".
     * @param {int} waitingMs - Simulated server response delay in ms.
     */
    const mockSend = (status, waitingMs) => {
        setIsWaitingServerResp(true);
        setTimeout(() => {
            if(status === "success"){
                setIsWaitingServerResp(false);
                setIsSendSuccess(true);
                setServerResponse({status : "success", msg: successMsg, responseObject: ""});
            }
            else if(status === "error") {
                setIsWaitingServerResp(false);
                setIsSendSuccess(true);
                setServerResponse({status : "error", msg: errorMsg, responseObject: ""});
            }    
        }, waitingMs);
    }

    /**
     * If there's a status message, set a timer to make it disappear after X seconds
     */
    useEffect(() => {
        if(serverResponse) {
            // Make info, warn and error messages disappear
            setTimeout(() => {
                setIsSendSuccess(false);
                setServerResponse(null);
            }, 4000);
        }
    }, [serverResponse]);

    const returnData = {
        serverResponse: serverResponse,
        isWaitingServerResp: isWaitingServerResp,
        isSendSuccess: isSendSuccess,
        sendEmail: sendEmail, 
        mockSend: mockSend
    }

    return [returnData]
}

export default useSend;