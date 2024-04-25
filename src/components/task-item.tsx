import type { Task, setState } from "./task-list";
import React from "react"

import styles from "./task-item.module.css";



export function TaskItem( props : { task: Task, taskObjects: Task[], setTaskObjects: setState} ) {

  const handleClick = () => {
    props.task.state = props.task.state === "ACTIVE" ? "COMPLETED" : "ACTIVE";
    props.setTaskObjects([
      ...props.taskObjects
    ])
  };

  const handleDelete = () => {
    props.setTaskObjects(
      props.taskObjects.filter((task) => task.id !== props.task.id)
    )
  }

  const taskTitleStyle = {
    flex: 1,
    textDecoration: props.task.state === "COMPLETED" ? "line-through" : "none",
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <div className={styles.round}>
          <input
            type="checkbox"
            id={`task-${props.task.id}`}
            data-testid={`task-${props.task.id}`}
            checked={props.task.state === "COMPLETED"}
            onClick={handleClick}
          />
          <label htmlFor={`task-${props.task.id}`}></label>
        </div>
      </div>
      <span style={taskTitleStyle}>{props.task.title}</span>
      <div className={styles.actions}>
        <button
          data-testid={`delete-${props.task.id}`}
          className={styles.deleteButton}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
