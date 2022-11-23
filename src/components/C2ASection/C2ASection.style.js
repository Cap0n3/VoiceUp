import styled from "styled-components";
import Tania2 from "../../assets/images/Tania/Tania2_medium.jpg";

const debug = false;
const sectionHeight = 600;

export const C2AContainer = styled.section`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    z-index: -1;
    ${debug ? "background-color: lightblue;" : ""}
`;

export const C2AWrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: ${`url(${Tania2})`};
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateZ(-10px) scale(2);
    z-index: -1;
`;

// export const Header = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     transform-style: preserve-3d;
//     z-index: -1;
// `;

// export const Title = styled.h1`
//     font-size: 7rem;
//     color: white;
//     text-shadow: 0 0 5px black;
// `;

// export const Img = styled.img`
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     object-fit: cover;
//     transform: translateZ(-10px) scale(2);
//     z-index: -1;
// `;

// export const Section = styled.section`
//   font-size: 2rem;
//   padding: 2rem;
//   background-color: #333;
//   color: white;
// `;