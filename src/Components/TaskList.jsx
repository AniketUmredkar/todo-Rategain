import React from "react";
import TaskItem from "./TaskItem";

function TaskList(props) {
  return (
    <ol className="list-task">
      {props.taskList
        .filter((task) => {
          if (!task.completed) {
            return true;
          }
          return false;
        })
        .map((task) => {
          return (
            <TaskItem
              theme={props.theme}
              task={task}
              taskList={props.taskList}
              setTaskList={props.setTaskList}
            ></TaskItem>
          );
        })}
    </ol>
  );
}

export default TaskList;
