<template>
  <el-row :gutter="20" class="detail-task"
    ><el-col v-if="isOpenProjectMSC" :xs="12" :sm="12" :md="8" :lg="8" :xl="6"
      ><TableMember
    /></el-col>
    <el-col
      :xs="isOpenProjectMSC ? 12 : ''"
      :sm="isOpenProjectMSC ? 12 : ''"
      :md="isOpenProjectMSC ? 16 : ''"
      :lg="isOpenProjectMSC ? 16 : ''"
      :xl="isOpenProjectMSC ? 18 : ''"
      ><TableTask
    /></el-col>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import TableMember from "./TableMember";
import TableTask from "./TableTask.vue";
export default {
  name: "TaskPerforment",
  components: {
    TableMember,
    TableTask,
  },
  computed: {
    ...mapGetters(["isOpenProjectMSC"]),
  },
};
</script>

<style scoped>
.detail-task {
  border: 0.5px solid #ebeef5;
}
</style>