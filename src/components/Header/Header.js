import React, { useRef, useContext } from "react";
import { HeaderContainer, SlideImg, SlideOverlay, BoxWrapper, TextBox, Title, Description } from "./Header.style";
import { LangContext } from "../../App";
import useAppear from "../../hooks/useAppear";

/**
 * Pages's header component.
 * 
 * @param   {object}    data        Data object for images, title and description.
 * @param   {object}    position    Object containing header image position X and Y.
 * @returns 
 */
function Header({data, position}) {
    const containerRef = useRef(null);
    const {language} = useContext(LangContext);
    const isActive = useAppear(containerRef);

    /**
     * Conditional rendering of description.
     * @returns
     */
    const displayDescription = () => {
        return(
            <Description>{(language === "FR") ? data.descriptionFR : data.descriptionEN}</Description>
        );
    }

    return (
        <HeaderContainer ref={containerRef}>
            <SlideImg imageURL={data.picURL} title={data.imgTitle} posX={position.posX} posY={position.posY}>
                <SlideOverlay></SlideOverlay>
                    <BoxWrapper className={isActive ? "active" : ""} transitionTime={300}>
                        <TextBox>
                            <Title>{(language === "FR") ? data.titleFR : data.titleEN}</Title>
                            {(data.descriptionFR && data.descriptionEN) && displayDescription() }
                        </TextBox>
                    </BoxWrapper>
            </SlideImg>
        </HeaderContainer>
    );
}

export default Header;