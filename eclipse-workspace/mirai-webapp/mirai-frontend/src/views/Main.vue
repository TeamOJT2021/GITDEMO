<template>
  <el-main>
    <router-view :key="$route.path" name="public"> </router-view>
    <router-view v-if="currentUser" :key="$route.path" name="admin">
    </router-view>
    <router-view v-if="currentUser" :key="$route.path" name="moderator">
    </router-view>
    <router-view v-if="currentUser" :key="$route.path" name="user">
    </router-view>
    <router-view v-if="currentUser" :key="$route.path" name="pm"> </router-view>
    <router-view v-if="currentUser" :key="$route.path" name="profile">
    </router-view>
    <router-view :key="$route.path" name="tasks"> </router-view>
    <router-view :key="$route.path" name="tutorials"> </router-view>
    <router-view :key="$route.path" name="tutorial"> </router-view>
    <router-view :key="$route.path" name="addTutorial"> </router-view>
  </el-main>
</template>

<script>
export default {
  name: "Main",
  components: {},
  data() {
    return {};
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style>
</style>