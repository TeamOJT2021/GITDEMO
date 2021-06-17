<template>
  <div class="edit-form">
    <el-card v-if="tutorial !== null && !isLoading" class="box-card">
      <h4>Tutorial</h4>
      <el-form :label-position="labelPosition" label-width="100px">
        <el-form-item label="Title" prop="title">
          <el-input
            type="text"
            v-model="tutorial.title"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="Description" prop="description">
          <el-input
            type="text"
            v-model="tutorial.description"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ tutorial.published ? "Published" : "Pending" }}
        </div>
      </el-form>
    </el-card>
    <el-button
      class="primary"
      :loading="isUpdating"
      v-if="tutorial.published"
      @click="updatePublished(false)"
      >UnPublish</el-button
    >
    <el-button
      class="primary"
      :loading="isUpdating"
      v-else
      @click="updatePublished(true)"
      >Published</el-button
    >
    <el-button class="primary" :loading="isUpdating" @click="updateTutorial"
      >Update</el-button
    >
    <router-link :to="{ name: 'tutorials' }">
      <el-button class="primary">Cancel</el-button></router-link
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Tutorial",
  data() {
    return {
      labelPosition: "top",
      id: null,
    };
  },
  
  computed: {
    ...mapGetters(["tutorial", "updatedData", "isUpdating", "isLoading"]),
  },
  methods: {
    ...mapActions(["editTutorial", "fetchTutorialDetail", "deleteTutorial"]),
    updatePublished(status) {
      const { title, description } = this.tutorial;
      this.editTutorial({
        id: this.id,
        title: title,
        description: description,
        published: status,
      });
    },
    updateTutorial() {
      const { title, description, published } = this.tutorial;
      this.editTutorial({
        id: this.id,
        title: title,
        description: description,
        published: published,
      });
      // this.$router.push({name: ""})
    },
  },
  watch: {
    updatedData: function () {
      if (this.updatedData !== null && !this.isUpdating) {
        this.$notify({
          title: "Success",
          message: "Success, Product has been updated successfully !",
          type: "success",
        });
        this.$router.push({ name: "tutorials" });
      }
    },
  },
  mounted() {},
  created() {
    this.message = "";
    this.id = this.$route.params.id;
    this.fetchTutorialDetail(this.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 700px;
  margin: 0 auto;
}
</style>