import React, { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()) return alert("Title is required");

        const newTask = {
            id: Date.now(),
            title,
            description,
            status:"Todo",
            deadline,
        };

        onAddTask(newTask);
        setTitle("");
        setDeadline("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="add-task-form">
          <h3>Add a New Task</h3>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </form>
      );
    };
export default AddTaskForm;
