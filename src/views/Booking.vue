<template>
    <div class="container">
        <h3>All Bookings</h3>
    <div v-if="message" class="alert alert-success">{{message}}</div>
    <div class="container">
        <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Mã đặt phòng</th>
            <th>Tên khách</th>
            <th>Số điện thoại khách</th>
            <th>Email</th>
            <th>Ngày đến</th>
            <th>Ngày đi</th>
            <th>Tên nhà</th>
            <th>Địa chỉ nhà</th>
            <th>Tên chủ nhà</th>
            <th>Số điện thoại chủ nhà</th>
            <th>Tổng tiền</th>
            <th>Chấp thuận từ chủ nhà</th>
            <th>Tình trạng thanh toán</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(booking, index) in bookings" v-bind:key="index">
          <!-- <tr> -->
            <td>{{booking.id}}</td>
            <td>{{booking.bookingCode}}</td>
            <td>{{booking.user.fullName}}</td>
            <td>{{booking.user.phone}}</td>
            <td>{{booking.user.email}}</td>
            <td>{{getDateFromTimestamp(booking.checkInDate)}}</td>
            <td>{{getDateFromTimestamp(booking.checkOutDate)}}</td>
            <td>{{booking.host.name}}</td>
            <td>{{booking.host.address}}</td>
            <td>{{booking.host.user.fullName}}</td>
            <td>{{booking.host.user.phone}}</td>
            <td>{{booking.totalPrice}}</td>
            <td v-if="booking.acceptedFromHost">Đã được chấp thuận từ chủ nhà</td>
            <td v-if="!booking.acceptedFromHost">Chưa được chấp thuận từ chủ nhà</td>
            <td v-if="booking.paid">Đã thanh toán</td>
            <td v-if="!booking.paid">Chưa thanh toán</td>
            <td><button class="btn btn-warning" v-if="!booking.paid" v-on:click="setBookingRequestIsPaid(booking.id)">Thanh toán</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>

<script>
/* eslint-disable */
import BookingService from "../services/booking.service"

export default {
    name: "Booking",
    data() {
        return {
            bookings: [],
            checkInDate: '',
            checkOutDate: '',
            message: null,
        }
    },
    mounted() {
        this.refreshBooking()
    },
    methods: {
        async refreshBooking() {
            let response = await BookingService.getListBooking();
            this.bookings = response.data.data;          
        },
        
        setBookingRequestIsPaid(id) {
            BookingService.setBookingIsPaid(id).then(
                () => {
                    this.message = `Booking with id ${id} have been set paid`;
                    this.refreshBooking();
                }
            ).catch(err => {
                console.log(err);
            })
        },
        getDateFromTimestamp(time) {
            let fullDate = new Date(time);
            return fullDate.toDateString();
        },

    },
    created() {
        this.refreshBooking();   
    },
}

</script>

<style>
.container {
    width: 100%;
}

@media (min-width: 1200px){
.container {
    max-width: 100% !important;
}}

</style>