import React, {useRef, useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/API";
import Feed from "../feed";

function Home() {
  const inputRef = useRef();
  const [searchResultState, setSearchResultState] = useState({
    state: false,
    firstname: "",
    lastname: "",
    username: "",
    userId: ""
  });
  const [FollowerState, setFollowerState] = useState([])
  const [feedState, setFeedState] = useState([])

  useEffect(()=>{
    getFollowing();
    getImages();
  },[]);


  const handleSubmit = (event) =>{
    event.preventDefault();
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
    })
    .catch(err =>{
      console.log(err)
      setSearchResultState({
        err: true
      })
    })
  }

  const handleFollow = (event) =>{
    event.preventDefault();
    API.follow(searchResultState)
    .then(res =>{
      console.log("followed");
    }).catch(err =>{
      console.log(err);
    });
  }

  const getFollowing= () =>{
    API.getFollow()
    .then(res =>{
      //console.log(res);
      for(var i = 0; i<res.data.length; i++){
        //maybe a catch with .includes
        setFollowerState(FollowerState => [...FollowerState, {UserId: res.data[i].following}])
      }
      //console.log(FollowerState);
    }).catch(err =>{
      console.log(err);
    });
  }

  const getImages = () =>{
    console.log("function hit")
    API.getFeed({followingId: FollowerState})
    .then(res =>{
      //console.log(res);
      for(var i = 0; i<res.data.length; i++){
        //feedState.push({photoUrl: res.data[i].photoUrl , createdAt: res.data[i].createdAt})
        setFeedState(feedState => [...feedState, {photoUrl: res.data[i].photoUrl , createdAt: res.data[i].createdAt}])
      }
    }).catch(err =>{
      console.log(err);
    });
  }
  //need this to be in a single use effect at the beginning

  //console.log(feedState)

    //console.log(searchResultState);
    return (
      <div>
        <p>Home</p>
        <div style={{textAlign: "center", }}>
            <input style ={{border: "3px solid black", borderRadius: "5px", textAlign: "center"}}
            type="text" 
            placeholder="Search" 
            ref ={inputRef}>
            </input>
            <button type = "submit" onClick = {handleSubmit}></button>
        </div>
        {searchResultState.state && (
          <div>
            <h5 id = {searchResultState.userId}>{searchResultState.username}</h5>
            <button onClick = {handleFollow}>+ Follow</button>
          </div>
        )}
        {searchResultState.err && (
          <div>
            <h5>Could not find a user with that username</h5>
          </div>
        )}
        <Feed feedImages = {feedState}></Feed>
      </div>
    )
  }


  export default Home