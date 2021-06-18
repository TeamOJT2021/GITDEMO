<template>
  <el-container>
    <Header />
  </el-container>
  <el-container>
    <NavBar />
    <el-main> <TaskManager /> </el-main>
  </el-container>
</template>


<script>
import Header from "../components/Header.vue";
import NavBar from "../components/NavBar.vue";

import TaskManager from "./TaskManager";

export default {
  name: "MSCs",
  components: {
    Header,
    NavBar,
    TaskManager,
  },
};
</script>

.<style scoped>
.el-main {
  border: 0.5px solid #ebeef5;
}
</style>