import { SideMenuItem } from ".";

export default {
  title: "Components/SideMenuItem",
  component: SideMenuItem,
  argTypes: {
    state: {
      options: ["inactive", "active"],
      control: { type: "select" },
    },
    option: {
      options: ["calendar", "market", "profile", "avatar", "home"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "inactive",
    option: "calendar",
    className: {},
  },
};
