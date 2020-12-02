import react ,{useState, useEffect} from "react";
import "./style.css";
import { useSpring, animated, useTransition } from "react-spring";
import { useSwipeable } from "react-swipeable";
import IndicatorDots from "./indicatordots";
import Carousel from "re-carousel";
import Upload from "../Upload";
import API from "../../utils/API";

function Popup({ country, setUploadState, transitions, countryState}) {
  console.log(transitions);
  const [followingVisited, setFollowingVisited] = useState([]);
  const [followingDataState, setFollowingDataState ] = useState([]);
  const [userDataState, setUserDataState ] = useState([]);
  const [travled, setTravled] = useState(false);

  useEffect(()=>{
    getUser();
  },[]);

// console.log(followingVisited)
console.log(userDataState);

  const handleUploadClick = (event) => {
    event.preventDefault();
    setUploadState(true);
  };
  const handleVisited = (event) => {
    event.preventDefault();
    //console.log("clicked visited");
    //find a better soultion then on mouse move to check and render results;
    checkVisited();
  };
  const handleTravled = (event) => {
    event.preventDefault();
    checkIfAlreadyTravled();
  };
  const getUser = () => {
    API.getUserData()
    .then(results => {
      setUserDataState(results.data[0]);
        var following = [];
        for(let i =0; i<results.data[0].Followers.length; i++){
          following.push({id: results.data[0].Followers[i].following});
        }
        return following;
    }).then(following => {
      getFollowingCountry(following)
    })
    .catch(err => console.log(err));
  }

  const getFollowingCountry = (following) =>{
    API.getFollowingInfo({followingId: following})
    .then(res =>{
      setFollowingDataState(res.data);
    }).catch(err =>{
      console.log(err);
    }); 
  }
  const checkIfAlreadyTravled = () =>{
      if (userDataState.UserCountries.some(e => e.CountryName === countryState)) {
        setTravled(true);
      }
      else{
        setTravled(false);
      }
  }
  const checkVisited = () =>{
    //console.log(followingDataState);
    for(let y = 0; y<followingDataState.length; y++){
      setFollowingVisited([]);
      if (followingDataState[y].UserCountries.some(e => e.CountryName === countryState)) {
        setFollowingVisited(followingVisited => [...followingVisited, {visited: followingDataState[y].username}])
        //console.log("visited hit") 
      }
    }
  }

  //console.log(followingVisited);
  return (
    <div className="popup">
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props}>
              <div className="popupContainer" >
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
                <Carousel widgets={[IndicatorDots]}>
                  <div className="swipe">
                    <div className="swipeBanner">
                      <div className="swipeItem">
                        <h2 className="swipeTitle">Capital</h2>
                        <h1 className="swipeReturn">{country.capital}</h1>
                      </div>
                      <div className="swipeItem">
                        <h2 className="swipeTitle">Currency</h2>
                        <h1 className="swipeReturn">
                          {country.currencies[0].name}
                        </h1>
                      </div>
                      <div className="swipeItem">
                        <h2 className="swipeTitle">Language</h2>
                        <h1 className="swipeReturn">
                          {country.languages[0].name}
                        </h1>
                      </div>
                    </div>
                    {/* <hr/> */}
                    <Upload country={countryState}/>
                  </div>

                <div className="popupContent" onMouseMove = {handleTravled}>
                    {travled
                    ?<div></div>
                    :<a id="traveledbtn">
                      <div className="popupbox">
                        <div className="traveledbtn">
                          Add Traveled
                        </div>
                      </div>
                    </a>
                    }
                  <div className="visited" onMouseMove={handleVisited}>
                    <div className="visitedTop">
                      <h2 className="visitedHeader">Friends that visited:</h2>
                    </div>
                        <div className="visitedList">
                          <ul className="list">
                          {followingVisited.map((friend, index) =>
                          <p key = {index}>
                              {friend.visited}
                          </p >
                          )}
                          </ul>
                      </div>
                  </div>
                  <div className="bottomBox">
                      <img src={country.flag} />
                  </div>
                  </div>
                </Carousel>
              </div>
            </animated.div>
          )
      )}
      {/* <a className="popupbtn" id="postbtnContainer" onClick={handleUploadClick}>
        <div id="postbtn">
          <h2 id="postbtnText">Post</h2>
          <i className="material-icons material-icons-outlined" id="post">
            add
          </i>
        </div>
      </a> */}
    </div>
  );
}

export default Popup;
