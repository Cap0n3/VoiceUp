import { useEffect, useContext } from "react";
import { MobileMenuContext } from "../App";

/**
 * Hook used to scroll back original position when mobile menu is closed.
 * Created to address a problem with a visible scroll bar when mobile menu is open.
 * 
 * > **Dependency** : Need mobile menu context with state object `{isOpen: <state>, scrollPosition: <scroll_position>}`, 
 * > where `isOpen` is the state of menu (open/closed -> true/false) and `scrollPosition` the scroll position at the time of opening.
 * > Context is imported here to avoid import it for every site page (DRY).
 *
 * > **Note** : Solution to avoid scrollbar in mobile menu is to position main container to css `fixed`. But when you do so,
 * > it goes back to the top of page so you have to capture position at the time of opening and implement this solution.
 */
const useMobileScrollBack = () => {
    const {mobileMenuState} = useContext(MobileMenuContext);
    
    /**
     * Check if mobile menu is closing and scroll back to original
     * position (when mobile menu was open).
     */
    useEffect(() => {
        if(!mobileMenuState.isOpen) {
            console.log(mobileMenuState.scrollPosition)
            // Scroll back to original position
            window.scrollTo(0, mobileMenuState.scrollPosition);
        }
        console.log(mobileMenuState)
    }, [mobileMenuState])

    return mobileMenuState;
}

export default useMobileScrollBack;