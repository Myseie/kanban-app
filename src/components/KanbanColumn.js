import React from "react";

import KanbanTask from "./KanbanTask";


const KanbanColumn = ({index, title, tasks, onTaskUpdate, onDeleteTask}) => {
    return (
       
                <div
                    className="kanban-column"
            
                >
                    <h2>{title}</h2>
                    <div className="kanban-task-list">
                        {tasks.length > 0 ? (
                            tasks.map((task) => (
                                <KanbanTask
                                    key={task.id}
                                    task={task}
                                    index={index}
                                    onTaskUpdate={onTaskUpdate}
                                    onDeleteTask={onDeleteTask}
                                    
                                />
                            ))
                        ) :(
                            <p>No tasks in this column</p>
                        )}
                    </div>
                </div>
      
    );
};

export default KanbanColumn;