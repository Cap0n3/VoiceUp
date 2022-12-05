import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../App";

const useAppear = (componentRef) => {
    const [componentPos, setComponentPos] = useState(null);
    const [componentHeight, setComponentHeight] = useState(null);
    const currentScrollPos = useContext(ScrollContext);
    
    useEffect(() => {
        // if(componentRef.current.componentHeight !== null) {
        //     console.log(componentRef.current.clientHeight)
        // }
        console.log(componentRef.current)
    }, [componentRef])
}

export default useAppear;