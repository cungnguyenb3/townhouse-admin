<template>
  <div class="container">
    <div class="sidebar-container">
      <!-- <div>
        <b-button v-b-toggle.sidebar-no-header>Toggle Sidebar</b-button>
        <b-sidebar
          id="sidebar-no-header"
          aria-labelledby="sidebar-no-header-title"
          no-header
          shadow
        >
          <template v-slot:default="{ hide }">
            <div class="p-3">
              <h4 id="sidebar-no-header-title">Custom header sidebar</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
              </p>
              <nav class="mb-3">
                <b-nav vertical>
                  <b-nav-item active @click="hide">Active</b-nav-item>
                  <b-nav-item href="#link-1" @click="hide">Link</b-nav-item>
                  <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
                </b-nav>
              </nav>
              <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
            </div>
          </template>
        </b-sidebar>
      </div>-->
    </div>
    <div class="page-content-wrapper">
      <h3>Trang quản lý </h3>
      <div class="row">
        <!-- Apply any bg-* class to to the info-box to color it -->
        <div class="col-xl-3 col-md-6 col-12">
          <div>
            <b-card title="Số lượng đơn đặt phòng" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's
                content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-12">
          <div>
            <b-card title="Số lượng host" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's
                content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-12">
          <div>
            <b-card title="Số lượng người dùng" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's
                content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>

            </b-card>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 col-12">
          <div>
            <b-card title="Số tiền kiếm được" sub-title="Card subtitle">
              <b-card-text>
                Some quick example text to build on the
                <em>card title</em> and make up the bulk of the card's
                content.
              </b-card-text>

              <b-card-text>A second paragraph of text in the card.</b-card-text>
            </b-card>
          </div>
        </div>
        <!-- /.info-box -->
      </div>
    </div>
  </div>
</template>

<script>
// import UserService from '../services/user.service';

export default {
  name: 'Home',
  data() {
    return {
      content: ''
    };
  }
  // mounted() {
  //   UserService.getPublicContent().then(
  //     response => {
  //       this.content = response.data.data;
  //     },
  //     error => {
  //       this.content =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // }
};
</script>

<style>
.container {
  height: auto;
}

.sidebar-container {
  float: left;
  width: 15%;
}

.page-content-wrapper {
  float: right;
  width: 85%;
}
</style>