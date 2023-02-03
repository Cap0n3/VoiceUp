/**
 * Global vars for website.
 */

// === ELEMENTS SIZE === //
export const ELEMENT_HEIGHTS = {
    navbarHeight : 80,
    mobileNavbarHeight : 60,
    headerHeight : 600,
    sectionHeight : 600 // Default section height
}

// === FONT SIZES === //
export const FONT_SIZES = {
    // Medium screen
    M_ftSizeXL : "4.5rem",
    M_ftSizeL : "2.2rem",
    M_ftSizeL_alt: "1.3rem",
    M_ftSizeMD : "1rem",
    M_FONT_SIZESM : "0.9rem",
    // Small screen
    S_ftSizeXL : "3.6rem",
    S_ftSizeL : "2rem",
    S_ftSizeMD : "0.9rem",
    S_FONT_SIZESM : "0.8rem",
    // Extra small screen
    XS_ftSizeXL : "3rem",
    XS_ftSizeMD : "0.8rem",
    XS_FONT_SIZESM : "0.6rem"
}

// === FORM REGEX === //

export const FORM_REGEX = {
    nameRgx: /^[A-Za-zàéèäöüçÀÉÈÇ'^`-\s]+$/i,
    emailRgx: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phoneRgx: /^(\+(41|33)|00\s?(41|33)|0\d{1,2})(\s?\(0\))?(\s)?(\d{1,2})(\s)?(\d{2,3})(\s)?(\d{2})(\s)?(\d{2})(\s)?(\d{2})?$/,
    messageRgx: /^[a-zA-Z0-9àéèäöüç°ÀÉÈÇ.():;!#$%&'*+/=?^_`~-\s]+$/i
}