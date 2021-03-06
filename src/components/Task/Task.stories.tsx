import { ComponentStory } from "@storybook/react";
import React from "react";

import Task, { TaskState } from "./Task";

export default {
  component: Task,
  title: "Task",
};

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "1",
  title: "Test Task",
  state: TaskState.TASK_INBOX,
  updatedAt: new Date(2021, 0, 1, 9, 0),
};

export const Pinned = Template.bind({});
Pinned.args = {
  id: "2",
  ...Default.args,
  state: TaskState.TASK_PINNED,
};

export const Archived = Template.bind({});
Archived.args = {
  id: "3",
  ...Default.args,
  state: TaskState.TASK_ARCHIVED,
};
