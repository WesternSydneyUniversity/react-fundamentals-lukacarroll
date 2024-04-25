"use client";

import React from "react";
import { TaskItem } from "./task-item";
import styles from "./task-list.module.css";
import { number } from "zod";

export type Task = {
  id: string;
  title: string;
  state: "PINNED" | "COMPLETED" | "ACTIVE";
};

export type setState = React.Dispatch<React.SetStateAction<Task[]>>

export function TaskList({ tasks }: { tasks: Task[] }) {

  const [taskObjects, setTaskObjects] = React.useState(tasks)
  const [inputContent, setInputContent] = React.useState("")
  
  const tasksActive = () => {
    const numberActive = taskObjects.filter(
      (task) => task.state === "ACTIVE"
    ).length
    return numberActive === 1 ? "1 task" : `${numberActive} tasks`
  }

  const handleAdd = () => {
    setTaskObjects([
      ...taskObjects,
      { 
        id: taskObjects.length ? taskObjects[taskObjects.length - 1]!.id + 1 : "1",
        title: inputContent,
        state: "ACTIVE"
      }
    ])
  }

  return (
    <>
      <div>
        <section className={styles.counter}>
          <div className={styles.taskLabel}>{tasksActive()}</div>
        </section>
        <section className={styles.section}>
          {taskObjects.map((task) => (
            <TaskItem 
            key={task.id} 
            task={task}
            taskObjects={taskObjects}
            setTaskObjects={setTaskObjects} 
            />
          ))}
        </section>
      </div>
      <section className={styles.inputContainer}>
        <input
          type="text"
          placeholder="What needs to be done?"
          className={styles.taskInput}
          onChange={(e) => setInputContent(e.target.value)}
        />
        <button 
          className={styles.taskButton}
          onClick={handleAdd}
        >Add Task</button>
      </section>
    </>
  );
}
