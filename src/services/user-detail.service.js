import axios from 'axios';

const listCountries_url = 'https://restcountries.eu/rest/v2/all';

const API_USER_URL = `https://town-house-api-seven-team.herokuapp.com/api/users/`;

class UserDetailService{
    getListCountryName() {
        return axios.get(listCountries_url);
    }

    signUpUser(user) {
        return axios.post(`${API_USER_URL}sign-up`, user);
    }

    getUserDetail(id) {
        return axios.get(API_USER_URL + `${id}`);
    }

    updateUser(id, user) {
        return axios.put(`${API_USER_URL}`+`${id}`, user);
    }
}

export default new UserDetailService();