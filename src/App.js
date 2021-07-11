import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [show, AddShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);
  //fetch tasks from json
  const fetchTasks = async () => {
    const r = await fetch("http://localhost:5000/tasks");
    const data = await r.json();
    return data;
  };

  //fetch Task
  const fetchTask = async (id) => {
    const r = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await r.json();
    return data;
  };

  //Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
    console.log("Delete", id);
  };
  //toggle remainder
  const toggleRemainder = async (id) => {
    const taskTOToggle = await fetchTask(id);
    const updTask = { ...taskTOToggle, remainder: !taskTOToggle.remainder };

    const r = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });
    const data = await r.json();
    console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remainder: data.remainder } : task
      )
    );
  };

  //adding task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
    // const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(task);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  //Toggle ADD form

  const ToggleAdd = () => {
    AddShow(!show);
  };
  return (
    <Router>
      <div className="container-fluid">
        <Header onClick={ToggleAdd} show={show} />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {show && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleRemainder}
                />
              ) : (
                <h5>No task remain</h5>
              )}
            </>
          )}
        />
        <Route path="/about" exact component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
