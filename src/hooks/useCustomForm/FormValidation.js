/*
    File containing all functions necessary for cookie based text input validation and file validation (on client side).
*/

// ===================================== //
// ============ UTILS FUNCS ============ //
// ===================================== //

/**
 * This function returns an array containing hexadecimal bytes of file passed in parameters.
 * Note : This func is async, it has to wait that the file reader has finished before returning anything.
 * Note : it's a dependency of fileValidation(), created to stay DRY.
 * @param {object} file     File to convert in hex bytes. 
 * @returns {array}         Array containing hex bytes of file.
 */
const getFileBytes = (file) => {
    return new Promise((resolve, reject) => {
        const fileByteArrayHex = [];
        let reader  = new FileReader();
        reader.onloadend = (e) => {
            if (e.target.readyState === FileReader.DONE) {
                const arrayBuffer = e.target.result,
                array = new Uint8Array(arrayBuffer);
                // convert bytes to hex value
                for (const a of array) {
                    let hexNum = (a).toString(16);
                    fileByteArrayHex.push(hexNum.toUpperCase());
                }
            }
            if( fileByteArrayHex.length !== 0) {
                resolve(fileByteArrayHex);
            } else {
                reject('An error occured in getFileBytes() ! Array was empty !')
            } 
        }
        reader.readAsArrayBuffer(file)
    });
}

/**
 * This utils function compare first bytes of passed file (magic numbers) to reference for validation.
 * Note : it's a dependency of fileValidation(), created to stay DRY.
 * @param   {str}   fileType    String representing file type ("jpg", "png", "gif").
 * @param   {array} bytesArray  String Array of hexadecimal bytes of file for comparison.
 * @returns {bool}              True/False.
 */
const compareFileBytes = (fileType, bytesArray) => {
    // File signature first bytes reference
    const magicNumbers = {
        "jpg" : ["FF", "D8", "FF", "E0"],
        "png" : ["89", "50", "4E", "47", "D", "A", "1A", "A"],
        "gif" : ["47", "49", "46", "38"]
    }
    let byteSize = magicNumbers[fileType].length
    for(let i=0; i < byteSize; i++) {
        if (bytesArray[i] !== magicNumbers[fileType][i]){
            // If a bit is off, then return false
            return false;
        }
    }
    return true;
}


/**
 * Utility function which controls input state with cookies, they can be :
 * - null (input is empty, no cookie set)
 * - true (value ok, cookie set to true)
 * - false (bad char entered, cookie set to false)
 * Note : it's a dependency of inputValidation(), created to stay DRY.
 * @param   {str}   input_name      Input name property.
 * @param   {str}   input_value     Input value to check.
 * @param   {int}   bad_chars       Result of regex search (if OK = -1 or else it returns int for position of bad char).
 * @returns {bool}                  True / False.
 */
const badCharReturnVerif = (input_name, input_value, bad_chars) => {
    if(input_value === "") {
        sessionStorage.removeItem(input_name);
        return true
    }
    if(bad_chars >= 0) {
        sessionStorage.removeItem(input_name);
        sessionStorage.setItem(input_name, false);
        return false;
    }
    
    sessionStorage.removeItem(input_name);
    sessionStorage.setItem(input_name, true);
    return true;
}

/**
 * Same as badCharReturnVerif but with matching search instead.
 * It controls input state with cookies, they can be : 
 * - null (input is empty, no cookie set)
 * - true (value ok, cookie set to true) 
 * - false (bad char entered, cookie set to false).
 * Note : it's a dependency of inputValidation(), created to stay DRY.
 * @param   {str}   input_name      Input name property.
 * @param   {str}   input_value     Value of input. 
 * @param   {int}   matching        Result of regex search (if OK = 0 or else negative number.)
 * @returns {bool}                  True / False.
 */
const matchReturnVerif = (input_name, input_value, matching) => {
    if(input_value === "") {
        sessionStorage.removeItem(input_name);
        return true
    }

    if(matching !== 0){
        sessionStorage.removeItem(input_name);
        sessionStorage.setItem(input_name, false);
        return false;
    }

    sessionStorage.removeItem(input_name);
    sessionStorage.setItem(input_name, true);
    return true;
}

/**
 * This function deletes ALL form related cookies (used for input validation) to reinit all inputs.
 * @param {*} formRef Form reference (hook useRef)
 */
 export const clearFormCookies = (formRef) => {
    const inputNames = [];
    // Push input names in array 
    Object.keys(formRef).forEach(key => {inputNames.push(formRef[key].name)});
    // Compare input names with cookie name and clear matching cookies
    inputNames.forEach(inputName => {
        if(sessionStorage.getItem(inputName) !== null){
            sessionStorage.removeItem(inputName);
        }
    });
};

// ===================================================== //
// ============ VALIDATION FUNCTIONS (MAIN) ============ //
// ===================================================== //

/**
 * This async function validates file magic numbers (file signature) to avoid tampered/corrupted files for security.
 * It also checks for excessive file size before upload. Sets cookie to false if file is not valid.
 * Note : this func is not bullet proof at all, must have a more complete backend function to check file signature.
 * @param   {object}    fileObj     File to be checked.
 * @param   {str}       input_name  Input name.
 * @returns {bool}                  True/False.
 */
 export const fileValidation = async (fileObj, input_name) => {
    const mimeType = fileObj.type;
    const fileSize = fileObj.size;
    let isValid;

    // Max file size 300 ko
    if (fileSize > 300000) {
        sessionStorage.setItem(input_name, false);
        return false;
    }

    await getFileBytes(fileObj).then(bytesArray => {
        // Check magic numbers
        if(mimeType === "image/jpeg") {
            isValid = compareFileBytes("jpg", bytesArray);
        }
        else if(mimeType === "image/png") {
            isValid = compareFileBytes("png", bytesArray);
        }
        else if(mimeType === "image/gif") {
            isValid = compareFileBytes("gif", bytesArray);
        }
        else {
            console.error("File passed is either corrupted of not of the right type !")
            return false;
        }
    }).catch(err => console.log(err));
    
    // Set session cookie
    isValid ? sessionStorage.setItem(input_name, true) : sessionStorage.setItem(input_name, false);
    
    return isValid;
}

/**
 * This function checks form text based inputs content and use cookies to store invalid input names in order to keep trace of badly formatted infos 
 * that haven't been corrected by user before submission (useful to color inputs and warn user when they're wrong).
 * @param   {str}   inputValue  Input content to verify. 
 * @param   {str}   inputType   Input type (text, email, tel, etc...).
 * @param   {str}   inputName   Input 'name' property.
 * @returns {bool}              True if input valid / False if not.
 */
export const inputValidation = (inputValue, inputType, inputName) => {
    let badChars = ""
    let match = ""
    if (inputType === "text") {
        switch(inputName) {
            case "invoice_address":
                badChars = inputValue.search(/[^\w\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ.,°:-]+/);
                break;
            case "invoice_postal":
                badChars = inputValue.search(/[^A-Z0-9\s-]+/);
                break;
            default:
                badChars = inputValue.search(/[^\w\sáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ'-]+/);
        }
        // Check regex return value & set/remove cookie
        return badCharReturnVerif(inputName, inputValue, badChars)
    }
    else if(inputType === "email") {
        match = inputValue.search(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
        
        // Check regex return value & set/remove cookie (+ check if empty input)
        return matchReturnVerif(inputName, inputValue, match)
    }
    else if(inputType === "textarea") {
        badChars = inputValue.search(/[*#<>{}\[\]\t\\\\]+/);

        return badCharReturnVerif(inputName, inputValue, badChars)
    }
    else if(inputType === "tel") {
        match = inputValue.search(/^\+?[\d, \s]+$/);

        return matchReturnVerif(inputName, inputValue, match)  
    }
}