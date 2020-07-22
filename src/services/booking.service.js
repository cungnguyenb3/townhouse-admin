/* eslint-disable */
import axios from 'axios';
import authHeader from './auth-header';
const API_URL = `https://town-house-api-seven-team.herokuapp.com/api/`;

class BookingService {
    getListBooking() {
        return axios.get(API_URL + `bookings`, { headers: authHeader() });
    }
    setBookingIsPaid(id) {
        return axios.put(API_URL + `bookings-request-success/${id}`, {body: null}, { headers: authHeader() });
    }

}

export default new BookingService();