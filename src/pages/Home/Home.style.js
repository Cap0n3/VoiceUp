import styled from "styled-components";

export const SliderContainer = styled.div`
    width: 100%;
    height: ${({winHeight}) => (winHeight ? (winHeight - 80) : "600")}px;
    max-height: 1280px;
    min-height: 300px;
`;