import React from "react";
import CompletedTaskItem from "./CompletedItem";

function CompletedTaskList(props) {
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
          return (
            <CompletedTaskItem
              theme={props.theme}
              task={task}
              taskList={props.taskList}
              setTaskList={props.setTaskList}
            ></CompletedTaskItem>
          );
        })}
    </ol>
  );
}

export default CompletedTaskList;
