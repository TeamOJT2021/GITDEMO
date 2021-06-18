<template>
  <el-row :gutter="isOpenProjectMSC ? 10 : 10">
    <el-col
      :span="isOpenProjectMSC ? 6 : 4"
      style="align-items: center; display: flex"
      class="category-project"
    >
      <div><h1>Type:</h1></div>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{ getTypeProject }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="Project MSC"
              >Project MSC</el-dropdown-item
            >
            <el-dropdown-item command="My Project">My Project</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
    <el-col :span="isOpenProjectMSC ? 7 : 6">
      <el-form-item size="medium">
        <el-input
          placeholder="Account"
          v-model="input3"
          class="input-with-select"
        ></el-input> </el-form-item
    ></el-col>
    <el-col :span="isOpenProjectMSC ? 5 : 3">
      <el-form-item size="medium">
        <el-date-picker
          style="width: 140px"
          v-model="value2"
          type="month"
          placeholder="Quarter"
        >
        </el-date-picker> </el-form-item
    ></el-col>
    <el-col :span="4">
      <el-form-item size="medium">
        <el-select v-model="abc" placeholder="All">
          <el-option label="Zone one" value="shanghai"></el-option>
          <el-option label="Zone two" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <el-col :span="2">
      <el-button
        style="margin: 28px 0"
        icon="el-icon-search"
        size="small"
      ></el-button>
    </el-col>
  </el-row>
  <el-descriptions
    class="margin-top"
    style="border-bottom: 0.5px solid #ebeef5"
    :column="3"
    :size="size"
  >
    <el-descriptions-item label="Name:">sonld11</el-descriptions-item>
    <el-descriptions-item label="Project:">MSCs PROJECT</el-descriptions-item>
    <el-descriptions-item label="Score:"></el-descriptions-item>
    <el-descriptions-item label="Month:">June2021</el-descriptions-item>
    <el-descriptions-item label="Status:">
      <el-tag size="small">CRAFT</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Intermediate Score:"></el-descriptions-item>
    <el-descriptions-item label="Report to:">ĐinhDV</el-descriptions-item>
    <el-descriptions-item label="Rating:"></el-descriptions-item>
    <el-descriptions-item label="K Personal Perf"></el-descriptions-item>
  </el-descriptions>
</template>

<script>
import { ref } from "vue";
import { mapGetters } from "vuex";
export default {
  name: "InfoTask",
  setup() {
    return {
      input3: ref(""),
    };
  },
  data() {
    return {
      size: "",
      value2: "",
    };
  },
  methods: {
    handleCommand(command) {
      if (command === "Project MSC") {
        this.$store.commit("SET_IS_OPEN_PROJECT_MSC", command);
      } else {
        this.$store.commit("SET_IS_OPEN_MY_PROJECT", command);
      }
    },
  },
  computed: {
    ...mapGetters(["isOpenProjectMSC", "getTypeProject", "getAllProject"]),
  },
};
</script>

<style >
.el-descriptions__label {
  font-weight: bold;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}

.el-dropdown {
  padding: 4px 8px 0 11px;
}
.el-dropdown span {
  font-size: 16px;
}

.el-dropdown-link {
  color: #333;
}
.el-form-item__content {
  padding-top: 26px;
}
</style>