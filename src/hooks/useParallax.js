import { useEffect, useState } from "react";
import useScroll from "./useScroll";

/**
 * 
 * This custom hook provide allow the creation of a parallax effect on an image.
 * 
 * > **Dependency** : useScroll hook (hook that provides scroll position).
 * 
 * ## Operation
 * 
 * To achieve the parallax effect, the hook will return a dynamic value based on the scroll position 
 * of a specific component. Value start at 0 and when reference component is visible on 
 * screen, it'll start incrementing the value until element is not visible anymore on screen (the max value
 * is determined by screen height).
 * 
 * Then, when user scroll back up, it'll decrement the value (which has been memorized) until component
 * is not visible anymore on screen. This functionnality allows to create a moving images thanks to css
 * transform's `translate3d()` property.
 * 
 * ## Usage
 * 
 * For this example, the dynamic value is stored `parallaxOffset` variable. Then, the value should be passed to
 * style component to increment/decrement the `ty` value of transform's `translate3d(tx, ty, tz)` css property
 * to create a moving fx for image.
 * 
 * ### Screen & scroll :
 * 
 * To correcly function, the hook will need the scroll position (useScroll hook) & screen height given as argument. 
 * For screen height, you can do as you please to get the right value but a custom defined hook `useWindowSize` is $
 * a good way (a hook is used in exemple below)
 * 
 * ### App parent perspective :
 * 
 * For the parallax FX to work, `App.js` main element should have a perspective property set.
 * 
 * ### JSX component setup :
 * 
 * ```js
 * import React, {useRef} from "react";
 * import useParallax from "../../hooks/useParallax";
 * 
 * const MyComponent = () => {
 *  // Get position of component in page
 *  const reference = useRef();
 *  // Get screen height from hook
 *  const screenSize = useWindowSize();
 *  // Setup parallax hook
 *  const parallaxOffset = useParallax(reference, screenSize.innerHeight);
 *  
 *  return(
 *      <MyContainer ref={reference}>
 *          <ImgDiv paralOffset={parallaxOffset}></ImgDiv>
 *      </MyContainer>
 *  );
 * }
 * ```
 * 
 * ### CSS setup :
 * 
 * Here's the css setup (using styled component) for the parent & child components. Parent
 * component should have an smaller height than the image :
 * 
 * ```js
 * // Parent component
 * export const MyContainer = styled.section`
 *  position: relative;
 *  width: 100%;
 *  height: 400px;
 *  transform-style: preserve-3d;
 *  z-index: -1;
 * `;
 * 
 * // Child component
 * export const ImgDiv = styled.div`
 *  position: absolute;
 *  height: 600px;
 *  width: 100%;
 *  background-image: url("myImage.jpg");
 *  background-position: center center;
 *  background-repeat: no-repeat;
 *  background-size: cover;
 *  transform: translate3d(0%, ${({paralOffset}) => paralOffset}px, 0px);
 *  z-index: -1;
 * `;
 * ```
 * @param   {object}    componentRef    - Reference of parent component.
 * @param   {int}       screenHeight    - Screen inner height value.
 * @returns                             - Dynamic value (int).
 */
const useParallax = (componentRef, screenHeight) => {
    const [elementPosition, setElementPos] = useState(null);
    const [parallaxOffset, setParallaxOffset] = useState(0);
    const [divider, setDivider] = useState(null);
    const scrollPosition = useScroll();

    /**
     * Utils function that returns a divider value depending on screen height
     * to setup an optimal parallax effect for images. The divider will
     * determine the amplitude of movement.
     */
     const getDividerVal = () => {
        if(screenHeight < 869) {
            setDivider(7);
        }
        else if(screenHeight < 1024 && screenHeight > 869) {
            setDivider(9);
        }
        else if(screenHeight < 1280 && screenHeight > 1024) {
            setDivider(6);
        }
    }

    // Determine when component is visible and when it's not anymore
    useEffect(() => {    
        getDividerVal();
        if(elementPosition !== null) {
            const heightOfComponent = componentRef.current.clientHeight;
            const elementStartPos = elementPosition // When element is visible
            const elementEndPos = elementPosition + screenHeight + heightOfComponent // When element is not visible
            
            if (scrollPosition > elementStartPos && scrollPosition < elementEndPos) {
                let parallaxIncrement = Math.round((scrollPosition - elementStartPos) / divider)              
                setParallaxOffset(parallaxIncrement);        
            }
            else if (scrollPosition > elementEndPos) {
                // COMPONENT ISN'T VISIBLE ANYMORE
                // console.log("Element is not visible !")
            }
        }
    }, [scrollPosition])

    useEffect(() => {
        // Set raw position of component in page
        const rawElPosition = componentRef.current.offsetTop;
        // Determine exact start position of component 
        setElementPos(rawElPosition - screenHeight)
    }, [screenHeight])

    return parallaxOffset;
}

export default useParallax;