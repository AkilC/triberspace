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
    searchBar: "https://c.animaapp.com/8TF7hHQo/img/search-bar-3.svg",
    TP: "https://c.animaapp.com/8TF7hHQo/img/tp-2.svg",
  },
};
