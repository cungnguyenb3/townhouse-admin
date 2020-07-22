<template>
    <div class="container">
      
            <div host-detail>
                <h1>Thông tin chi tiết</h1>
                <div class="host-content">                    
                    <h3>Tên: {{host.name}}</h3>
                    <p>Địa chỉ: {{host.address}}</p>
                    <p>Diện tích: {{host.acreage}} m2</p>
                    <p>Mô tả: {{host.description}}</p>
                    <p>Giá từ thứ hai đến thứ năm: {{host.standardPriceFridayToSunday}} VND</p>
                    <p>Giá từ thứ sáu đến Chủ nhật: {{host.standardPriceMondayToThursday}} VND</p>
                    <p>Số khách tối đa: {{host.numberOfMaximumGuest}} người</p>

                </div>
                <div class="host-image">
                    <p v-for="(image, index) in listHostImage" v-bind:key="index">
                        <img class="image" v-bind:src="image.webContentLink">
                    </p>
                </div>
            </div>

    </div>
</template>
<script>
/* eslint-disable */
import HostService from './host-service';
export default {
    name: 'HostDetail',
    data() {
        return {
            host: {},
            listHostImage: [],
        }
    },
    computed: {
        id(){
            return this.$route.params.id;
        }
    }, 
    methods: {
        getHostDetail(id){
            HostService.getHostById(this.id).then(response => {
                this.host = response.data.data;
                this.listHostImage = this.host.hostImages;
                console.log(this.host);
            })
            
        }
    },
    created() {
        this.getHostDetail();
    }
}
</script>

<style scope>
    .host-detail {
        width: 100%;
        height: auto;
    }
    .host-content {
        float: left;
        width: 60%;
    }
    .host-image {
        float: right;
        width: 40%;
        height: auto;
    }
    .image {
        width: 60%;
    }
</style>