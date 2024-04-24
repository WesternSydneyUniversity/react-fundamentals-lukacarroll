import type { Task } from "./task-list";
import React from "react"

import styles from "./task-item.module.css";

export function TaskItem({ task }: { task: Task }) {
  const [checked, setChecked] = React.useState(false);

  const handleClick = () => {
    setChecked(!checked);
  };

  const taskTitleStyle = {
    flex: 1,
    textDecoration: checked ? "line-through" : "none",
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
