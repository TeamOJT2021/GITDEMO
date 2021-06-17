<template >
  <div class="card-login">
    <el-row class="card-title">
      <el-col> <span>Register Form</span></el-col>
    </el-row>

    <div class="card-login">
      <el-card class="box-card">
        <!-- <el-alert
          v-if="message.message && message.message === 'Bad credentials'"
          :title="message.message"
          type="error"
          :value="message.message"
        >
        </el-alert> -->
        <el-form
          :model="loginForm"
          ref="loginForm"
          status-icon
          :label-position="labelPosition"
          label-width="100px"
        >
          <el-form-item label="Username" prop="username">
            <el-input
              v-model="loginForm.username"
              autocomplete="off"
            ></el-input>
            <div v-if="message.errorValidate" class="el-form-item__error">
              {{ messageValidate.username }}
            </div>
            <div
              v-if="message.message && message.message !== 'Bad credentials'"
              class="el-form-item__error"
            >
              {{ message.message }}
            </div>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              autocomplete="off"
            ></el-input>
            <div v-if="message.errorValidate" class="el-form-item__error">
              {{ messageValidate.password }}
            </div>
            <div
              v-if="message.message && message.message === 'Bad credentials'"
              class="el-form-item__error"
            >
              Password is wrong
            </div>
          </el-form-item>
          <el-form-item>
            <div class="btn-login-form">
              <el-button
                type="primary"
                :disabled="loading"
                plain
                @click.prevent="login(loginForm)"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span
                >Login</el-button
              >
            </div>
            <div class="not-account">
              <p>Not register?</p>
              &nbsp;
              <a @click.prevent="redirectRegister"> Create an account. </a>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      loading: false,
      message: "",
      labelPosition: "top",
      loginForm: {
        username: "",
        password: "",
      },
      methods: {},
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    login(user) {
      this.loading = true;
      this.$store.dispatch("auth/LOGIN", user).then(
        () => {
          this.$router.push("/profile");
        },
        (error) => {
          console.log(error.response);
          this.loading = false;
          this.message = error.response && error.response.data;
        }
      );
    },
    redirectRegister() {
      this.$router.push("/register");
    },
  },
};
</script>


<style scoped>
.card-login {
  display: table;
  margin: 0 auto;
}
.card-title {
  height: 4rem;
  align-items: center;
  margin: 0 auto;

  background-color: deeppink;
}

.card-title span {
  padding: 0 20px;

  font-size: 20px;
  color: white;
}

.box-card {
  width: 480px;
}

.btn-login-form {
  display: flex;
  justify-content: center;
  margin-top: 25px;
}
.btn-login-form button {
  width: 95%;
}

.not-account {
  display: flex;
  justify-content: center;
}

.not-account p {
  margin: 0;
  opacity: 0.7;
}
.not-account a {
  display: flex;
  align-items: center;

  color: #409eff;
  text-decoration: none;
  cursor: pointer;
}
</style>
