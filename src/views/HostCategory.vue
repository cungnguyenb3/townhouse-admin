/* eslint-disable */
<template>
    <div class="container">
        <h3>All Host Categories</h3>
    <!-- <div v-if="message" class="alert alert-success">{{message}}</div> -->
    <div class="container">
      <div class="row">
          <button class="btn btn-success" v-on:click="addHostCategoryClicked()">Add</button>
      </div>
      <br>
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(hostCategory, index) in hostCategories" v-bind:key="index"> -->
          <tr>
            <td>1</td>
            <td>Home stay</td>
            <td>homestay là một loại hình lưu trú được xác định bằng cụm từ “Home from home”. Tức là, trong một chuyến du lịch bạn sẽ đặt chỗ và nghỉ lại trong căn nhà của người dân địa phương, sống và sinh hoạt giống như một thành viên trong gia đình họ</td>
            <td><button class="btn btn-warning" >Update</button></td>
            <td><button class="btn btn-danger" >Delete</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
</template>

<script>
export default {
    name: "HostCategory",
    data() {
        return {
            hostCategories: {}
        }
    },
}

</script>

<style>

</style>