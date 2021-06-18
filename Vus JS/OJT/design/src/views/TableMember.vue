<template>
  <el-table
    :data="tableData"
    :header-cell-style="{ background: '#f5f7fa' }"
    height="500"
  >
    <el-table-column prop="no" label="No" width="100"> </el-table-column>
    <el-table-column prop="member" label="Member" width="150">
    </el-table-column>
    <el-table-column prop="status" label="Status" width="120">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          no: "1",
          member: "SonLD11",
          status: "draff",
        },
        {
          no: "2",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "3",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "1",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "4",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "5",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "6",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "7",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "8",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "9",
          member: "SonLD11",
          status: "-",
        },
        {
          no: "10",
          member: "SonLD11",
          status: "-",
        },
      ],
    };
  },
};
</script>

<style >
.el-table_2_column_5 .cell {
  text-align: center;
}

.el-table_2_column_7 .cell {
  text-align: center;
}
</style>