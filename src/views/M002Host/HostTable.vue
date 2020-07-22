<template>
  <table class="table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Tên căn hộ</th>
        <th>Mô tả</th>
        <th>Địa chỉ</th>
        <th>Chủ căn hộ</th>
        <th>Loại căn hộ</th>
        <th>Loại Phòng</th>
        <th>Thủ tục CheckIn</th>
        <th>Tình trạng</th>
        <th>Giá T2-T5</th>
        <th>Giá T7-CN</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="host in showListHosts" :key="host.id">
        <td>{{host.id}}</td>
        <td style="cursor:pointer" v-on:click="showHostDetail(host.id)">{{host.name}}</td>
        <td>{{host.description}}</td>
        <td>{{host.address}}</td>
        <td>{{host.user.fullName}}</td>
        <td>{{host.hostCategory.name}}</td>
        <td>{{host.hostRoomType.name}}</td>
        <td>{{host.procedureCheckIn.name}}</td>
        <td v-if="host.approved">Đã được duyệt</td>
        <td v-if="!host.approved">Đang vô hiệu hóa</td>
        <td>{{host.standardPriceMondayToThursday}}</td>
        <td>{{host.standardPriceFridayToSunday}}</td>
        <td>
          <button
            v-if="!host.approved"
            class="btn btn-warning"
            v-on:click="approveHost(host.id)"
          >Duyệt</button>
          <button v-if="host.approved" class="btn btn-warning">Vô hiệu hóa</button>
        </td>
        <td>
          <button class="btn btn-danger" v-on:click="deleteHost(host.id)">Xóa</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
    name: 'HostTable',
    props: {
        hosts: Array,
        showListHosts: Array
    }
}
</script>