/**
 * JSX icon.
 * 
 * IMPORTANT : to use svg with React, don't forget to convert <svg> attributes like 'sketch:type' TO 'sketchType', 
 * 'xmlns:xlink' TO 'xmlnsXlink' or 'xlink:href' TO 'xlinkHref' otherwise it won't work.
 */
const RocketIcon = () => {
    return(
        <svg width="100%" height="100%" viewBox="0 0 57 79" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/">
            <path id="Wing-L" serifId="Wing L" d="M2,77l0,-19.976l4.185,-4.318l5.068,-0.654c-0.085,11.058 5.732,14.89 5.732,14.89l-14.985,10.058Z" />
            <path id="Wing-R" serifId="Wing R" d="M53.966,77l0,-19.976l-4.185,-4.318l-5.068,-0.654c0.085,11.058 -5.732,14.89 -5.732,14.89l14.985,10.058Z" />
            <path id="Body" d="M28.005,3.002l-0.005,-0.002c0,-0 -7.127,2.066 -13.79,25.215c-1.132,3.932 -0.813,16.469 -0.528,23.923c0.547,14.274 12.319,19.202 12.319,19.202l0,-18.443c2.055,-2.026 3.994,0.017 3.994,0.017l0.004,18.426c-0,-0 11.772,-4.928 12.319,-19.202c0.285,-7.454 0.604,-19.991 -0.528,-23.923c-6.559,-22.788 -13.568,-25.145 -13.785,-25.213Zm-6.963,20.957c2.927,-10.975 6.958,-14.102 6.958,-14.102c0,0 4.031,3.127 6.958,14.102l-13.916,0Z" />
        </svg>  
    );
}

export default RocketIcon;