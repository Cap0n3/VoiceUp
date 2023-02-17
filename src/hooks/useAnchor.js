import {useEffect} from "react";

/**
 * Custom hook to create anchors links.
 * 
 * It'll use state of
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
 * @param {object} sectionRef - Reference of anchored section.
 * @param {object} location - Location object (of useLocation).
 * @param {string} anchorName - Name of the anchor.
 */
const useAnchor = (sectionRef, location, anchorName) => {
    useEffect(() => {
        const fooFunc = (offset) => {
            window.scroll({
                top: offset,
                behavior: "smooth"
            });
        }

        if(!location.state) return;
        if(location.state.anchor === anchorName){
            fooFunc(sectionRef.current.offsetTop);
        }
    }, [sectionRef.current, location.state])

    
}

export default useAnchor;