<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        Profile of
        <strong>{{user.fullName}}</strong>
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{user.id}}
    </p>
    <p>
      <strong>User name:</strong>
      {{user.username}}
    </p>

    <p>
      <strong>Email:</strong>
      {{user.email}}
    </p>
    <strong>Authorities: </strong>
    <strong v-for="(role,index) in user.roles" :key="index">{{role.name}} </strong>
    <p ></p>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'Profile',
  data() {
    return {
      token: '',
      user: [],
      roles: [],
    };
  },
  computed: {},
  mounted() {
    this.user = this.$store.state.auth.user.userPrinciple.user;
    this.roles = this.$store.state.auth.user.userPrinciple.user.roles; 
    
    console.log(this.roles);

    if (this.user) {
      this.roles.forEach(role => {  
          console.log(role.name == 'ROLE_USER');
        }            
      );
    }

    if (!this.user) {
      this.$router.push('/login');
    }
  }
};
</script>