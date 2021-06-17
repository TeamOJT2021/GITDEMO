<template>
  <h1>{{ boardAuth }}</h1>
  <img src="../assets/logo.png" alt="" />
</template>

<script>
import UserService from "../api/user-service";
export default {
  name: "BoardPublic",
  components: {},
  data() {
    return {
      boardAuth: "",
    };
  },
  created() {
    UserService.getPublicContent().then(
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
};
</script>

<style>
</style>