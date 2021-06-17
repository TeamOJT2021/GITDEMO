<template>
  <div id="app">
    <Topbar />
    <!-- <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">bezKoder</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav> -->

    <el-main>
      <router-view :key="$route.path"></router-view>
    </el-main>
  </div>
</template>

<script>
import Topbar from "../src/components/TopBar.vue";
export default {
  name: "App",
  components: {
    Topbar,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    handleMenuCollapse() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style scoped>
#app {
}
.el-main {
  padding: 0 10rem;
}
</style>