import React from "react";

import Task, { ITaskProps } from "../Task/Task";

export interface ITaskListProps {
  tasks: ITaskProps[];
  loading: boolean;
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
}

export default function TaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: ITaskListProps) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (tasks.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} {...task} {...events} />
      ))}
    </div>
  );
}
