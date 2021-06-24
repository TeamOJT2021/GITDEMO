<template>
  <el-row class="add-tutorial">
    <el-col>
      <router-link :to="{ name: 'addTutorial' }"
        ><el-button class="primary" size="small"
          >New Tutorial</el-button
        ></router-link
      ></el-col
    >
  </el-row>
  <el-row :gutter="20" class="search-title">
    <el-col :span="10">
      <el-input
        v-model="params.searchTitle"
        size="mini"
        placeholder="Type to search"
      />
    </el-col>
    <el-col :span="10">
      <el-button
        class="primary"
        size="mini"
        @click="searchByTutorials(this.params.searchTitle)"
        >Search</el-button
      >
    </el-col>
  </el-row>
  <!-- <el-table :data="tutorials" style="width: 100%">
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
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table> -->
  <TutorialDetail :data="tutorials" />
  <el-pagination
    v-if="tutorialsPaginatedData !== null"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    background
    :page-sizes="[5, 10, 20, 100]"
    :page-size="5"
    layout="total, sizes, prev, pager, next, jumper"
    :total="tutorialsPaginatedData.totalItems"
    >>
  </el-pagination>
</template>

<script>
import TutorialDataService from "../../api/tutorial-service";
import { mapGetters, mapActions } from "vuex";
import TutorialDetail from "./TutorialDetail.vue";
export default {
  name: "TutorialsList",
  components: {
    TutorialDetail,
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
    ...mapGetters(["tutorials", "tutorialsPaginatedData", "isLoading"]),
  },
  methods: {
    refreshedTutorials() {
      this.fetchAllTutorials(this.query);
    },

    ...mapActions(["fetchAllTutorials", "searchByTutorials", "deleteTutorial"]),
    removeAllTutorials() {
      TutorialDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.fetchAllTutorials(this.params);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    handleSizeChange(val) {
      console.log(`${val} items per page`);
      this.params.pageSize = val;
      this.params.page;
      this.fetchAllTutorials(this.params);
    },
    handleCurrentChange(val) {
      console.log(`current page: ${val}`);
      this.params.page = val;
      this.fetchAllTutorials(this.params);
    },
  },
  created() {
    this.fetchAllTutorials(this.params);
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.add-tutorial {
  margin-bottom: 10px;
}
</style>