import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: "100%"
};

const Maps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
    const location = {
        lat: 46.17629295000025,
        lng: 6.113382306933318
    };
    
    return(
        <>
            {!isLoaded ? <p>LOADING ...</p> : 
            <GoogleMap zoom={15} center={location} mapContainerStyle={containerStyle}>
                <Marker position={location} />
            </GoogleMap>}
        </>
    );
}

export default Maps;