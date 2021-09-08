import axios from "axios";

const API_URL = "https://blog-api3.herokuapp.com/api/users/";

const login = (email, password) => {
    return axios
      .post(API_URL + "login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", response.data);
        }
  
        return response.data;
      });
  };

  const logout = (props) => {
    localStorage.removeItem("user")
  };

  const getCurrentUser = () => {
    return localStorage.getItem("user");
  };
  
  export default {
    login,
    logout,
    getCurrentUser,
  };