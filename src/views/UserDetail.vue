<template>
  <div class="container">
    <div class="user-form">
      <h3>Quản lý người dùng</h3>
      <form @submit="validateAndSubmit">
        <div v-if="userFormErrors.length">
          <div
            class="alert alert-warning"
            v-for="(error, index) in userFormErrors"
            v-bind:key="index"
          >{{error}}</div>
        </div>
        <fieldset class="form-group">
          <label>
            <strong>Họ và tên</strong>
          </label>
          <input type="text" class="form-control" v-model="fullName" required />
        </fieldset>
        <fieldset class="form-group">
          <label>
            <strong>Tên đăng nhập</strong>
          </label>
          <input type="text" class="form-control" v-model="username" required />
        </fieldset>
        <fieldset class="form-group">
          <label>
            <strong>Email</strong>
          </label>
          <input type="email" name="email" class="form-control" v-model="email" required />
        </fieldset>
        <fieldset class="form-group">
          <label>
            <strong>Số điện thoại</strong>
          </label>
          <input type="text" class="form-control" v-model="phone" required />
        </fieldset>
        <fieldset v-if="id" class="form-group">
          <label>
            <strong>Ngày tháng năm sinh</strong>
          </label>
          <input type="date" class="form-control" v-model="dateOfBirth" />
        </fieldset>
        <fieldset v-if="id" class="form-group">
          <label>
            <strong>Quốc tịch</strong>
          </label>
          <br />
          <select v-model="national">
            <option v-for="(country, index) in countries" v-bind:key="index">{{country.name}}</option>
          </select>
        </fieldset>
        <fieldset v-if="id" class="form-group">
          <label>
            <strong>Giới tính</strong>
          </label>
          <br />
          <select v-model="gender">
            <option>Nam</option>
            <option>Nữ</option>
            <option>Khác</option>
          </select>
        </fieldset>
        <fieldset v-if="!id" class="form-group">
          <label>
            <strong>Mật khẩu</strong>
          </label>
          <input type="password" class="form-control" v-model="password" required />
        </fieldset>
        <fieldset v-if="!id" class="form-group">
          <label>
            <strong>Nhập lại mật khẩu một lần nữa</strong>
          </label>
          <input type="password" class="form-control" v-model="confirmPassword" required />
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import UserDetailService from '../services/user-detail.service';
export default {
  name: 'UserDetail',
  data() {
    return {
      user: {},
      fullName: null,
      username: null,
      email: null,
      phone: null,
      dateOfBirth: null,
      national: null,
      gender: null,
      password: '',
      confirmPassword: '',
      userFormErrors: [],
      countries: []
    };
  },
  mounted() {
    UserDetailService.getListCountryName().then(response => {
      this.countries = response.data;
    });
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    refreshUser() {
      if (this.id != undefined) {
        UserDetailService.getUserDetail(this.id).then(response => {
          this.user = response.data.data;

            (this.fullName = this.user.fullName),
            (this.username = this.user.username),
            (this.email = this.user.email),
            (this.phone = this.user.phone),
            (this.dateOfBirth = this.user.dateOfBirth),
            (this.national = this.user.national),
            (this.gender = this.user.gender)

          if (this.user.national != null) {
            this.national = this.user.national;
          }
        });
      }
    },
    validateAndSubmit(e) {
      e.preventDefault();
      if (!this.fullName) {
        this.userFormErrors.push('Họ và tên không được bỏ trống!');
      }
      if (!this.username) {
        this.userFormErrors.push('Tên đăng nhập không được bỏ trống!');
      }
      if (!this.email) {
        this.userFormErrors.push('Email không được bỏ trống!');
      } else if (!this.validEmail(this.email)) {
        this.userFormErrors.push('Tên email không hợp lệ!');
      }
      if (!this.phone) {
        this.userFormErrors.push('Số điện thoại không được để trống');
      } else if (!this.validPhone(this.phone)) {
        this.userFormErrors.push('Số điện thoại không hợp lệ!');
      }
      if (!this.id) {
        if (!this.password) {
          this.userFormErrors.push('Mật khẩu không được bỏ trống');
        } else if (this.password.length < 8) {
          this.userFormErrors.push('Mật khẩu phải lớn hơn tám ký tự');
        } else if (this.password != this.confirmPassword) {
          this.userFormErrors.push('Mật khẩu mới phải khớp với mật khẩu cũ');
        }
      }

      if (this.userFormErrors.length === 0) {
        
        if (this.id != undefined) {
         
            let userUpdate = {
            fullName: this.fullName,
            email: this.email,
            username: this.username,
            phone: this.phone,
            dateOfBirth: this.dateOfBirth,
            gender: this.gender,
            national: this.national
          };
          console.log(userUpdate);
          UserDetailService.updateUser(this.id, userUpdate).then(() => {
            this.$router.push('/users');
          });
        } else {
          this.user = {
            fullName: this.fullName,
            email: this.email,
            username: this.username,
            phone: this.phone,
            password: this.password
          };
          UserDetailService.signUpUser(this.user)
            .then(() => {
              this.$router.push('/users');
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    },

    validEmail: function(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPhone: function(phone) {
      let rp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      return rp.test(phone);
    }
  },
  created() {
    this.refreshUser();
  }
};
</script>

<style scope>
.user-form {
  width: 100%;
  padding-left: 13em;
  padding-right: 13em;
}
</style>