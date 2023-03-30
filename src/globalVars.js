/**
 * Global vars for website.
 */

// === ELEMENTS SIZE === //
export const ELEMENT_HEIGHTS = {
    navbarHeight : 80,
    navLogoSize : 55,
    mobileNavbarHeight : 60,
    headerHeight : 600,
    sectionHeight : 600, // Default section height
    footerLogoSize : 100
}

// === FONT SIZES === //
export const FONT_SIZES = {
    // Desktop
    desktopHeadings : "3.6rem",
    desktopSubheadings : "1.9rem",
    desktopBody : "1.1rem",
    desktopButton : "1rem",
    // Standard mobile
    mobileHeadings : "2.8rem",
    mobileSubheadings : "1.2rem",
    mobileBody : "1rem",
    mobileButton :  "0.9rem",
    // Special
    desktopNavbar : "0.9rem",
    mobileNavbar : "1rem",
    desktopLangSwitch : "0.8rem",
    desktopFooterLinks : "0.95rem",
    mobileFooterLinks : "0.8rem",
    desktop_copyright : "0.8rem",
    mobile_copyright : "0.6rem",
    mobileC2AHeading : "2.3rem",
    priceCardList : "0.92rem",
    mobileTableHeadings : "0.75rem",
    sm_mobileTableHeadings : "0.7rem",
    mobileQuestionCollapse : "0.8rem",
    mobileVideoDescr : "0.7rem"
}

export const FONT_WEIGHTS = {
    headingsWeight : 600,
    subheadingsWeight : 500,
    bodyWeight : 300,
}

// === FORM REGEX === //

export const FORM_REGEX = {
    nameRgx: /^[A-Za-zàâäéèêëîïôöùûüÿçÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸ’'‘^¨`-\s]+$/i,
    emailRgx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneRgx: /^(\+(41|33)|00\s?(41|33)|0\d{1,2})(\s?\(0\))?(\s)?(\d{1,2})(\s)?(\d{2,3})(\s)?(\d{2})(\s)?(\d{2})(\s)?(\d{2})?$/,
    messageRgx: /^[a-zA-Z0-9àâäéèêëîïôöùûüÿçÀÂÄÇÉÈÊËÎÏÔÖÙÛÜŸ.,():;!?°§#$£@%&’'‘"«»*+/=^¨_`~-\s]+$/i
}

// === EMAILJS IDS === //

export const EMAILJS_IDS = {
    serviceID_contact: "service_l7sqp28", 
    templateID_contact: "template_dilna6i",
    serviceID_enroll: "service_l7sqp28", 
    templateID_enroll: "template_sl3f9x1",
    publicKey_emailjs: "rGeZyDR1JuIAHpM0N"
}