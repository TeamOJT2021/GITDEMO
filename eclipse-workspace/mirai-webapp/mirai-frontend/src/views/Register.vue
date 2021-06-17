<template >
  <div class="card-register">
    <el-row class="card-title">
      <el-col> <span>Register Form</span></el-col>
    </el-row>

    <div>
      <el-card class="box-card">
        <el-alert
          v-if="message"
          :title="message"
          :type="successful ? 'success' : 'error'"
        >
        </el-alert>
        <el-form
          :model="registerForm"
          :rules="rules"
          ref="registerForm"
          status-icon
          :label-position="labelPosition"
          label-width="100px"
        >
          <el-form-item label="Username" prop="username">
            <el-input
              v-model="registerForm.username"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Email" prop="email">
            <el-input
              v-model="registerForm.email"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input
              type="password"
              v-model="registerForm.password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <div class="btn-register-form">
              <el-button
                :plain="true"
                type="primary"
                :disabled="loading"
                @click.prevent="handleRegister(registerForm)"
              >
                <span
                  v-show="loading"
                  class="spinner-border spinner-border-sm"
                ></span
                >Register</el-button
              >
            </div>
            <div class="had-account">
              <p>Had account?</p>
              &nbsp;
              <a @click.prevent="redirectLogin"> Login. </a>
            </div>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.registerForm.confirmPass !== "") {
          this.$refs.registerForm.validateField("confirmPass");
        }
        // Password is not correct
        callback();
      }
    };

    return {
      successful: false,
      loading: false,
      message: "",
      labelPosition: "top",
      registerForm: {
        username: "",
        email: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            message: "Please input your username",
            trigger: "blur",
          },
        ],
        email: [
          {
            type: "email",
            required: true,
            message: "Please input your email",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            validator: validatePassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      console.log(user);
      this.$store.dispatch("auth/REGISTER", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
          this.username = "";
          this.email = "";
          this.password = "";
          this.confirmPass = "";
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
    redirectLogin() {
      this.$router.push("/login");
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>


<style scoped>
.card-register {
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

.btn-register-form {
  display: flex;
  justify-content: center;
}
.btn-register-form button {
  width: 95%;
}
.had-account {
  display: flex;
  justify-content: center;
}

.had-account p {
  opacity: 0.7;
}
.had-account a {
  display: flex;
  align-items: center;

  color: #409eff;
  text-decoration: none;
  cursor: pointer;
}
</style>

