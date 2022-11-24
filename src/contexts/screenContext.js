import react, {useState, useEffect, createContext} from 'react';

export const ScreenContext = createContext();

export const ScreenProvider = ({children}) => {
    const [screenSize, setScreenSize] = useState({
        innerWidth : null,
        innerHeight : null
    });

    const [scrollPosition, setScrollPos] = useState(null);

    const getScreenSize = () => {
        let updatedData = {
            innerWidth : window.innerWidth,
            innerHeight : window.innerHeight
        }
        setScreenSize(screenSize => ({
            ...screenSize,
            ...updatedData
        }));
    }
    
    useEffect(() => {
        window.addEventListener("load", (event) => {getScreenSize()});
        window.addEventListener("resize", (event) => {getScreenSize()});
        return () => {
            window.removeEventListener("load", (event) => {getScreenSize()});
            window.removeEventListener("resize", (event) => {getScreenSize()});
        }
    }, []);

    return(
        <ScreenContext.Provider value={screenSize}>
            { children }
        </ScreenContext.Provider>
    );
}