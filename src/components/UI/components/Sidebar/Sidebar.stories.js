import { Sidebar } from ".";

export default {
  title: "Components/Sidebar",
  component: Sidebar,
  argTypes: {
    userState: {
      options: ["authenticated", "unauthenticated"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    userState: "authenticated",
    className: {},
    sideMenuItemState: "inactive",
    chevron: "https://c.animaapp.com/BWnJGvur/img/chevron-1.svg",
  },
};
