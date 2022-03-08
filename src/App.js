import { useState, useEffect } from "react";
import "./App.css";
import TaskListContainer from "./Components/TaskListContainer/TaskListContainer";

function App() {
  const [theme, setTheme] = useState("light");
  const [taskList, setTaskList] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/todos"
    );
    const data = await response.json();
    setTaskList([...data]);
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={theme === "light" ? "app" : "app app-dark"}>
      <select
        className={
          theme === "light"
            ? "theme-selector"
            : "theme-selector theme-selector-dark"
        }
        onChange={(e) => {
          setTheme(e.target.value);
        }}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <h1
        className={
          theme === "light"
            ? "heading-primary"
            : "heading-primary heading-primary-dark"
        }
      >
        To-do List
      </h1>
      <div className="container-list">
        <TaskListContainer
          isTaskList={true}
          taskList={taskList}
          setTaskList={setTaskList}
          theme={theme}
        ></TaskListContainer>
        <TaskListContainer
          isTaskList={false}
          taskList={taskList}
          setTaskList={setTaskList}
          theme={theme}
        ></TaskListContainer>
      </div>
    </div>
  );
}

export default App;
