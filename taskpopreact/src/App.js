import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";
import TaskCard from "./components/TaskCard/TaskCard";
import AddTask from "./components/AddTask/AddTask";

function App() {

    const [tasks, setTasks] = useState([])

    const [currentTask, setCurrentTask] = useState(null)

    const [completed, setCompleted] = useState(0)

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


    function handleAddTask(taskDescription, dueDate) {
        if (currentTask == null) {
            //populate current card and reveal
            setCurrentTask({description: taskDescription, dueDate: dueDate})
        }else{
            //current card already full.
            setTasks([...tasks, {description: taskDescription, dueDate: dueDate}])
        }
    }

    function handleCompleteTask() {
        setCompleted(completed + 1)
        if (tasks.length > 0) {
            //pull a task off deck
            if(tasks.length === 0){
                setCurrentTask(null)
            }
            let current = tasks.pop()
            setCurrentTask(current)
        } else {
            //hide task card no more tasks.
            setCurrentTask(null)
        }
    }

    function handleShuffleTasks() {
        //put current back onto the arr & pick a random task in array then pull.
        if (tasks.length !== 0) {
            let temp = currentTask
            setTasks(shuffle(tasks))
            let current = tasks.pop()
            setCurrentTask(current)
            tasks.push(temp)
        }
    }

    function handleDiscardTask() {
        //throw the current task out.
        if (tasks.length > 0) {
            //pull a task off deck
            console.log(`PULLING TASKS ${tasks.length}`)
            let current = tasks.pop()
            setCurrentTask(current)
        } else {
            //hide task card no more tasks.
            console.log("NO MORE TASKS")
            setCurrentTask(null)
        }
    }

    return (
        <div className="App">
            {currentTask == null ? <h3 className="centered">No Tasks!</h3> :
                <TaskCard className="centered" currentTask={currentTask}
                          handleCompleteTask={handleCompleteTask}
                          handleShuffleTasks={handleShuffleTasks}
                          handleDiscardTask={handleDiscardTask}/>}
            <p>{completed} Completed Tasks</p>
            <AddTask handleAddTask={handleAddTask}/>
        </div>
    );
}

export default App;
