import React, { useRef, useState, useEffect } from "react";
import "./style.css";

function Feed({ feedImages }) {
    console.log(feedImages);
    return (
        <div id="feed">
            <div className="scroll">
                {feedImages.sort((a, b) => (a.id < b.id) ? 1 : -1).map((image, index) =>
                    <div className="post" key={image.photoId}>
                        <div className="imgWrap">
                            <img className="postImg" src={image.photoUrl} alt={image.createdAt} />

                        </div>
                        <div className="postInfo">
                            <div className="profileWrap">
                                {/* <img className="profilePic" src = {image.profilePic} alt = "profile picture"/> */}
                            </div>
                            <h5 className="postUser">{image.username}</h5>
                            <h5 className="postCountry">{image.country}</h5>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Feed;

//{feedImages.slice(0).reverse().map(image)}