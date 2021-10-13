<template>
  <div class="todoForm">
    <h3>Add a New Task</h3>
    <b-form @submit.prevent="onSubmit">
      <b-form-group label="Task Description" label-for="new-todo-description">
        <b-form-input
            type="text"
            id="new-todo-description"
            name="new-todo"
            autocomplete="off"
            v-model="description"
        />
      </b-form-group>
      <b-form-group label="Task Description" label-for="new-todo-date">
        <b-form-input type="date"
                      id="new-todo-date"
                      name="new-todo"
                      autocomplete="off"
                      v-model="date"/>
      </b-form-group>
      <b-button type="submit" variant="primary">Add</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  methods: {
    onSubmit() {
      console.log('Added Task ', this.description, this.date);
      this.$emit("task-added", this.description, this.date);
      this.label = ""; //reset old value
    }
  },
  data() {
    return {
      description: "",
      date: Date.now().toString()
    };
  }
}
</script>

<style scoped>
b-form-group {
}

.todoForm {
  text-align: left;
  border-style: solid;
  border-width: .05em;
}
</style>
