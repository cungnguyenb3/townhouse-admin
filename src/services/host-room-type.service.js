import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'https://town-house-api-seven-team.herokuapp.com/api/';

class HostRoomTypeService {
    getListHostRoomType() {
        return axios.get(API_URL + 'host-room-types', {headers: authHeader() });
    }
}

export default new HostRoomTypeService();