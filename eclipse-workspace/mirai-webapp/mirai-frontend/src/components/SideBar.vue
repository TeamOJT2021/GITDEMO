<template>
  <el-container>
    <el-aside class="aside" style="width: 253px">
      <div class="nav-img">
        <img src="../assets/element.svg" alt="element-icon" />
      </div>
      <el-menu class="side-menu" :default-openeds="['1']" unique-opened
        ><router-link :to="{ name: 'tasks' }">
          <el-menu-item index="1"
            ><i class="el-icon-s-order"></i
            ><template #title>Tasks</template></el-menu-item
          ></router-link
        ><router-link :to="{ name: 'tutorials' }">
          <el-menu-item index="2"
            ><i class="el-icon-s-order"></i
            ><template #title>Tutorials</template></el-menu-item
          ></router-link
        >
      </el-menu>
    </el-aside>
    <Main />
  </el-container>
</template>
<script>
import Main from "../views/Main.vue";
export default {
  name: "SideBar",
  components: {
    Main,
  },
};
</script>

<style scoped>
.nav-img {
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-content: center;
}
.nav-img img {
  width: 70%;
  height: 70%;
}
.toggle-icon {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(240, 240, 240, 0.5);
  font-size: 20px;
  color: rgb(191, 203, 217);
}

.aside {
  border: 1px solid rgba(240, 240, 240, 0.5);
  background-color: rgb(48, 65, 86);
}
.el-aside {
  color: #333;
}

.side-menu {
  width: 250px;

  background-color: rgb(48, 65, 86);
  color: rgb(191, 203, 217);
}

.el-menu a {
  text-decoration: none;
}

.el-menu--collapse {
  width: 12rem;
}

.el-menu-item {
  color: rgb(191, 203, 217);
}

.el-menu-item i {
  padding-bottom: 7px;
}
.el-menu-item:hover {
  background-color: #1f2d3d !important;
}
</style>

