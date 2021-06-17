<template>
  <div class="home">
    <el-main>
      <el-container style="border: 1px solid #eee"> <SideBar /> </el-container>
    </el-main>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";

export default {
  name: "Home",
  components: { SideBar },
};
</script>
