bcryptjs sequelize express express-session passport mysql2

table user ------ 
id 
username
first name 
last name
email
password 
photos 


table photos 
photo id
photo url ----country name in url (look at what other team used) -look up link to photo folder -> or database for photos or not upload
array of objects holds comments (object with author: (id) authorComment: (text))



table for countries 

 assciated with a user 
 id 
 country name 



 make a seed for countries 


code for landing page not home page

  const handleClick = (event) =>{
    event.preventDefault();
    //console.log(event.target.name)
    if(event.target.name === "login"){
      window.location.href = "/login";
    }
    else if(event.target.name === "signup"){
      window.location.href = "/signup";
    }
  }
    return (
      <div>
        <p>Home</p>
        <button name="login" onClick={(e) => handleClick(e)}>login</button>
        <button name="signup" onClick={(e) => handleClick(e)}>sign up</button>
      </div>
    )
  }

  visual support -> gif per feture user story 
  use gif of other site before and compare it to ours 

  let users know when you used it 

  how branches relate to user story -> talk about one place to talk to them 
  -> show gifs for routes 
  -> why we used sql vs mongo -> how modle it explain why we choose to do it 
  explains how routes 