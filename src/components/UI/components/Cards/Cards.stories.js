import { Cards } from ".";

export default {
  title: "Components/Cards",
  component: Cards,
  argTypes: {
    type: {
      options: ["event-tile", "space", "store", "space-small", "shop-card-short", "world-tile", "shop-card-tall"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "event-tile",
    className: {},
    personIcon: "https://c.animaapp.com/8TF7hHQo/img/personicon-48.svg",
    personIconClassName: {},
  },
};
