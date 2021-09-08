import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://blog-api3.herokuapp.com/api/";

const postContent = () => {
  return axios.post(API_URL + "posts", { headers: authHeader() });
};

const getContent = () => {
  return axios.get(API_URL + "posts");
};

// TODO: bekötni a keresést jól
const getFilteredContent = (data) => {
  return axios.get(API_URL + `posts/${data}`);
};

export default {
    postContent,
    getContent,
    getFilteredContent,
  };
