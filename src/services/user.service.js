import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://town-house-api-seven-team.herokuapp.com/api/';

class UserService {
  getPublicContent(currentPage, perPage) {
    return axios.get(API_URL + `users?pageNo=${currentPage}&pageSize=${perPage}`);
  }

  getUserBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'users', { headers: authHeader() });
  }

  deleteUser(id){
    return axios.delete(`${API_URL}` + `users/${id}`);
}

}

export default new UserService();
