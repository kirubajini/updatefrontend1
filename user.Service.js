import axios from 'axios';


const API_URL = 'http://localhost:8080/api/users';

class userService {
    getAllUsers() {
        return axios.get(API_URL, { headers:{
                   'Authorization':'Basic SGVuYWZhbToxMjM0NTY4OTA='
                 }});
    }
    createUser1(User1){
        return axios.post(API_URL, User1);
    }

    getUserById(id) {
        return axios.get(API_URL + '/' + id,
       {
           headers:{
               'Authorization': 'Basic dXNlcjU6MTIzNDU2Nzg='
           }
       } 
        );
    }

    deleteUserById(id) {
        return axios.get(API_URL + '/' + id,
        {
            headers:{
                  'Authorization':'Basic a2lydWJhamluaToxMjM0NTY3ODkxMA=='
          }}
        );
    }

    updateUser(id,user) {
        return axios.put(API_URL + '/' + id,user,
        {
            headers:{
                'Authoriztion':'Basic dXNlcjU6MTIzNDU2Nzg='
            }
        }
        );
    }

    getAllUsersInPage(pageNo,pageSize,sortBy) {
        return axios.get(API_URL + '/' + 'page?pageNo='+pageNo+'&pageSize'+pageSize+'&sortBy='+sortBy);
    }

    searchUser(username){
        return axios.get(API_URL + '/' + '?username='+ username);
    }


}

export default new userService();