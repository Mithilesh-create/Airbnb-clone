
// import MapboxGl, { Marker } from 'mapbox-gl';
import { HomeIcon } from '@heroicons/react/solid';
import {  useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
function MapHouses(props) {
    const { locations ,token} = props;
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 51.5074,
        longitude: -0.1278,
        zoom: 12.5
    });

    return (
        <div className="w-full h-full">
            <ReactMapGL
                doubleClickZoom
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={token}
                {...viewport}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
            >
                {locations.map((location) => (
                    <div key={location.id}>
                        <Marker
                            latitude={location.center[1]}
                            longitude={location.center[0]}
                        >
                            <HomeIcon className="cursor-pointer" width={30} height={30} onClick={() => { }} />
                        </Marker>
                    </div>
                ))}
            </ReactMapGL>
        </div>
    )
}

export default MapHouses