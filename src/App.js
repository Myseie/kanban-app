import React, { useEffect, useState } from "react";
import KanbanColumn from "./components/KanbanColumn";
import AddTaskForm from "./components/AddTaskForm";
import "./App.css";



const App = () => {
  const [tasks, setTasks] = useState([]);
  
  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  const handleAddTask = (newTask) => {
    const updatedTasks = [tasks, newTask]
    setTasks([...tasks, newTask]);
    saveTasksToLocalStorage(updatedTasks);
  };


  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleTaskUpdate = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const getTasksByStatus = (status) => 
      tasks.filter((task) => task.status === status);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);
  
  return ( 
    <div className="kanban-board">
      <header className="kanban-header">
      <h1>Kanban Board</h1>
      <p>Organize your tasks easily</p>
      </header>
     
      <AddTaskForm onAddTask={handleAddTask} />
      <div className="kanban-colums">
      
        
        <KanbanColumn 
          title="Todo"
          tasks={getTasksByStatus("Todo")}
          onTaskUpdate={handleTaskUpdate}
          onDeleteTask={handleDeleteTask}
        />

        <KanbanColumn 
            title="In Progress"
            tasks={getTasksByStatus("In Progress")}
            onTaskUpdate={handleTaskUpdate}
            onDeleteTask={handleDeleteTask}
        />

        <KanbanColumn
            title="Done"
            tasks={getTasksByStatus("Done")}
            onTaskUpdate={handleTaskUpdate}
            onDeleteTask={handleDeleteTask}
        />
      
    
      </div>
    </div>
  );
};

export default App;
