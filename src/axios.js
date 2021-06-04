import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-backend-r.herokuapp.com"
});
export default instance;