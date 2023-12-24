import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    property1: {
      options: ["primary-CTA-small", "side-menu-button", "secondary-CTA-small", "primary-CTA", "secondary-CTA"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "primary-CTA-small",
    className: {},
    divClassName: {},
    text: "Lorem",
  },
};
