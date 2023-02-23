import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InfoSection from "../../components/InfoSection/InfoSection";
import { lessonHeaderData, infoPhiloData, infoLearningPathData, infoTechniqueData, infoLessonsData , infoAuditionData} from "./data/program.data";
import SEOBlock from "../../components/SEOBlock/SeoBlock";
import { websiteSEO } from "../../seo/seo.data";

const Program = () => {
    return(
        <>
            <SEOBlock data={websiteSEO.program} />
            <Header data={lessonHeaderData} position={{posX: 0, posY: 50}} />
            <InfoSection data={infoPhiloData} direction={infoPhiloData.direction} transitionTime={600} />
            <InfoSection data={infoLearningPathData} direction={infoLearningPathData.direction} transitionTime={600} />
            <InfoSection data={infoTechniqueData} direction={infoTechniqueData.direction} transitionTime={600}  />
            <InfoSection data={infoLessonsData} direction={infoLessonsData.direction} transitionTime={600} />
            <InfoSection data={infoAuditionData} direction={infoAuditionData.direction} transitionTime={600} />
            <Footer />
        </>
    )
}

export default Program;