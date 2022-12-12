import React, { useEffect, useState } from "react";
import { HeaderContainer, SlideImg, SlideOverlay, BoxWrapper, TextBox, Title, Description } from "./Header.style";
import FooPic from "../../assets/headers/Header_Tania1.jpg";

function Header() {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handler = () => {
            setIsActive(true);
        }
        window.addEventListener("load", handler);
        return () => {
            window.removeEventListener("load", handler);
        }
    }, [])

    return (
        <HeaderContainer>
            <SlideImg imageURL={FooPic}>
                <SlideOverlay></SlideOverlay>
                    <BoxWrapper className={isActive ? "active" : ""} transitionTime={500}>
                        <TextBox>
                            <Title>This is a title</Title>
                            <Description>Hello, I'm a text ! I'm so happy to be here with you !</Description>
                        </TextBox>
                    </BoxWrapper>
            </SlideImg>
        </HeaderContainer>
    );
}

export default Header;