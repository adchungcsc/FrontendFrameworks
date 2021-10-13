import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";


import './addtask.css';


function AddTask(props) {

    function handleSubmit(event){
        event.preventDefault();
        console.log("Submitted")
        let desc = event.target.elements.taskDescription.value;
        let dueDate = event.target.elements.taskDueDate.value
        console.log(desc)
        console.log(dueDate)
        props.handleAddTask(desc, dueDate)
    }

    return (
        <div className="border task-adder" style={{"margin-top": "3em"}}>
            <h3>Add a New Task</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control name="taskDescription" as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Task Due Date</Form.Label>
                    <Form.Control name="taskDueDate" type="date"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default AddTask;
