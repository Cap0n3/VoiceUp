import { useEffect, useState } from "react"
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

/**
 * Hook used to send email to emailjs.
 * > **Dependencies :** emailjs
 */
const useSend = (formEvent, test={active: false, status: "success", serverWaitMs: 2000}) => {
    const [msgStatus, setMsgStatus] = useState(null);
    const [showLoadIcon, setShowLoadIcon] = useState(false);
    const [isStatusBoxVisible, setIsStatusBoxVisible] = useState(false);

    /**
     * Send email to emailJS
     * @param {Object} formEvent 
     */
    const sendEmail = (formEvent) => {
        formEvent.preventDefault();
        emailjs.sendForm(EMAILJS_IDS.serviceID_enroll, EMAILJS_IDS.templateID_enroll, formRef.current, EMAILJS_IDS.publicKey_emailjs)
            .then((result) => {
                // Hide wait message
                setShowLoadIcon(false);
                // Show success to user
                setMsgStatus({status : "success", msg: language === "FR" ? "Message envoyé !" : "Message sent !", responseObject: result});
                setIsStatusBoxVisible(true);
            }, (error) => {
                console.log(error);
                // Display error message for user
                setMsgStatus({status : "error", msg: language === "FR" ? "Une erreur est survenue, le serveur n'est pas joignable !" : "An error occured, server unreachable !", responseObject: error});
                setIsStatusBoxVisible(true);
            });
    }

    /**
     * Simulate sending email to server (with delay)
     * @param {*} status 
     */
    const mockSend= (status, waitingMs) => {
        setTimeout(() => {
            if(status === "success"){
                setShowLoadIcon(false);
                setIsStatusBoxVisible(true);
                setMsgStatus({status : "success", msg: language === "FR" ? "Message envoyé !" : "Message sent !", responseObject: ""});
            }
            else if(status === "error") {
                setShowLoadIcon(false);
                setIsStatusBoxVisible(true);
                setMsgStatus({status : "error", msg: language === "FR" ? "Une erreur est survenue !" : "An error occured !", responseObject: ""});
            }    
        }, waitingMs);
    }

    if(test.active) {
        mockSend(test.status, test.serverWaitMs);
    } else {
        sendEmail(formEvent);
    }

    return [msgStatus, showLoadIcon, isStatusBoxVisible]
}

export default useSend;