import React, { useState } from "react";
import "./NewTaskComp.css";
import { v4 } from "uuid";

function NewTaskComp(props) {
  const [display, setDisplay] = useState(true);
  const [newTask, setNewTask] = useState("");
  return (
    <>
      <button
        className={
          props.theme === "light"
            ? "btn btn-item"
            : "btn btn-item btn-dark btn-item-dark"
        }
        style={display ? { display: "inline-block" } : { display: "none" }}
        onClick={() => {
          setDisplay(false);
        }}
      >
        + Item
      </button>
      <form
        data-testid="input-form"
        className={
          props.theme === "light" ? "form-add" : "form-add form-add-dark"
        }
        style={!display ? { display: "inline-block" } : { display: "none" }}
      >
        <input
          className={
            props.theme === "light" ? "input-add" : "input-add input-add-dark"
          }
          type="text"
          placeholder="new task..."
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
        ></input>
        <button
          className={
            props.theme === "light"
              ? "btn btn-add"
              : "btn btn-add btn-dark btn-add-dark"
          }
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (newTask !== "") {
              props.setTaskList([
                ...props.taskList,
                { userId: 1, id: v4(), title: newTask, completed: false },
              ]);
            }
            setNewTask("");
            setDisplay(true);
          }}
        >
          Add
        </button>
      </form>
    </>
  );
}

export default NewTaskComp;
