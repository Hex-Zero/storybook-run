import React from "react";

export enum TaskState {
  TASK_INBOX = "TASK_INBOX",
  TASK_PINNED = "TASK_PINNED",
  TASK_ARCHIVED = "TASK_ARCHIVED",
}

export interface ITaskProps {
  task: {
    id: string;
    title: string;
    state: TaskState;
    updatedAt: Date;
  };
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: ITaskProps) {
  return (
    <div className="list-item">
      <input type="text" value={title} readOnly={true} />
    </div>
  );
}
