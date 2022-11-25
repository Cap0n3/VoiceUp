import { useEffect, useState, useContext } from "react";
import { ScrollContext } from "../App";

const useFoo = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollPosContext = useContext(ScrollContext); // Get scroll position

    useEffect(() => {
        setScrollPosition(scrollPosContext);
    }, [scrollPosContext])

    return scrollPosition;
}

export default useFoo;