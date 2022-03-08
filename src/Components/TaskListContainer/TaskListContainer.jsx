import React from "react";
import NewTaskComp from "../NewTaskComp/NewTaskComp";
import TaskList from "../TaskList/TaskList";
import "./TaskListContainer.css";

function TaskListContainer(props) {
  return (
    <div
      className={
        props.theme === "light"
          ? "container-list-todo"
          : "container-list-todo container-list-todo-dark"
      }
    >
      <h2
        className={
          props.theme === "light"
            ? "heading-secondary"
            : "heading-secondary heading-secondary-dark"
        }
      >
        {props.isTaskList ? "Todo" : "Done"}
      </h2>
      <TaskList {...props}></TaskList>
      {props.isTaskList ? <NewTaskComp {...props}></NewTaskComp> : null}
    </div>
  );
}

export default TaskListContainer;
