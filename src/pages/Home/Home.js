import React from 'react';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { SliderContainer } from './Home.style';
import Tania1 from "../../assets/images/Tania/Tania1_medium.jpg"
import showerDude from "../../assets/images/stock/showerDude_medium.jpg"

const slides = [
    {url: Tania1, imgTitle:"Tania", title:"Cours de chant", description: "BlaBlaBlaBlaBlaBlaBlaBlaBla"},
    {url: showerDude, imgTitle:"Shower Dude", title:"Take a shower", description: "Take a long shower, you smelly cat !"},
    {url: "", imgTitle:"", title:"", description: ""}
]

const Home = () => {
    return(
        <>
            <SliderContainer>
                <ImageSlider slides={slides}></ImageSlider>
            </SliderContainer>
            <h1>Home Page</h1>
            <p>I'm a home page</p>
        </>
    )
}

export default Home