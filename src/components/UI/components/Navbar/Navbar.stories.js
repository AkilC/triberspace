import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    state: {
      options: ["authenticated", "unauthenticated"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "authenticated",
    className: {},
    TP: "https://c.animaapp.com/BWnJGvur/img/tp-1.svg",
  },
};
