
<template>
  <el-header>
    <div class="nav-menu-right">
      <NavMenu
        @handleMenuCollapse="handleMenuCollapse"
        :collapsed="collapsed"
      />
    </div>
    <div class="nav-menu-left">
      <el-dropdown>
        <i class="el-icon-setting"></i>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>View</el-dropdown-item>
            <el-dropdown-item>Add</el-dropdown-item>
            <el-dropdown-item>Delete</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>Tom</span>
    </div>
  </el-header>
</template>
<script>
import NavMenu from "./NavMenu.vue";
export default {
  name: "TopBar",
  components: {
    NavMenu,
  },
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

<style scoped>
.el-aside {
  color: #333;
}

.el-header {
  height: 6rem;
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  line-height: 60px;

  color: #333;
  background-color: aliceblue;
}
.nav-menu-right {
  padding: 0 10rem;
}
.nav-menu-left {
  padding: 0 11rem;
}
.el-icon-setting {
  margin-right: 15px;
}
</style>

