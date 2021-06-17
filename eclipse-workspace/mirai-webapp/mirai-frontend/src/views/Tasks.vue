<template>
  <div v-for="task in tasks" :key="task.id">
    <div>
      <h1>{{ task.title }}</h1>
    </div>
    <div>
      <p>{{ task.subTitle }}</p>
    </div>
    <div>
      <input type="checkbox" v-model="task.completed" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Tasks",
  methods: {
    ...mapActions(["getAllTasks"]),
  },
  computed: {
    ...mapGetters(["tasks"]),
  },
  created() {
    return this.getAllTasks();
  },
};
</script>

<style>
</style>