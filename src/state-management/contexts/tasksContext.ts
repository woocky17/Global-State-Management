import { Dispatch } from "react";
import { Task, TaskAction } from "../Reducer/tasksReducer";
import React from "react";

interface TasksContextBox {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TasksContextBox>(
  {} as TasksContextBox
);
export default TasksContext;
