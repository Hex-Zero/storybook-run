import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ApiCall } from "./ReduxApi";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Redux/ApiCalls/ReduxApi",
  component: ApiCall,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ApiCall>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ApiCall> = (args) => (
  <ApiCall {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
