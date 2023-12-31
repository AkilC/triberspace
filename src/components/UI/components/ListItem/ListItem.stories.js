import { ListItem } from ".";

export default {
  title: "Components/ListItem",
  component: ListItem,
  argTypes: {
    state: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Lorem",
    state: "inactive",
    className: {},
  },
};
