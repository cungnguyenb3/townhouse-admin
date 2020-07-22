<template>
  <div class="container">
    <header class="jumbotron">
      <div v-if="message" class="alert alert-success">{{message}}</div>

      <template>
        <div id="app" class="container">
          <HostTable :showListHosts="showListHosts" :hosts="hosts"/>
        </div>
      </template>

     
      <div class="my-4">
        <!-- Pagination -->
        <ul class="pagination pagination-md justify-content-center text-center">
          <li class="page-item" :class="page === 1 ? 'disabled' : ''">
            <a class="page-link" @click="prevPage">Previous</a>
          </li>
          <li class="page-link" style="background-color: inherit">{{page}} of {{lastPage}}</li>
          <li class="page-item" :class="page === lastPage ? 'disabled' : ''">
            <a class="page-link" @click="nextPage">Next</a>
          </li>
        </ul>
      </div>
      <!--./Pagination -->
    </header>
  </div>
</template>

<script>
/* eslint-disable */
import HostService from './host-service';
import HostTable from './HostTable.vue'

export default {
  name: 'Hosts',
  components: {
    HostTable
  },
  data() {
    return {
      hosts: [],
      message: '',
      page: 0,
      loading: false,
      perPage: 15
    };
  },

  mounted() {
    
  },
  computed: {
    showListHosts () {
      let start = (this.page - 1) * this.perPage;
      let end = start + this.perPage;
      this.loading = false;
      return this.hosts.slice(start, end);
    },
    lastPage () {
      let length = this.hosts.length;
      return length / this.perPage;
    }
  },
  methods: {
    refreshHosts() {
      HostService.getListHosts().then(response => {
        console.log(response.data.data);
        this.hosts = response.data.data;
      });
    },
    approveHost(id) {
      console.log('run');
      HostService.approveHost(id).then(() => {
        this.message = `Đã duyệt host với id ${id} thành công`;
        this.refreshHosts();
      });
    },
    deleteHost(id) {
      HostService.deleteHost(id).then(() => {
        this.message = `Đã delete host với id ${id} thành công`;
        this.refreshHosts();
      });
    },
    showHostDetail(id) {
      this.$router.push({ path: `/host/${id}` });
    },
    prevPage() {
      this.loading = true,
      this.page--
    },
    nextPage() {
      this.loading = false,
      this.page++
    }
  },
  created() {
    this.refreshHosts()
  }
};
</script>

<style scope>
a:hover {
 cursor: pointer;
}
</style>