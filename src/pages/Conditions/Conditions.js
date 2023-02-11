import React, {useRef, useContext} from 'react';
import { LangContext } from '../../App';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { conditionsHeaderData, conditionText, holidayText } from './data/conditions.data';
import { ConditionContainer, BlockWrapper, ConditionBlock, ConditionTitle } from './Conditions.style';
import useAppear from '../../hooks/useAppear';

const Conditions = () => {
    const {language} = useContext(LangContext);
    const wrapperOneRef = useRef(null);
    const wrapperTwoRef = useRef(null);
    const isWrapperOneVisible = useAppear(wrapperOneRef, 280);
    const isWrapperTwoVisible = useAppear(wrapperTwoRef, 280);

    return(
        <>
            <Header data={conditionsHeaderData} position={{posX: 0, posY: 50}} />
            <ConditionContainer>
                <BlockWrapper ref={wrapperOneRef} isVisible={isWrapperOneVisible}>
                    <ConditionTitle style={{marginTop: "0"}}>Conditions</ConditionTitle>
                    {conditionText.map((data, index) => 
                        <ConditionBlock key={index}>
                            <h2>{(language === "FR") ? data.titleFR : data.titleEN}</h2>
                            <p>{(language === "FR") ? data.paraFR : data.paraEN}</p>
                            {data.noteFR && <p style={{fontStyle: "italic", marginTop: "15px"}}>{(language === "FR") ? data.noteFR : data.noteEN}</p>}
                        </ConditionBlock>
                    )}
                </BlockWrapper>
                <BlockWrapper ref={wrapperTwoRef} isVisible={isWrapperTwoVisible}>
                    <ConditionTitle>Annulation, Vacances, Rattrapage, Résiliation</ConditionTitle>
                    {holidayText.map((data, index) => 
                        <ConditionBlock key={index}>
                            <h2>{(language === "FR") ? data.titleFR : data.titleEN}</h2>
                            <p>{(language === "FR") ? data.paraFR : data.paraEN}</p>
                            {data.noteFR && <p style={{fontStyle: "italic", marginTop: "15px"}}>{(language === "FR") ? data.noteFR : data.noteEN}</p>}
                        </ConditionBlock>
                    )}
                </BlockWrapper>
            </ConditionContainer>
            <Footer />
        </>
    )
}

export default Conditions;