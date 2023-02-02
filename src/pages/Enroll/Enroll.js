import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { enrollHeaderData } from "./data/Enroll.data";

const Enroll = () => {
    return(
        <>
            <Header data={enrollHeaderData} position={{posX: 0, posY: 50}} />
            <Footer />
        </>
    );

}

export default Enroll;