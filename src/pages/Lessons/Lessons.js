import React from "react";
import Header from "../../components/Header/Header";
import { headerData } from "./data/header.data";

const Lessons = () => {
    return(
        <div>
            <Header data={headerData} />
            <h1>Lessons</h1>
            <p>Let's talk about my lessons ...</p>
        </div>
    )
}

export default Lessons;