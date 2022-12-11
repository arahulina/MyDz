import React from 'react'
import { GoogleMap, useJsApiLoader,Marker  } from '@react-google-maps/api';
import env from "react-dotenv";

const containerStyle = {
    width: '800px',
    height: '400px'
};

const center = {
    lat: 46.94572125800658,
    lng: 32.060379981994636
};
const zoom = 5

function GoogleMapTestModule() {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            defaultZoom={2}
            zoom={2}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={center} />

        </GoogleMap>
    ) : <></>
}

export default React.memo(GoogleMapTestModule)