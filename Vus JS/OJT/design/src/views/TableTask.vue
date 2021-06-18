<template>
  <DetailTask />
  <div
    class="table-task"
    style="padding: 20px 0; display: flex; justify-content: flex-end"
  >
    <el-button size="medium">Send</el-button>
    <el-button size="medium">Reject</el-button>
    <el-button size="medium">Confirm</el-button>
  </div>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#f5f7fa' }"
    size="medium"
    class="table-task"
  >
    <el-table-column prop="category" label="MSC Category"> </el-table-column>
    <el-table-column label="Tasks">
      <template #default="scope">
        <el-form>
          <el-input
            type="textarea"
            size="small"
            style="text-align: center"
            v-model="scope.row.task"
            v-if="scope.row.isSelected"
            @blur="blurEvent(scope.row)"
          ></el-input>
          <p @click="cellClick(scope.row)" v-else>
            {{ scope.row.task }}
          </p>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column prop="achieved" label="Achieved"> </el-table-column>

    <el-table-column prop="note" label="My Notes">
      <template #default="scope">
        <el-form>
          <el-input
            type="textarea"
            size="small"
            style="text-align: center"
            v-model="scope.row.note"
            v-if="scope.row.isSelected"
            @blur="blurEvent(scope.row)"
          ></el-input>
          <p @click="cellClick(scope.row)" v-else>
            {{ scope.row.note }}
          </p>
        </el-form>
      </template></el-table-column
    >
  </el-table>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import DetailTask from "./DetailTask";
export default {
  name: "Evaluate",
  components: { DetailTask },
  data() {
    return {
      tableData: [
        {
          category: "Must-Do 1",
          task: "Coding today",
          achieved: "Yes",
          note: "note",
          isSelected: false,
        },
        {
          category: "Must-Do 2",
          task: "PostgreSQL",
          achieved: "No",
          note: "note",
          isSelected: false,
        },
        {
          category: "Must-Do 3",
          task: "PostgreSQL",
          achieved: "No",
          note: "note",
          isSelected: false,
        },
        {
          category: "Must-Do 4",
          task: "PostgreSQL",
          achieved: "No",
          note: "note",
          isSelected: false,
        },
        {
          category: "Should-Do 1",
          task: "PostgreSQL",
          achieved: "No",
          note: "note",
          isSelected: false,
        },
        {
          category: "Should-Do 2",
          task: "PostgreSQL",
          achieved: "No",
          note: "note",
          isSelected: false,
        },
        {
          category: "Could-Do 1",
          task: "PostgreSQL",
          achieved: "No",
          note: "note",
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    blurEvent(row) {
      row.isSelected = !row.isSelected;
      this.$message({
        message: "Successfully modified",
        type: "success",
        duration: 1000,
      });
    },
    cellClick(row) {
      row.isSelected = !row.isSelected;
    },

    ...mapMutations(["SET_IS_OPEN_EDIT_TASK"]),
    ...mapActions(["getAllTasks", "editTask"]),
  },
  computed: {
    ...mapGetters(["isOpenEditTask", "tasks"]),
  },
  created() {
    return this.getAllTasks();
  },
};
</script>

<style >
.el-table__row .el-textarea .el-textarea__inner {
  border-style: none;
}
.el-table__row .el-textarea .el-textarea__inner:hover {
  border-style: outset;
}

.el-table_1_column_1 .cell {
  text-align: center;
}

.el-table_1_column_3 .cell {
  text-align: center;
}
.el-table_1_column_4 .cell {
  text-align: center;
}

.el-table_1_column_1 .cell {
  background-color: #f5f7fa;
}

.el-table_1_column_1 {
  background-color: #f5f7fa;
}
</style>