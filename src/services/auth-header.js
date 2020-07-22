export default function authHeader() {
let user = JSON.parse(localStorage.getItem('user'));

/* eslint-disable */
  if (user) {
    return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
  } else {
    return {};
  }
}
