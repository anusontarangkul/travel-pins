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
      style: 'mapbox://styles/aarondig/ckhns66tw0zj71apj50vubwrq',
      center: [-40.9876, 14.7405],
      zoom: .4,
      attributionControl: false
    });

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;