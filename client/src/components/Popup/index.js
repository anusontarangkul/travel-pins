import react from 'react';
import './style.css';

function Popup({country}){
  console.log(country);
    return <div className="popupContainer">
        <h1 className="countryTitle">{country.name}</h1>
        <div className="contentWrap">
          <button id="traveledbtn">
            Traveled
          </button>
          <button id="traveledbtn">
            Upload
          </button>
        </div>
    </div> ;

}

export default Popup;