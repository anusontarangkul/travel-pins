import React, { useRef, useState, useEffect } from "react";
import "./style.css";

function Feed ({feedImages}){
    console.log(feedImages);
    return (
        <div id="feed">
            {feedImages.sort((a, b) => (a.id < b.id) ? 1 : -1).map((image, index) =>
                <div key = {image.photoId}>
                    <h5>{image.username} Country: {image.country}</h5>
                    <img style ={{height : "100px"}} src={image.photoUrl} alt={image.createdAt}/>
                </div >
            )}
        </div>
    )
}

export default Feed;

//{feedImages.slice(0).reverse().map(image)}