
import { useState } from "react";
import "./App.css";
function App()
{
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  // add task
  const addTask = () =>
  {
    if(task === "")
      return;

    setTasks([...tasks, task]);
    setTask("");
  };

  // delete task
  const deleteTask = (index) =>
  {
    const updatedTasks = tasks.filter((t, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">

      <h1>📝 Todo List</h1>

      <div className="inputBox">

        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button onClick={addTask}>Add</button>

      </div>

      <ul>
        {
          tasks.map((t, index) => (
            <li key={index}>

              {t}

              <button
                className="deleteBtn"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>

            </li>
          ))
        }
      </ul>

    </div>
  );
}

export default App;