// import React from "react";
// import "./style.css";

// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb25kaWciLCJhIjoiY2tobnMzNnYwMDR1ejM1bzU1b2cyNnljNCJ9.qtupNlfb7Jam-q_Gdg0z2Q';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

// function Map(props) {
//     return <div className="map" id="map">
//         {map}
//     </div>;
//   }
  
//   export default Map;
  


  /* src/App.js */
import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyb25kaWciLCJhIjoiY2tobnMzNnYwMDR1ejM1bzU1b2cyNnljNCJ9.qtupNlfb7Jam-q_Gdg0z2Q';

const Map = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-104.9876, 39.7405],
      zoom: 12.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;