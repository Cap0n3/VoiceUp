import styled from "styled-components";

export const SliderWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 160px;
    background-color: yellow;
    background-image: ${(props) => {
        console.log(props.imageURL)
        return `url(${props.imageURL})`
    }};
    background-position: 100% 30%;
    background-repeat: no-repeat;
    background-size: 100%;

    @media screen and (max-width: 960px) {
        background-position: center;
    }
`;