import axios from 'axios';
import authHeader from '../../services/auth-header';
/* eslint-disable */
const API_URL = 'https://town-house-api-seven-team.herokuapp.com/api/';
const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cnVvbmd0YW1waG9uZyIsImlhdCI6MTU5MTg3MjA3OCwiZXhwIjoxNjA3OTM0MDc3fQ.-rupT4fX-xp9U9AEavn6tECWfWPsAflDq4-4aORpRSBax6Q1BWSqJLfxRAFYfZUdGIZlQhbHQnipWkSS5IPGaA'
  }
const config = { headers: { 'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0cnVvbmd0YW1waG9uZyIsImlhdCI6MTU5MTg3MjA3OCwiZXhwIjoxNjA3OTM0MDc3fQ.-rupT4fX-xp9U9AEavn6tECWfWPsAflDq4-4aORpRSBax6Q1BWSqJLfxRAFYfZUdGIZlQhbHQnipWkSS5IPGaA' } }

class HostService {
    getListHosts() {
        return axios.get(API_URL + `hosts`);
    }
    approveHost(id) {
        console.log("run here");
        return axios.put(API_URL + `hosts/approved/${id}`, { body:null }, { headers: authHeader() });
    }
    deleteHost(id) {
        return axios.delete(API_URL+ `hosts/${id}`, { body:null }, { headers: authHeader() });
    }
    getHostById(id) {
        return axios.get(API_URL + `hosts/${id}`);
    }
}

export default new HostService();
