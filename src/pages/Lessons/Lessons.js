import React from "react";
import Header from "../../components/Header/Header";
import { lessonHeaderData } from "./data/lessonHeader.data";

const Lessons = () => {
    return(
        <div>
            <Header data={lessonHeaderData} />
            <h1>Lessons</h1>
            <p>Let's talk about my lessons ...</p>
        </div>
    )
}

export default Lessons;