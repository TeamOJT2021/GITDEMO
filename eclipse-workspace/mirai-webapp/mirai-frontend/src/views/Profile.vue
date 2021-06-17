<template>
  <div v-if="currentUser">
    <header>
      <h3>
        <strong class="username">{{ currentUser.username }}</strong>
        PROFILE
      </h3>
    </header>
    <p>
      <strong>Token:</strong>

      {{ currentUser.accessToken.substring(0, 100) }}
      ...
    </p>
    <p>
      <strong>Id:</strong>
      {{ currentUser.id }}
    </p>
    <p>
      <strong>Email:</strong>
      {{ currentUser.email }}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="role in currentUser.roles" :key="role">{{ role }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
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

<style scoped>
.username {
  text-transform: uppercase;
}
</style>