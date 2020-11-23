import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kaW5nZGF2aWQiLCJhIjoiY2tobnMzNTl6MWM5aTJ5cGV1ZnE2c2VsYiJ9.mOoyaL49RBuUijTy3MmiRw';

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/codingdavid/ckhtww0zw4dbf19qin49td8jk',
      center: [-32.9876, 9.7405],
      zoom: 1.5,
      attributionControl: false,
      logoEnabled: false
    });


    //Add Geocoder (Search)

    // clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;