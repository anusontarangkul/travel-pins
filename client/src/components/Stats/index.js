import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import './style.css';
import blankPhoto from "./blank-profile-picture-png.png"
import Feed from "../feed";

function Stats() {
    const [countriesState, setCountryState] = useState({
        countries:""
    });
    const [followingState, setFollowingState] = useState([]);
    const [followerState, setFollowerState] = useState([]);
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
        getUser();
        getFollwers();
        getImages();
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
        .then(results => {
            console.log(results.data)
            setUser({
            firstname: results.data[0].firstName,
            lastname: results.data[0].lastName,
            username: results.data[0].username,
            userId: results.data[0].id,
            email: results.data[0].email}
            );
        })
        .catch(err => console.log(err));
        //console.log(user);
    }
    const getFollwers = () => {
        API.getFollow()
        .then(res =>{
            ////console.log(res.data.length);
            setFollowingState(res.data);
        })
        .catch(err =>{
            console.log(err);
        });
        API.getFollowers()
        .then(res =>{
            //console.log(res.data.length);
            setFollowerState(res.data);
        })
        .catch(err =>{
            console.log(err);
        });
    }
    const getImages = () =>{
        //console.log("function hit")
        API.getUserPhotos()
        .then(res =>{
          //console.log(res);
            setPhotoState(res.data)
        }).catch(err =>{
          console.log(err);
        });
        return true;
      }
    //console.log(photoState);
    console.log(user)

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
                    <p>{followingState.length}</p>
                </div>
                <div className = "followers">
                    <h5>followers</h5>
                    <p>{followerState.length}</p>
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