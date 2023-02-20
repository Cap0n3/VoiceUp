import {useEffect} from "react";

/**
 * Custom hook to create anchors links.
 * 
 * ## Usage
 * 
 * Here's the link, it uses state property of react router links :
 * 
 * ```html
 * <Link to="/contact" state={{ anchor: "#map" }}>Click Me !</Link>
 * ````
 *
 * Then, here's the setup in page where anchored content is :
 * 
 * ```js
 * const sectionRef = useRef(null); // Create ref
 * let location = useLocation(null); // Get location object
 * useAnchor(sectionRef, location, "#map"); // Create anchor with name "#map"
 * ```
 * 
 * If a navbar needs to be taken into consideration when positionning anchored section simply specify an offset.
 * 
 *  ```js
 * const sectionRef = useRef(null); // Create ref
 * let location = useLocation(null); // Get location object
 * useAnchor(sectionRef, location, "#map", 200); // Create anchor with name "#map"
 * ```
 * 
 * @param {object} sectionRef - Reference of anchored section.
 * @param {object} location - Location object (of useLocation).
 * @param {string} anchorName - Name of the anchor.
 * @param {} offset - Offset of section scoll if any (default=0).
 */
const useAnchor = (sectionRef, location, anchorName, offset=0) => {
    useEffect(() => {
        const fooFunc = (totalOffset) => {
            window.scroll({
                top: totalOffset,
                behavior: "smooth"
            });
        }

        if(!location.state) return;
        if(location.state.anchor === anchorName){
            fooFunc(sectionRef.current.offsetTop - offset);
        }
    }, [sectionRef.current, location.state])    
}

export default useAnchor;