import styled from "styled-components";
import Tania2 from "../../assets/images/Tania/Tania2_medium_header_over.jpg";
import { VoiceUpColors } from "../../colors";
import { FONT_SIZES, FONT_WEIGHTS } from "../../globalVars";

const DEBUG = false;
const sectionHeight = 700;

export const C2AContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${sectionHeight- 200}px;
    overflow: hidden;
    background-color: black;
    ${DEBUG ? "border: 1px solid blue;" : ""}

    @media only screen and (max-width: 1024px) {
        height: ${sectionHeight - 300}px;
    }
`;

// export const ImgDiv = styled.div`
//     position: absolute;
//     height: ${sectionHeight}px;
//     width: ${({width}) => (width ? `${width}px` : "100%")};
//     background-image: ${`url(${Tania2})`};
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-size: cover;
//     -webkit-transform: ${({paralOffset}) => `translateY(${paralOffset}px)`};
//     transform: translateY(${({paralOffset}) => `${paralOffset}px`});
    
//     @media only screen and (max-width: 1024px) {
//         height: ${sectionHeight + 100}px;
//     }
// `;

/**
 * Created styled-component with `attrs` to avoid error message :
 * "Over 200 classes were generated for component styled.div"
 * 
 * Classic styled-Comp seems to generate to many classes due to
 * constant re-rendering from parallax FX. To resolve isssue, we
 * have to use `attrs` to improve performance. More on that here :
 * https://medium.com/@magnus_junghard/efficient-styled-component-manipulations-e32ef338f93b
 * 
 * > Note : If `attrs` is not used, image flickers on mobile Safari (iOS + old versions)
 */
export const ImgDiv = styled.div.attrs(
    ({width, paralOffset}) => ({
        style: {
            height: `${sectionHeight}px`,
            width: width || "100%",
            backgroundImage: `url(${Tania2})`,
            transform: `translateY(${paralOffset}px)`,
        }
    })
)`
    position: absolute;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BoxWrapper = styled.div`
    width: 45%;
    margin-left: -145%;
    transition: margin-left ${({transitionTime}) => transitionTime}ms ease; 
    z-index: 900;
    ${DEBUG ? "border: 1px solid pink;" : ""}

    &.active {
        margin-left: 0;
    }

    @media only screen and (max-width: 1024px) {
        width: 75%;
    }
`;

export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: visible;
    overflow-wrap: break-word;
    
    & > h2, h3 {
        text-align: center;
        color: ${VoiceUpColors.white};
        text-transform: uppercase;
        ${DEBUG ? "border: 1px solid red;" : ""}
    }

    & > h2 {
            font-size: ${FONT_SIZES.desktopHeadings};
            font-weight: ${FONT_WEIGHTS.headingsWeight};
            margin-bottom: 5px;

            @media only screen and (max-width: 1024px) {
                font-size: ${FONT_SIZES.mobileC2AHeading};
            }
        }

    & > h3 {
        font-size: ${FONT_SIZES.desktopSubheadings};
        font-weight: ${FONT_WEIGHTS.subheadingsWeight};
        margin-bottom: 30px;

        @media only screen and (max-width: 1024px) {
            font-size: ${FONT_SIZES.mobileSubheadings};
        }
    }

    & > p {
        text-align: center;
        font-size: ${FONT_SIZES.desktopBody};
        font-weight: ${FONT_WEIGHTS.bodyWeight};
        color: ${VoiceUpColors.white};
        ${DEBUG ? "border: 1px solid purple;" : ""}

        @media only screen and (max-width: 1024px) {
            font-size: ${FONT_SIZES.mobileBody};
        }
    }
`;