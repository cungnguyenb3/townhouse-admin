import axios from 'axios';
/* eslint-disable */
const API_URL = 'https://town-house-api-seven-team.herokuapp.com/api/users/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'sign-in', {
        username: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data){
          localStorage.setItem('user', JSON.stringify(response.data));
          // axios.defaults.headers.common['Authorization'] = response.data.token;
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();
