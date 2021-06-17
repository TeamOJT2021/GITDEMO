<template>
  <div class="add-tutorial">
    <el-card class="box-card" v-if="!submitted">
      <h1>ADD TUTORIAL</h1>
      <el-form
        :model="formTutorial"
        ref="formTutorial"
        :label-position="labelPosition"
        label-width="100px"
      >
        <el-form-item label="Title" prop="title">
          <el-input
            type="text"
            v-model="formTutorial.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input
            type="text"
            v-model="formTutorial.description"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-button class="primary" v-if="!isCreating" @click="saveTutorial"
          >Submit</el-button
        ><el-button class="primary" disabled v-if="isCreating">
          <span><i class="el-icon-loading"></i></span> Submit</el-button
        >
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AddTutorial",
  data() {
    return {
      formTutorial: {
        title: "",
        description: "",
        published: false,
      },
      labelPosition: "top",
      submitted: false,
    };
  },
  computed: {
    ...mapGetters(["isCreating", "createdData"]),
  },
  methods: {
    ...mapActions(["storeTutorial"]),
    saveTutorial() {
      const { title, description, published } = this.formTutorial;
      this.storeTutorial({
        title,
        description,
        published,
      });
      this.submitted = true;
    },
  },
  watch: {
    createdData: function () {
      if (this.createdData !== null && !this.isCreating) {
        this.$notify({
          title: "Success",
          message: "Success, Product has been create successfully !",
          type: "success",
        });
        this.$router.push({ name: "tutorials" });
      }
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
.add-tutorial {
  width: 600px;
  margin: 0 auto;
  /* display: flex;
  justify-content: center; */
}
</style>