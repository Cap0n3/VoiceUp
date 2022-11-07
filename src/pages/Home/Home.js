import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderContainer } from './Home.style';
import Tania1 from "../../assets/headers/Header_Tania1.jpg"
import ShowerDude from "../../assets/headers/Header_ShowerDude.jpg"
import GoldMic from "../../assets/headers/Header_GoldMic.jpg"
import { VoiceUpColors } from '../../colors';

const cursiveSpan = {
    color: VoiceUpColors.altGrey,
    fontFamily: "'Yellowtail', cursive",
    textTransform: "lowercase"
}

const slides = [
    {url: Tania1, imgTitle:"Tania", title:<>Cours <span style={cursiveSpan}>de</span> chant</>, description: "Tu chantes mal ? Pas de soucis, viens dépenser ton argent chez moi ! Regarde, en plus j'ai la classe !"},
    {url: ShowerDude, imgTitle:"Shower Dude", title:<>Une <span style={cursiveSpan}>forte</span> senteur ?</>, description: "Hé bah prend une douche, you smelly cat !"},
    {url: GoldMic, imgTitle:"Gold Mic", title:<>Chante <span style={cursiveSpan}>maintenant</span></>, description: "Viens t'inscrire à l'école du micro d'or !"}
]

const Home = () => {
    return(
        <>
            <SliderContainer>
                <ImageSlider slides={slides} transitionTime={300}></ImageSlider>
            </SliderContainer>
            <h1>Home Page</h1>
            <p>I'm a home page</p>
        </>
    )
}

export default Home