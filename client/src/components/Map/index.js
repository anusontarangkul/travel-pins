import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

import './style.css';

// email: anusontarangkul.d@gmail.com
// password: project 3

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kaW5nZGF2aWQiLCJhIjoiY2tobnMzNTl6MWM5aTJ5cGV1ZnE2c2VsYiJ9.mOoyaL49RBuUijTy3MmiRw';

const Map = () => {
  const mapContainerRef = useRef(null);

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/aarondig/ckhns66tw0zj71apj50vubwrq',
      center: [-40.9876, 14.7405],
      zoom: .4,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;