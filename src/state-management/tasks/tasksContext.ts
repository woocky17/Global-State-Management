import { Dispatch } from "react";
import React from "react";
import { Task, TaskAction } from "./TaskProvider";

interface TasksContextBox {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextBox>(
  {} as TasksContextBox
);
export default TasksContext;
