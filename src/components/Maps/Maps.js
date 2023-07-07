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
        lat: 46.196895021090576,
        lng: 6.1305201153444475
    };
    
    return(
        <>
            {!isLoaded ? <p>LOADING ...</p> : 
            <GoogleMap zoom={16} center={location} mapContainerStyle={containerStyle}>
                <Marker position={location} />
            </GoogleMap>}
        </>
    );
}

export default Maps;