import React from 'react';

function TaskCard(props) {

    return (
        <div className="border task-card" style={{"margin-bottom": "3em"}}>
            <h3 id="taskName">{props.currentTask.description}</h3>
            {new Date() < new Date(props.currentTask.dueDate) ? <h4 id="dueDate">{props.currentTask.dueDate}</h4> :
                <h4 id="dueDate" style={{color: "red"}}>{props.currentTask.dueDate}</h4>}
            <div className="row">
                <button className="btn btn-link col-sm" onClick={props.handleCompleteTask}>
                    Complete
                </button>
                <button className="btn btn-link col-sm" onClick={props.handleDiscardTask}>
                    Discard
                </button>
                <button className="btn btn-link col-sm" onClick={props.handleShuffleTasks}>
                    Shuffle
                </button>
            </div>
        </div>
    );
}

export default TaskCard;
