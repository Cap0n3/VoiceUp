import React from "react";
import { HeaderContainer, SlideImg, SlideOverlay, BoxWrapper, TextBox } from "./Header.style";
import FooPic from "../../assets/headers/Header_Tania1.jpg";

function Header() {
    return (
        <HeaderContainer>
            <SlideImg imageURL={FooPic}>
                <SlideOverlay>
                    <BoxWrapper>
                        <TextBox>
                            <h1>This is a title</h1>
                            <p>Hello, I'm a text ! I'm so happy to be here with you !</p>
                        </TextBox>
                    </BoxWrapper>
                </SlideOverlay>
            </SlideImg>
        </HeaderContainer>
    );
}

export default Header;