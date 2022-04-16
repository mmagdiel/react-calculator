import React from "react";
import { Calculator } from "./components";
import "./components/theme.css";

export default {
  title: "Example/Calculator",
  component: Calculator,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Calculator {...args} />;

export const Primary = Template.bind({});
