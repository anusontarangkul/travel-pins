import react from "react";
import "./style.css";
import { useSpring, animated, useTransition } from "react-spring";
import { useSwipeable } from "react-swipeable";

function Popup({ country, setUploadState, transitions }) {
  const handleUploadClick = (event) => {
    event.preventDefault();
    setUploadState(true);
  };

  const handlers = useSwipeable({
    onSwipedUp: (eventData) => console.log("User Swiped!"),
  });

  return (
    <div className="popup">
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div {...handlers} key={key} style={props}>
              <div className="popupContainer">
                <div className="popupHeader">
                  <h1 className="countryTitle">{country.name}</h1>
                  <div className="btncontainer">
                    <i
                      className="material-icons material-icons-outlined"
                      id="upbtn"
                    >
                      expand_less
                    </i>
                  </div>

                </div>
                <div className="popupContent">
                  <a id="traveledbtn">
                    <div className="popupbox">
                      <div className="traveledbtn">
                       Traveled
                      </div>
                    </div>
                  </a>
                  <div className="visited">
                    <div className="visitedTop">
                      <h2 className="visitedHeader">Friends that visited:</h2>
                    </div>
                    <div className="visitedList">
                      <ul className="list">
                        {/* MAP GOES HERE */}
                      </ul>
                    </div>
                  </div>
                  <div className="bottomBox">
                    <img src={country.flag}/>
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
      <a className="popupbtn" id="postbtnContainer" onClick ={handleUploadClick}>
        <div id="postbtn">
          <h2 id="postbtnText">Post</h2>
          <i className="material-icons material-icons-outlined" id="post">
            add
          </i>
        </div>
      </a>
    </div>
  );
}

export default Popup;
