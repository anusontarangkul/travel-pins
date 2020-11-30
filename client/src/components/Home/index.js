import React, {useRef, useState} from "react";
import "./style.css";
import API from "../../utils/API";

function Home() {
  const inputRef = useRef();
  const [searchResultState, setSearchResultState] = useState({
    state: false,
    firstname: "",
    lastname: "",
    username: "",
    userId: ""
  });

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(inputRef.current.value)
    API.searchUsers({search: inputRef.current.value})
    .then(res =>{
      console.log(res);
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
  console.log(searchResultState);
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
            <button>+ Follow</button>
          </div>
        )}
        {searchResultState.err && (
          <div>
            <h5>Could not find a user with that username</h5>
          </div>
        )}
      </div>
    )
  }


  export default Home