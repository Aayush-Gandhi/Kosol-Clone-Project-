import React, { useState } from "react";

import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import { Map, Marker, NavigationControl, Popup } from "react-map-gl";

const MAPBOX_GL_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_GL_ACCESS_TOKEN;

const MapSearch = () => {
    const [popupInfo, setPopupInfo] = useState(null);
    const [viewState, setViewState] = React.useState({
        longitude: 72.50291246137696,
        latitude: 23.01991334259394,
        zoom: 15,

    });


    return (
        <div className="h-[550px] lg:h-[810px] w-[100%]">
            <Map
                {...viewState}
                onMove={(evt) => setViewState(evt.viewState)}
                style={{
                    // position: "absolute",
                    height: "100%",
                    width: "100%",
                    zIndex: 0,
                    top: 0,
                    right: 0,
                    pointerEvents: "all",
                }}
                scrollZoom={false}
                mapStyle="mapbox://styles/mapbox/streets-v12"
                mapboxAccessToken={MAPBOX_GL_ACCESS_TOKEN}
            >
                <Marker
                    longitude={72.50191246137696}
                    latitude={23.02021334259394}
                    color="red"

                    onClick={(e) => {
                        const { lng, lat } = e.target._lngLat;
                        e.originalEvent.stopPropagation();
                        setPopupInfo({ lng, lat, name: "Sun Energie PVT" });
                    }}
                    style={{ cursor: "pointer" }}
                />

                <Marker
                    longitude={72.50260302986025}
                    latitude={23.019465967686145}
                    color="red"

                    onClick={(e) => {
                        const { lng, lat } = e.target._lngLat;
                        e.originalEvent.stopPropagation();
                        setPopupInfo({ lng, lat, name: "Kalthia House" });
                    }}
                    style={{ cursor: "pointer" }}
                />

                {popupInfo && (
                    <Popup
                        longitude={popupInfo.lng}
                        latitude={popupInfo.lat}
                        anchor="bottom"
                        onClose={() => setPopupInfo(null)}
                    >
                        {popupInfo.name}
                    </Popup>
                )}
                <NavigationControl position="bottom-left" />

                <div className="bg-white absolute bottom-[8%] lg:bottom-[20%] right-[5%] lg:right-[10%] text-xs lg:text-lg p-2 lg:p-6 w-[60%] lg:w-[30%]">
                    <p className="lg:w-[70%]">Sun Energie Pvt. Ltd. 744, "Kalthia House", Shivdham Farm, Bh.Karnavati Club, S.G. Highway, Ahmedabad-380015, Gujarat, INDIA.</p>
                    <p className="lg:w-[70%] mt-5">'Kalthia House', 193,Satyagrah Chhavni, Opp. Iscon Mall, S.G. Highway, Ahmedabad-380015, Gujarat, INDIA.</p>
                </div>
            </Map>
        </div>
    );
};

export default MapSearch;








// import React, { useState } from 'react';
// import ReactMapGL, { Marker } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';

// export default function LocationMap() {

//     const [viewport, setViewport] = useState({
//         latitude: 37.7577,
//         longitude: -122.4376,
//         zoom: 8,
//         bearing: 0,
//     });
//     const marker1 = {
//         latitude: 37.7577,
//         longitude: -122.4376,
//     };

//     const marker2 = {
//         latitude: 37.7749,
//         longitude: -122.4194,
//     };
//     console.log("pk.eyJ1IjoibWluaW1hbHByb2QiLCJhIjoiY2trNTl1b3dzMWJ2MjJzcnk1amEzemh3bCJ9.D1069PhiG7WWBRhkXOOXVA")
//     return (
//         <div className='w-[500px] h-[500px]'>
//             <ReactMapGL
//                 {...viewport}
//                 width="100%"
//                 height="100%"
//                 mapboxApiAccessToken={"pk.eyJ1IjoibWluaW1hbHByb2QiLCJhIjoiY2trNTl1b3dzMWJ2MjJzcnk1amEzemh3bCJ9.D1069PhiG7WWBRhkXOOXVA" }
//                 onViewportChange={(viewport) => {
//                     setViewport(viewport);
//                 }}
//             >
//                 <Marker latitude={marker1.latitude} longitude={marker1.longitude}>
//                     <img src="/path/to/marker1.svg" alt="Marker 1" />
//                 </Marker>

//                 <Marker latitude={marker2.latitude} longitude={marker2.longitude}>
//                     <img src="/path/to/marker2.svg" alt="Marker 2" />
//                 </Marker>
//             </ReactMapGL>

//         </div>
//     )
// }
