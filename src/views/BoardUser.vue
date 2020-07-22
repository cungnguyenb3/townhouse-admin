<template>
  <div class="container">
    <header class="jumbotron">
      <div class="search-add-user">
        <button class="btn btn-success add-user" v-on:click="addNewUser()">Thêm tài khoản</button>
        
        <div class="row search-name">
          <input
            class="form-control"
            type="text"
            v-model="search"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </div>
      <!-- Search form -->
      <div v-if="message" class="alert alert-success">{{message}}</div>
      <table id="user-table" class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên đăng nhập</th>
            <th>Họ và tên</th>
            <th>Email</th>
            <th>Số điện thoại</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Quốc gia</th>
            <th>Kích hoạt</th>
            <th>Vai trò</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in filtedUsers" v-bind:key="index">
            <td>{{user.id}}</td>
            <td>{{user.username}}</td>
            <td>{{user.fullName}}</td>
            <td>{{user.email}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.dateOfBirth}}</td>
            <td>{{user.gender}}</td>
            <td>{{user.national}}</td>
            <td v-if="user.enable">Đã kích hoạt</td>
            <td v-if="!user.enable">Chưa kích hoạt</td>
            <td>
              <p v-for="(role, index) in user.roles" v-bind:key="index">{{role.name}}</p>
            </td>
            <td>
              <button class="btn btn-warning" v-on:click="updateUserClicked(user.id)">Update</button>
            </td>
            <td>
              <button class="btn btn-danger" v-on:click="deleteUserClicked(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">1</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">3</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';
/* eslint-disable */
export default {
  name: 'User',
  data() {
    return {
      users: [],
      search: '',
      message: '',
      perPage: 6,
      currentPage: 1
    };
  },

  mounted() {},
  computed: {
    filtedUsers: function() {
      return this.users.filter(user => {
        return user.username.match(this.search);
      });
    },
    rows() {
      return this.users.length;
    }
  },
  methods: {
    addNewUser() {
      this.$router.push(`/user`);
    },
    refreshUsers() {
      UserService.getUserBoard().then(
        response => {
          this.users = response.data.data;
        },
        error => {
          this.users =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },
    updateUserClicked(id) {
      this.$router.push({ path: `/user/${id}` });
    },
    deleteUserClicked(id) {
      console.log(id);
      UserService.deleteUser(id).then(() => {
        this.message = `Delete of user ${id} successful`;
        this.refreshUsers();
      });
    }
  },
  created() {
    this.refreshUsers();
  }
};
</script>

<style scope>
.search-add-user {
  width: 100%;
}

.add-user {
  float: left;
}

.search-name {
  margin-right: 0;
  float: right;
  padding-left: 1em;
  padding-right: 90em;
}
</style>