<template>
  <h1>{{ boardAuth }}</h1>
  <el-button type="primary" @click="redirectHome"
    >Click to redirect home page</el-button
  >
</template>

<script>
import UserService from "../../api/user-service";
export default {
  name: "BoardModerator",
  data() {
    return {
      boardAuth: "",
    };
  },
  created() {
    UserService.getPMBoard().then(
      (response) => {
        this.boardAuth = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
  methods: {
    redirectHome() {
      this.$router.push("/public");
    },
  },
};
</script>

<style>
</style>