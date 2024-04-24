import type { Task } from "./task-list";
import React from "react"

import styles from "./task-item.module.css";

export function TaskItem({ task }: { task: Task }) {
  const [taskObj, setTaskObj] = React.useState(task);

  const handleClick = () => {
    task.state = task.state === "ACTIVE" ? "COMPLETED" : "ACTIVE";
    setTaskObj({
      ...task
    })
  };

  const taskTitleStyle = {
    flex: 1,
    textDecoration: task.state === "COMPLETED" ? "line-through" : "none",
  };

  return (
    <div className={styles.container}>
      <div className={styles.checkbox}>
        <div className={styles.round}>
          <input
            type="checkbox"
            id={`task-${task.id}`}
            data-testid={`task-${task.id}`}
            onClick={handleClick}
          />
          <label htmlFor={`task-${task.id}`}></label>
        </div>
      </div>
      <span style={taskTitleStyle}>{task.title}</span>
      <div className={styles.actions}>
        <button
          data-testid={`delete-${task.id}`}
          className={styles.deleteButton}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
