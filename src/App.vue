<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" />Dashboard
          </router-link>
        </li>
  
        <li class="nav-item">
          <router-link v-if="currentUser" to="/users" class="nav-link">User</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/host-category" class="nav-link">Host Category</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/host-room-type" class="nav-link">Host Room Type</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/bookings" class="nav-link">Booking</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/hosts" class="nav-link">Host</router-link>
        </li>

      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" />Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />LogOut
          </a>
        </li>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      roles: [],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style>

@media (min-width: 1200px){
.container {
    max-width: 100% !important;
}}

</style>