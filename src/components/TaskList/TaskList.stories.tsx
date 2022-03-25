import React from "react";

import TaskList from "./TaskList";
import * as TaskStories from "../Task/Task.stories";
import { ComponentStory } from "@storybook/react";
import { ITaskProps, TaskState } from "../Task/Task";

export default {
  component: TaskList,
  title: "TaskList",
  decorators: [
    (story: any) => <div style={{ padding: "3rem" }}>{story()}</div>,
  ],
};

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Task.stories.js.
  tasks: [
    { ...TaskStories.Default.args, id: "1", title: "Task 1" } as ITaskProps,
    { ...TaskStories.Default.args, id: "2", title: "Task 2" } as ITaskProps,
    { ...TaskStories.Default.args, id: "3", title: "Task 3" } as ITaskProps,
    { ...TaskStories.Default.args, id: "4", title: "Task 4" } as ITaskProps,
    { ...TaskStories.Default.args, id: "5", title: "Task 5" } as ITaskProps,
    { ...TaskStories.Default.args, id: "6", title: "Task 6" } as ITaskProps,
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
