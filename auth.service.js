import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/"; 

class AuthService {
    login(username,password) {
        return axios.post(API_URL + "signin",{
              username,
              password
        
         } )
         .then(response => {
             if (response.data.basicToken) {
                 localStorage.setItem("user",JSON.stringify(response.data));
             }
             return response.data;
         });
    }

    logout() {
        localStorage.removeItem("user");
        axios.post(API_URL + "logout", {});
    }

    signup(username,email,password) {
        return axios.post(API_URL + "signup",{
            username,
            email,
            password,
            //confirmpassword
        });
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
    getAllUsers(){
        return axios.get("http://localhost:8080/api/test")
    }
}

export default new AuthService();