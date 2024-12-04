import React from "react";


const KanbanTask = ({task, onTaskUpdate, onDeleteTask}) => {
   const handleMove = (newStatus) => {
    if(onTaskUpdate) {
        onTaskUpdate({...task, status: newStatus});
    }else {
        console.error("onTaskUpdate är inte definierad");
    }
   };

    const today = new Date();
    const isOverdue = task.deadline && new Date(task.deadline) < today;


    return (
        <div className={`kanban-task ${isOverdue ? "overdue" : ""}`}>
          <h4>{task.title}</h4>
          <p>{task.description || "No description provided"}</p>
          {isOverdue && <p className="overdue-warning">Overdue!</p>}
          <div className="task-actions">
            <button onClick={() => handleMove("In Progress")}>Move to In Progress</button>
            <button onClick={() => handleMove("Done")}>Move to Done</button>
          <button className="delete-button" onClick={() => onDeleteTask(task.id)}>
            Delete
          </button>
          </div>
        </div>
    );

};

export default KanbanTask;