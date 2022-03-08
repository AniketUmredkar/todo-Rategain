import React from "react";
import TaskItem from "../TaskItem/TaskItem";

function TaskList(props) {
  if (props.isTaskList) {
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
            return <TaskItem key={task.id} task={task} {...props}></TaskItem>;
          })}
      </ol>
    );
  } else {
    return (
      <ol className="list-task">
        {props.taskList
          .filter((task) => {
            if (task.completed) {
              return true;
            }
            return false;
          })
          .map((task) => {
            return <TaskItem key={task.id} task={task} {...props}></TaskItem>;
          })}
      </ol>
    );
  }
}

export default TaskList;
