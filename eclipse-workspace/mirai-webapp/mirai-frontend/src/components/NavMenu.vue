<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      ><router-link :to="{ name: 'public' }">Home</router-link></el-menu-item
    >
    <el-menu-item v-if="showAdminBoard"
      ><router-link :to="{ name: 'board-admin' }">
        <!-- {{ roleUser.toString() }} -->
        Admin Board
      </router-link>
    </el-menu-item>
    <el-menu-item v-if="showModeratorBoard"
      ><router-link :to="{ name: 'board-mod' }">
        <!-- {{ roleUser.toString() }} -->
        Mod Board
      </router-link>
    </el-menu-item>
    <el-menu-item v-if="showPMBoard"
      ><router-link :to="{ name: 'board-pm' }"> PM Board</router-link>
    </el-menu-item>
    <el-menu-item v-if="showUserBoard || showAdminBoard"
      ><router-link :to="{ name: 'board-user' }"> User Board</router-link>
    </el-menu-item>
    <el-menu-item v-if="!currentUser"
      ><router-link :to="{ name: 'register' }"
        >Register</router-link
      ></el-menu-item
    >
    <el-menu-item v-if="!currentUser"
      ><router-link :to="{ name: 'login' }">Login</router-link></el-menu-item
    >
    <el-menu-item v-if="currentUser">
      <router-link :to="{ name: 'profile' }">
        <i class="el-icon-user"></i>
        {{ currentUser.username }} profile</router-link
      ></el-menu-item
    >
    <el-menu-item v-if="currentUser"
      ><i class="el-icon-right"></i
      ><a @click.prevent="logOut">LogOut</a></el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  name: "NavMenu",
  props: {
    collapsed: Boolean,
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleMenuCollapse() {
      this.$emit("handleMenuCollapse");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    logOut() {
      this.$store.dispatch("auth/LOGOUT");
      this.$router.push("/");
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }

      return false;
    },
    showUserBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_USER");
      }

      return false;
    },
    showPMBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_PRODUCTMANAGER");
      }
      return false;
    },
    roleUser() {
      return this.$store.state.auth.user.roles;
    },
  },
  emits: ["handleMenuCollapse"],
};
</script>

<style  scoped>
.el-menu {
  background-color: aliceblue;
}

.el-menu--collapse {
  width: 60px;
}
.el-menu-item * {
  text-decoration: none;
}
</style>