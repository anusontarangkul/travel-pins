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
        <div id="profile">
            <div className="container">
            <div className = "picContainer">
                        <img className = "profilePic" src = {blankPhoto} alt ="profile pic" ></img>
            </div>
            </div>
            <h2 className="username">{user.username}</h2>
            <h2 className="countries"> {countriesState.countries} / 195 Countries</h2>
            
                
            
            <div className = "stats">
                <div className = "col following">
                    <h5>following</h5>
                    <h2>{followingState.length}</h2>
                </div>
                <div className = "col followers">
                    <h5>followers</h5>
                    <h2>{followerState.length}</h2>
                </div>
                <div className = "col posts">
                    <h5>posts</h5>
                    <h2>{photoState.length}</h2>
                </div>
            </div>
            <div id="profileFeed">
            {getImages && photoState.map((image, index) => 
                <div className="profilePost" key={index}>
                    <img className="profPostImg" src={image.photoUrl}></img>
                </div>
            )}
            </div>
        </div>
    )

}

export default Stats;