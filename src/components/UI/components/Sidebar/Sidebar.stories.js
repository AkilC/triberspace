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
    chevron: "https://c.animaapp.com/8TF7hHQo/img/chevron-2.svg",
  },
};
