import axios from "axios";
import Upload from "../components/Upload";

export default {
    login: function (loginData) {
        //console.log(loginData);
        return axios.post("api/user/login", loginData);
    },
    userSignup: function (signupData) {
        console.log(signupData);
        return axios.post("api/user/signup", signupData);
    },
    // Country Code Post
    saveCountry: function (country) {
        console.log(country);
        return axios.post("api/user/traveled", country)
    },
    Upload: function (imageData) {
        console.log("hit image data");
        return axios.post("api/user/upload", imageData)
    }
};