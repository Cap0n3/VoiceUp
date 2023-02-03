import { InputError, ErrorIcon, WarnIcon } from "../globalStyles/globalCompStyles";

export const getInputErrMsg = (errObj, language) => {
    let msgFR="";
    let msgEN="";

    if(errObj.type === "required") {
        msgFR="Champs requis"
        msgEN="Required"
        return <InputError status="warn"><WarnIcon />{language === "FR" ? msgFR : msgEN}</InputError>;
    }
    else if(errObj.type === "pattern") {
        msgFR="Format non valide";
        msgEN="Not valid"
    }
    else if(errObj.type === "minLength") {
        msgFR="Minimum 2 caractères !";
        msgEN="At least 2 characters !"
    }
    else if(errObj.type === "maxLength") {
        msgFR="Nombre maximum de caractères atteint !";
        msgEN="Maximum length reached !";
    }
    else {
        msgFR="Une erreur est survenue !";
        msgEN="An error occured !";
    }
    return <InputError><ErrorIcon />{language === "FR" ? msgFR : msgEN}</InputError>;
}