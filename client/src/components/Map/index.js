import React, { useState, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css';
import $ from "jquery";
import API from "../../utils/API";


// username: dave
// password: password

mapboxgl.accessToken = "pk.eyJ1IjoiY29kaW5nZGF2aWQiLCJhIjoiY2tobnMzNTl6MWM5aTJ5cGV1ZnE2c2VsYiJ9.mOoyaL49RBuUijTy3MmiRw";

const Map = ({ setCountry, setPopup, setCountryState, setUploadState, set }) => {
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
    let currentCountry = ""
    map.on("click", function () {
      set(false);
      setUploadState(false);
      // hiding visibility of highlighted country when clicked off
      if (currentCountry != "") { map.setLayoutProperty(currentCountry, 'visibility', 'none') }
    });

    map.on("click", "countries", function (mapElement) {
      const countryCode = mapElement.features[0].properties.ADM0_A3_IS;

      //Fly to country
      console.log(countryCode)
      
      

      $.ajax({
        url:
          "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          countryCode +
          ".json?&access_token=" +
          mapboxgl.accessToken,
        success: function (res) {
          console.log(res.features)
          if (countryCode === "USA"){
          map.fitBounds([
            [res.features[0].bbox[0], res.features[0].bbox[1]],
            [res.features[0].bbox[2], res.features[0].bbox[3]]
          ],{padding:{top: 30, bottom: 380, right: 0, left: 0}});
        } else if  (countryCode === "GRL"){
          map.fitBounds([
            [res.features[0].bbox[0], res.features[0].bbox[1]],
            [res.features[0].bbox[2], res.features[0].bbox[3]]
          ],{padding:{top: 160, bottom: 300, right: 0, left: 0}});
        }
        else if  (countryCode === "RUS" || countryCode === "CAN" ){
          map.fitBounds([
            [res.features[0].bbox[0], res.features[0].bbox[1]],
            [res.features[0].bbox[2], res.features[0].bbox[3]]
          ],{padding:{top: 100, bottom: 380, right: 0, left: 0}});
        } else if  (countryCode === "AUS"){
          map.fitBounds([
            [res.features[1].bbox[0], res.features[1].bbox[1]],
            [res.features[1].bbox[2], res.features[1].bbox[3]]
          ],{padding:{top: 100, bottom: 480, right: 50, left: 50}});
        } else if  (countryCode === "MAR"){
          map.fitBounds([
            [res.features[2].bbox[0], res.features[2].bbox[1]],
            [res.features[2].bbox[2], res.features[2].bbox[3]]
          ],{padding:{top: 100, bottom: 480, right: 50, left: 100}});
        } else if  (countryCode === "NOR"){
          map.fitBounds([
            [res.features[4].bbox[0], res.features[4].bbox[1]],
            [res.features[4].bbox[2], res.features[4].bbox[3]]
          ],{padding:{top: 100, bottom: 480, right: 50, left: 50}});
        } else if  (countryCode === "LAO"){
          map.fitBounds([
            [res.features[4].bbox[0], res.features[4].bbox[1]],
            [res.features[4].bbox[2], res.features[4].bbox[3]]
          ],{padding:{top: 100, bottom: 480, right: 50, left: 50}});
        } else if  (countryCode === "SYR"){
          map.fitBounds([
            [res.features[1].bbox[0], res.features[1].bbox[1]],
            [res.features[1].bbox[2], res.features[1].bbox[3]]
          ],{padding:{top: 100, bottom: 480, right: 50, left: 50}});
        } else if  (countryCode === "GUY"){
          map.fitBounds([
            [res.features[3].bbox[0], res.features[3].bbox[1]],
            [res.features[3].bbox[2], res.features[3].bbox[3]]
          ],{padding:{top: 100, bottom: 480, right: 50, left: 50}});
        } else if  (countryCode === "SLE"){
          map.fitBounds([
            [res.features[1].bbox[0], res.features[1].bbox[1]],
            [res.features[1].bbox[2], res.features[1].bbox[3]]
          ],{padding:{top: 100, bottom: 480, right: 50, left: 50}});
        } else {
        map.fitBounds([
          [res.features[0].bbox[0], res.features[0].bbox[1]],
          [res.features[0].bbox[2], res.features[0].bbox[3]]
        ],{padding:{top: 100, bottom: 480, right: 50, left: 50}});
      }
      }
      });
    
      // Grab the country code from the map properties.
      fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`) // Using tempalate tags to create the API request
        .then((data) => data.json()) //fetch returns an object with a .json() method, which returns a promise
        .then((country) => {
          //country contains the data from the API request

          // if layer for specific country already exists, layer becomes visible
          if (map.getLayer(`traveled-${countryCode}`)) {
            map.setLayoutProperty(`traveled-${countryCode}`, 'visibility', 'visible');

            //else new country layer is added
          } else {
            map.addLayer({
              id: `traveled-${countryCode}`,
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
            map.setFilter(`traveled-${countryCode}`, ["in", "ADM0_A3_IS"].concat(countryCode));
          }// Call Popup Component
          currentCountry = `traveled-${countryCode}`
          setCountry(country);
          set(true);
          //setPopup(true);
          setCountryState(countryCode);

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

          // $(".photos").on("click" , (event) =>{
          //   event.preventDefault();

          // })

          // document.getElementById(country.name).onclick = addTraveledCountry;

          // var traveledID = document.querySelector(".travled")
          // traveledID.addEventListener("click", addTraveledCountry())
        });
    });

    //Add Geocoder (Search)

    // clean up on unmount

    return () => map.remove();
  }, []);

  return (
    <div className="map-container" ref={mapContainerRef}  ></div>
  )
};

export default Map;

