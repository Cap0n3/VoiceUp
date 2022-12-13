import React, { useEffect, useState, useRef, useContext } from "react";
import { HeaderContainer, SlideImg, SlideOverlay, BoxWrapper, TextBox, Title, Description } from "./Header.style";
import { LangContext } from "../../App";
import useAppear from "../../hooks/useAppear";
import * as globalVars from "../../globalVars";

function Header({data}) {
    const containerRef = useRef(null);
    const {language} = useContext(LangContext);
    const isActive = useAppear(containerRef, globalVars.navbarHeight);

    return (
        <HeaderContainer ref={containerRef}>
            <SlideImg imageURL={data.picURL} posX="0" posY="50">
                <SlideOverlay></SlideOverlay>
                    <BoxWrapper className={isActive ? "active" : ""} transitionTime={300}>
                        <TextBox>
                            <Title>{(language === "FR") ? data.titleFR : data.titleEN}</Title>
                            <Description>{(language === "FR") ? data.descriptionFR : data.descriptionEN}</Description>
                        </TextBox>
                    </BoxWrapper>
            </SlideImg>
        </HeaderContainer>
    );
}

export default Header;