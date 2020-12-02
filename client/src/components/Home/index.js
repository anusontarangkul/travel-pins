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
  const [FollowerState, setFollowerState] = useState([])
  const [feedState, setFeedState] = useState([])
  const [isFollowingState, setIsFollowingState] = useState(true);
  //const globalfollowersId = [];

  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplay(!display);
    //console.log(inputRef.current.value)
    API.searchUsers({search: inputRef.current.value})
    .then(res =>{
      //console.log(res);
      
      if(res !== null){
        setSearchResultState({
          state: true, 
          firstname: res.data[0].firstName,
          lastname: res.data[0].lastName,
          username: res.data[0].username,
          userId: res.data[0].id
        })
      }
      console.log(typeof FollowerState);
      console.log(typeof res.data[0].id);
      setIsFollowingState(false);
      for(var i = 0; i<FollowerState.length; i++){
        if(FollowerState[i].id == res.data[0].id){
          //console.log("hit check");
          setIsFollowingState(true);
          //console.log("hit check");
          //if user types in same user again will not mark as true beacuse search user
          //only gets fired on mount
        }
      }

      // if (FollowerState.some(e => e.id === res.data[0].id)) {
      //   setIsFollowingState(true);
      //   console.log("hit check");
      // }

    })
    .catch(err =>{
      console.log(err)
      setSearchResultState({
        err: true
      })
    })};

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
      window.location.href = "/home";
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
      window.location.href = "/home";
  };

  const getFollowing = () => {
    API.getFollow()
    .then(res => {
      console.log(res.data[0]);
      var followering = [];
      for(let i = 0; i<res.data.length; i++){
        //maybe a catch with .includes
        setFollowerState(FollowerState => [...FollowerState, {id: res.data[i].following}])
        followering.push({id: res.data[i].following});
        //globalfollowersId.push(res.data[i].following);
      }
      return followering;
      //console.log(FollowerState);
    }).then(followering =>{
      getImages(followering)
    })
    .catch(err =>{
      console.log(err);
    });
  }

  const getImages = (followering) =>{
    console.log("function hit")
    console.log(followering)
    API.getFeed({followingId: followering})
    .then(res =>{
      //setFeedState(res.data); //username: country: image: date:
      ///need to find a more efficient way so that it is not 0^n especially when more photos added

      const followerInfoToSort = [];
      for(let x = 0; x<res.data.length; x++){
        for(let y = 0; y<res.data[x].Photos.length; y++){
          followerInfoToSort.push({
            username: res.data[x].username,
            UserId: res.data[x].id,
            id: res.data[x].Photos[y].id,
            country: res.data[x].Photos[y].country,
            photoUrl: res.data[x].Photos[y].photoUrl,
            createdAt: res.data[x].Photos[y].createdAt
            //maybe fix created at so that it is easier to sort by newest
          });
        }
      }
      setFeedState(followerInfoToSort)



    }).catch(err =>{
      console.log(err);
    }); 
  }
  //need this to be in a single use effect at the beginning
  useEffect(() => {
    getFollowing();
    //getImages();
  }, []);
  //console.log(feedState)

  //console.log(searchResultState);

  //REACT SPRING ANIMATION
  const [fade, setFade] = useState(false);
  const props = useSpring({
    from: { opacity: 0, marginTop: 0 },
    to: { opacity: fade ? 1 : 0, marginTop: fade ? 82 : 0 },
    config: { duration: 250 },
  });
  const [display, setDisplay] = useState(false);
  const showInput = () => {
    setFade(!fade);
    if (display === true){
        setDisplay(!display);
    }
  };
  


  return (
    <div id="home">
      <div className="homeHeader">
        <div className="logo">
          <h1 id="logo">travel pins</h1>
        </div>

        <div className="searchbtn" onClick={showInput}>
          {!fade ? (
            <i
              className="material-icons material-icons-outlined"
              id="searchbtn"
            >
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
        <div />
      ) : (
        <animated.div style={props}>
          <div className="formContainer">
          {!display ? 
            <form onSubmit={handleSubmit}>
              <input
                className="search"
                type="text"
                placeholder="Search Users"
                ref={inputRef}
              ></input>
            </form>
            : <div>
                {searchResultState.state && (
                <div>
                  <h5 id={searchResultState.userId}>
                    {searchResultState.username}
                  </h5>
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
                  <h5 className="errmsg">Couldn't find a user with that username.</h5>
                </div>
              )}</div>
          }
          </div>
        </animated.div>
      )}
      <Feed feedImages={feedState}></Feed>
    </div>
  );
}

export default Home;
