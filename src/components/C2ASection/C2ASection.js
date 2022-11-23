import React from "react";
import { C2AContainer, ImgDiv, BoxWrapper, TextBox } from "./C2ASection.style";
import { Button } from "../../globalStyle";

const C2ASection = () => {
    return(
        <C2AContainer>
            <ImgDiv></ImgDiv>
            <BoxWrapper>
                <TextBox>
                    <h1>Progressez à votre rythme</h1>
                    <p style={{marginBottom: "40px"}}>Des cours adaptés aux besoins de chacuns, donnés par Tania, une professeures de chat certifiée avec plus de 30 ans d’expérience vocale.</p>
                    <Button style={{marginLeft: "auto", marginRight: "auto"}}>Réservez un cours</Button>
                </TextBox>
            </BoxWrapper>
        </C2AContainer>
    );
}

export default C2ASection;