import axios from "axios";

export default {
    login: function (loginData){
        //console.log(loginData);
        return axios.post("api/user/login", loginData);
    },
    userSignup: function(signupData){
        console.log(signupData);
        return axios.post("api/user/signup", signupData);
    } 
};