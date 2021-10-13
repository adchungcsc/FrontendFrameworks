<template>
  <div id="app">
    <task-card v-if="currentTask!==null"
                @task-completed="handleCompleteTask"
                @task-discarded="handleDiscardTask"
                @task-shuffled="handleShuffleTasks"
                :description="currentTask.description"
                :date="currentTask.date"></task-card>
    <h3 v-else style="text-align: left">No Tasks</h3>
    <p id="completed-tasks">{{ completed }} Completed Tasks</p>
    <add-task @task-added="handleAddTask"></add-task>
  </div>
</template>

<script>

import TaskCard from "./components/ItemCard";
import AddTask from "./components/AddTask";

function shuffle(array) { //generously donated shuffle code courtesy of stack overflow
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default {
  name: 'App',
  components: {
    TaskCard: TaskCard,
    AddTask: AddTask
  },
  data() {
    return {
      tasks: [],
      currentTask: null,
      completed: 0,
    };
  },
  methods: {
    handleAddTask(description, date) {
      console.log('Task added:', description, date);
      if (this.currentTask == null) {
        //populate current card and reveal
        console.log("Only Task")
        this.currentTask = ({description: description, date: date})
      } else {
        //current card already full so add to list of tasks
        console.log("Added a new task")
        this.tasks = [...this.tasks, {description: description, date: date}]
      }
    },
    handleCompleteTask() {
      console.log("COMPLETE")
      this.completed++
      if (this.tasks.length > 0) {
        //pull a task off deck
        if (this.tasks.length === 0) {
          this.currentTask = null
        }
        this.currentTask = this.tasks.pop()
      } else {
        //hide task card no more tasks.
        this.currentTask = null
      }
    },
    handleDiscardTask() {
      console.log("DISCARD")
      //throw the current task out.
      if (this.tasks.length > 0) {
        //pull a task off deck
        console.log(`PULLING TASKS ${this.tasks.length}`)
        this.currentTask = this.tasks.pop()
      } else {
        //hide task card no more tasks.
        console.log("NO MORE TASKS")
        this.currentTask = null
      }
    },
    handleShuffleTasks() {
      console.log("SHUFFLE")
      //put current back onto the arr & pick a random task in array then pull
      if (this.tasks.length !== 0) {
        //only shuffle if there's something to shuffle
        let temp = this.currentTask
        this.tasks = shuffle(this.tasks)
        this.currentTask = this.tasks.pop()
        this.tasks.push(temp) //push old val back onto list
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#completed-tasks {
  margin-top: 3em;
  margin-bottom: 3em;
  text-align: left;
}
</style>
