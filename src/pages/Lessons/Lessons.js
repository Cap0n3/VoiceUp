import React from "react";
import Header from "../../components/Header/Header";
import InfoSection from "../../components/InfoSection/InfoSection";
import { lessonHeaderData, lessonsInfoData } from "./data/lessons.data";

const Lessons = () => {
    return(
        <div>
            <Header data={lessonHeaderData} />
            <InfoSection data={lessonsInfoData} transitionTime={600} />
            <h1>Lessons</h1>
            <p>Let's talk about my lessons ...</p>
        </div>
    )
}

export default Lessons;