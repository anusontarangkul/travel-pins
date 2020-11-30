import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import './style.css';
import blankPhoto from "./blank-profile-picture-png.png"
import Feed from "../feed";

function Stats() {
    const [countriesState, setCountryState] = useState({
        countries:""
    });
    const [followingState, setFollowingState] = useState({
        following:""
    });
    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        userId: "",
        email: ""
    });
    const [photoState, setPhotoState] = useState([]);

    useEffect(() => {
        getStats();
        getUser().then(getImages()).then(getFollwers())
        
    }, []);

    const getStats = () => {
        API.getCountry()
            .then(results => {
                setCountryState({countries: results.data.length});
            })
            .catch(err => console.log(err));
    };

    const getUser = async () => {
        API.getUserData()
        .then(results => 
            setUser(results.data[0]))
        .catch(err => console.log(err));
        return true;
    }
    const getFollwers = () => {
        API.getFollow()
        .then(res =>{
            console.log(res.data.length);
            setFollowingState({following: res.data.length});
        })
        .catch(err =>{
            console.log(err);
        });
        return true;
    }
    const getImages = () =>{
        console.log("function hit")
        API.getFeed({followingId: [{UserId: user.id}]})
        .then(res =>{
          console.log(res);
            setPhotoState(res.data)
        }).catch(err =>{
          console.log(err);
        });
        return true;
      }


    console.log(photoState);

    return (
        <div>
            <h2>Welcome {user.username}</h2>
            <h2> {countriesState.countries} / 195 Countries</h2>
            <div className = "stats">
                <div className = "profile">
                    <img className = "profilePic" src = {blankPhoto} alt ="profile pic" ></img>
                </div>
                <div className = "following">
                    <h5>following</h5>
                    <p>{followingState.following}</p>
                </div>
                <div className = "posts">
                    <h5>posts</h5>
                    <p>{photoState.length}</p>
                </div>
            </div>
            {getImages && <Feed feedImages = {photoState}></Feed>}
        </div>
    )

}

export default Stats;