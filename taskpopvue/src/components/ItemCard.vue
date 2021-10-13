<template>
  <div class="toDoItem">
    <h3>{{ description }}</h3>
    <div v-if=isPastDue(this.date)>
      <h4>{{ date }}</h4>
    </div>
    <div v-else>
      <h4 style="color:red;">{{ date }}</h4>
    </div>
    <div class="row">
      <button class="btn btn-link col-sm" @click="handleCompleteTask">
        Complete
      </button>
      <button class="btn btn-link col-sm" @click="handleDiscardTask">
        Discard
      </button>
      <button class="btn btn-link col-sm" @click="handleShuffleTasks">
        Shuffle
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    description: {required: true, type: String},
    date: {required: true, type: String}
  },
  methods: {
    isPastDue(dueDate) {
      return Date.now() < (new Date(dueDate).getTime());
    },
    handleCompleteTask(){
      this.$emit("task-completed");
    },
    handleDiscardTask(){
      this.$emit("task-discarded");
    },
    handleShuffleTasks(){
      this.$emit("task-shuffled");
    }
  }
};


</script>

<style scoped>
.toDoItem {
  text-align: left;
  border-style: solid;
  border-width: .05em;
}
</style>
