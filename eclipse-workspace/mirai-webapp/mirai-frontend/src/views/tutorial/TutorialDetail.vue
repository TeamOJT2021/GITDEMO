<template>
  <el-table :data="tutorials" style="width: 100%">
    <el-table-column label="Title" prop="title"> </el-table-column>
    <el-table-column label="Description" prop="description"> </el-table-column>
    <el-table-column label="Published" prop="published"> </el-table-column>
    <el-table-column align="right">
      <template #header> </template>
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </el-button>

        <el-button
          size="mini"
          class="danger"
          @click="deleteTutorialModal(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import { mapGetters, mapActions } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "tutorialDetail",
  props: {
    tutorials: { type: Object },
  },
  data() {
    return {
      params: {
        searchTitle: "",
        page: 1,
        pageSize: 5,
      },
    };
  },
  computed: {
    // computed: { ...mapGetters(["isDeleting", "deletedData"]) },
  },

  methods: {
    ...mapActions(["fetchAllTutorials", "deleteTutorial"]),
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({
        name: "tutorial",
        params: { id: row.id },
      });
    },
    deleteTutorialModal(index, row) {
      console.log(index, row);
      this.$confirm("Are you sure to delete the product ?", "Warning", {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          this.deleteTutorial(row.id);
          this.$message({
            type: "success",
            message: "Delete completed",
          });
          this.fetchAllTutorials(this.params);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
          });
        });
    },
  },
  // created() {
  //   this.fetchAllTutorials(this.params);
  // },
  // updated() {
  //   this.fetchAllTutorials(this.params);
  // },
};
</script>

<style>
</style>