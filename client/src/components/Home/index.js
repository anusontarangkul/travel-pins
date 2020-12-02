import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";
import Feed from "../feed";
import { useSpring, animated } from "react-spring";

function Home() {
  const inputRef = useRef();
  const [searchResultState, setSearchResultState] = useState({
    state: false,
    firstname: "",
    lastname: "",
    username: "",
    userId: "",
  });
  const [FollowerState, setFollowerState] = useState([]);
  const [feedState, setFeedState] = useState([]);
  const [isFollowingState, setIsFollowingState] = useState(false);
  //const globalfollowersId = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(inputRef.current.value)
    API.searchUsers({ search: inputRef.current.value })
      .then((res) => {
        //console.log(res);

        if (res !== null) {
          setSearchResultState({
            state: true,
            firstname: res.data[0].firstName,
            lastname: res.data[0].lastName,
            username: res.data[0].username,
            userId: res.data[0].id,
          });
        }
        console.log(FollowerState);
        console.log(res.data[0].id);
        setIsFollowingState(false);
        for (var i = 0; i < FollowerState.length; i++) {
          if (FollowerState[i].UserId == res.data[0].id) {
            setIsFollowingState(true);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setSearchResultState({
          err: true,
        });
      });
  };

  const handleFollow = (event) => {
    event.preventDefault();
    setIsFollowingState(true);
    API.follow(searchResultState)
      .then((res) => {
        console.log("followed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUnfollow = (event) => {
    event.preventDefault();
    setIsFollowingState(false);
    API.unFollow(searchResultState)
      .then((res) => {
        console.log("unfollowed");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFollowing = () => {
    API.getFollow()
      .then((res) => {
        console.log(res.data[0]);
        var followers = [];
        for (var i = 0; i < res.data.length; i++) {
          //maybe a catch with .includes
          setFollowerState((FollowerState) => [
            ...FollowerState,
            { UserId: res.data[i].following },
          ]);
          followers.push({ UserId: res.data[i].following });
          //globalfollowersId.push(res.data[i].following);
        }
        return followers;
        //console.log(FollowerState);
      })
      .then((followers) => {
        getImages(followers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getImages = (followers) => {
    console.log("function hit");
    console.log(followers);
    API.getFeed({ followingId: followers })
      .then((res) => {
        console.log(res.data);
        setFeedState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //need this to be in a single use effect at the beginning
  useEffect(() => {
    getFollowing();
    //getImages();
  }, []);
  //console.log(feedState)

  //console.log(searchResultState);

  //REACT SPRING ANIMATION
  const [fade, setFade] = useState(false);
  const props = useSpring({ from: { opacity: 0, marginTop: 0 }, to: {opacity: fade ? 1 : 0, marginTop: fade ? 82 : 0,}, config: { duration: 250 }} );
  const showInput = () => {
    setFade(!fade);
  }

  return (
    <div id="home">
      <div className="homeHeader">
        <div className="logo">
          <h1 id="logo">travel pins</h1>
        </div>
        
        <div className="searchbtn" onClick={showInput}>
        {!fade ? (
        <i className="material-icons material-icons-outlined" id="searchbtn">
        person_search
      </i>
      ) : (
          
          <i className="material-icons" id="searchbtn">
            person_search
          </i>
      )}
        </div>
      </div>
      {!fade ? (
        <div/>
      ) : ( <animated.div style={props}>
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <input
                className="search"
                type="text"
                placeholder="Search Users"
                ref={inputRef}
                ></input>
            </form>  
        </div>
        {searchResultState.state && (
        <div>
          <h5 id={searchResultState.userId}>{searchResultState.username}</h5>
          {isFollowingState ? (
            <button onClick={handleUnfollow} style={{ opacity: "0.5" }}>
              Unfollow
            </button>
          ) : (
            <button onClick={handleFollow}>+ Follow</button>
          )}
        </div>
      )}
      {searchResultState.err && (
        <div>
          <h5>Could not find a user with that username</h5>
        </div>
      )}
    </animated.div> )}
      <Feed feedImages={feedState}></Feed>
    </div>
  );
}

export default Home;
