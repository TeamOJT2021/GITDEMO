<template>
  <el-header>
    <div class="header-container">
      <div class="header-img">
        <img src="../assets/thumbnail_logoheader.png" alt="" />
      </div>
      <div class="header-user">
        <img src="../assets/thumbnail_Usericon.png" alt="" />
        <p style="margin-left: 5px">Le Duc Son SCB</p>
        <a href="#">Log out</a>
      </div>
    </div>
  </el-header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.header-container {
  display: flex;
  width: 100%;
  height: 100%;
}
.header-img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18%;
  height: 100%;
}
.header-user {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 56%;
}
.header-user img {
  height: 80%;
}
.header-user a {
  padding: 17px;
}
.header-img img {
  width: 68%;
  height: 100%;
}
.el-header {
  margin: 0;
  padding: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>