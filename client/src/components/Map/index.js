import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css';
import $ from "jquery";
import API from "../../utils/API"

// username: dave
// password: password

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

    map.on('load', function () {
      map.addLayer({
        'id': 'countries',
        'source': {
          'type': 'vector',
          'url': 'mapbox://codingdavid.00075afe',
        },
        'source-layer': 'ne_10m_admin_0_countries-cdqk4p',
        'type': 'fill',
        'paint': {
          'fill-color': '#63A583',
          'fill-outline-color': '#111B1E',
          'fill-opacity': 0,
        },
      });
      // map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat(['USA', 'AUS', 'NGA']));
    });
    map.on('click', 'countries', function (mapElement) {
      const countryCode = mapElement.features[0].properties.ADM0_A3_IS;

      // Grab the country code from the map properties.
      fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`) // Using tempalate tags to create the API request
        .then((data) => data.json()) //fetch returns an object with a .json() method, which returns a promise
        .then((country) => { //country contains the data from the API request
          map.addLayer({
            'id': 'traveled',
            'source': {
              'type': 'vector',
              'url': 'mapbox://codingdavid.00075afe',
            },
            'source-layer': 'ne_10m_admin_0_countries-cdqk4p',
            'type': 'fill',
            'paint': {
              'fill-color': '#e4dbd9',
              'fill-outline-color': '#111B1E',

            },
          });
          map.setFilter('traveled', ['in', 'ADM0_A3_IS'].concat(countryCode));
          // Let's build our HTML in a template tag

          const html = `
            <div>
              <h3 class="country-name">${country.name}</h3>
              <img class="flag-icon" src='${country.flag}'/>
            </div>
            <div>
              <button id=${country.name} class="traveled">Traveled<button>
              <button>Photos<button>
              </div>
         
           
          `; // Now we have a good looking popup HTML segment.
          new mapboxgl.Popup() //Create a new popup
            .setLngLat(mapElement.lngLat) // Set where we want it to appear (where we clicked)
            .setHTML(html) // Add the HTML we just made to the popup
            .addTo(map); // Add the popup to the map

          // Event listener for traveled counries
          $(".traveled").click(function () {
            console.log(typeof countryCode)
            API.saveCountry({ country: countryCode }).then(res => { console.log("saved") }).catch(err => (console.log(err)))
            map.addLayer({
              'id': countryCode,
              'source': {
                'type': 'vector',
                'url': 'mapbox://codingdavid.00075afe',
              },
              'source-layer': 'ne_10m_admin_0_countries-cdqk4p',
              'type': 'fill',
              'paint': {
                'fill-color': '#63A583',
                'fill-outline-color': '#111B1E'

              },
            });
            map.setFilter(countryCode, ['in', 'ADM0_A3_IS'].concat(countryCode));
          });

          // document.getElementById(country.name).onclick = addTraveledCountry;


          // var traveledID = document.querySelector(".travled")
          // traveledID.addEventListener("click", addTraveledCountry())


        });
    });

    //Add Geocoder (Search)

    // clean up on unmount
    return () => map.remove();
  }, []);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default Map;