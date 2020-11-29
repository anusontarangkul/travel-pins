import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css';
import $ from "jquery";
import API from "../../utils/API";

// username: dave
// password: password

mapboxgl.accessToken = "pk.eyJ1IjoiY29kaW5nZGF2aWQiLCJhIjoiY2tobnMzNTl6MWM5aTJ5cGV1ZnE2c2VsYiJ9.mOoyaL49RBuUijTy3MmiRw";

const Map = ({setCountry, setPopup}) => {
  const mapContainerRef = useRef(null);

  // useState for countries users have been to
  // useEffect to make API call  to userCountries
  // setState of users
  // render countries green in array in 2nd layer

  // const [savedCountry, setSavedCountry] = useState([]);

  // useEffect(() => {

  // }, []);



  // const savedCountryLayers = savedCountry.map

  useEffect(() => {

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/codingdavid/ckhtww0zw4dbf19qin49td8jk",
      center: [-85, 9.7405],
      zoom: 1.5,
      attributionControl: false,
      logoEnabled: false,
      minZoom: 1.5,
      maxZoom: 5
    });

    map.on("load", function () {
      map.addLayer({
        id: "countries",
        source: {
          type: "vector",
          url: "mapbox://codingdavid.00075afe",
        },
        "source-layer": "ne_10m_admin_0_countries-cdqk4p",
        type: "fill",
        paint: {
          "fill-color": "#63A583",
          "fill-outline-color": "#111B1E",
          "fill-opacity": 0,
        },
      });
      // map.setFilter('countries', ['in', 'ADM0_A3_IS'].concat(['USA', 'AUS', 'NGA']));
      const getCountryDb = () => {
        API.getCountry()
          .then(res => {
            // for (let i = 0; i < res.data.length; i++) {
            res.data.forEach(function (country) {

              // console.log(res.data[i].CountryName)
              // setSavedCountry(res.data[i].CountryName);

              console.log(country.CountryName)
              map.addLayer({
                // 'id': res.data[i].CountryName,
                'id': country.CountryName,
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
              map.setFilter(country.CountryName, ['in', 'ADM0_A3_IS'].concat(country.CountryName));


            })


          }).catch(err => { console.log(err) });
      }
      getCountryDb();
    });
    // Every Click on map popup is false
   map.on("click", function(){
    setPopup(false);
   });

    map.on("click", "countries", function (mapElement) {
      const countryCode = mapElement.features[0].properties.ADM0_A3_IS;

      //Fly to country
      $.ajax({
        url:
          "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          countryCode +
          ".json?&access_token=" +
          mapboxgl.accessToken,
        success: function (res) {
          map.easeTo({
            center: res.features[0].center,
            speed: 1, // make the flying slow 
          });
        },
      });
      // Grab the country code from the map properties.
      fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`) // Using tempalate tags to create the API request
        .then((data) => data.json()) //fetch returns an object with a .json() method, which returns a promise
        .then((country) => {
          //country contains the data from the API request
          map.addLayer({
            id: "traveled",
            source: {
              type: "vector",
              url: "mapbox://codingdavid.00075afe",
            },
            "source-layer": "ne_10m_admin_0_countries-cdqk4p",
            type: "fill",
            paint: {
              "fill-color": "#EB3349",
              "fill-outline-color": "#f4f4f4",
            },
          });
          map.setFilter("traveled", ["in", "ADM0_A3_IS"].concat(countryCode));
          // Call Popup Component

          setCountry(country);
          setPopup(true);
        
          // const html = `
          //   <div class="popupBox">
              
          //   </div>
         
           
          // `;
          // Now we have a good looking popup HTML segment.

          // new mapboxgl.Popup() //Create a new popup
          //   .setLngLat(mapElement.lngLat) // Set where we want it to appear (where we clicked)
          //   .setHTML(html).setMaxWidth("none") // Add the HTML we just made to the popup
          //   .addTo(map); // Add the popup to the map

          // Event listener for traveled counries (On Click)
          $("#traveledbtn").click(function () {
            console.log(typeof countryCode);
            API.saveCountry({ country: countryCode })
              .then((res) => {
                console.log("saved");
              })
              .catch((err) => console.log(err));
            map.addLayer({
              id: countryCode,
              source: {
                type: "vector",
                url: "mapbox://codingdavid.00075afe",
              },
              "source-layer": "ne_10m_admin_0_countries-cdqk4p",
              type: "fill",
              paint: {
                "fill-color": "#63A583",
                "fill-outline-color": "#111B1E",
              },
            });
            
            map.setFilter(
              countryCode,
              ["in", "ADM0_A3_IS"].concat(countryCode)
            );
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
