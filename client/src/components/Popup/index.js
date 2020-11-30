import react from 'react';
import './style.css';
import {useSpring, animated, useTransition} from 'react-spring';


function Popup({country, transitions, set}){

  // const props = useSpring({from: {opacity: 0}, to: {opacity: 1}});

    return transitions.map(({ item, key, props }) =>
    item && <animated.div key={key}style={props} className="popupContainer">
        <h1 className="countryTitle">{country.name}</h1>
        <div className="contentWrap">
          <button id="traveledbtn">
            Traveled
          </button>
          <button id="traveledbtn">
            Upload
          </button>
        </div>
    </animated.div> 
    )}

export default Popup;