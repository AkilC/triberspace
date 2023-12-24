import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,
  argTypes: {
    icon: {
      options: [
        "controller",
        "art",
        "world",
        "thumb-uo",
        "sign-out",
        "person",
        "location",
        "heart",
        "thumb-down",
        "chevron",
        "social",
        "main-menu",
        "calendar",
        "chat",
        "star",
        "data",
        "home",
        "video",
        "shirt",
        "cash",
        "arrow",
        "notif",
        "calendar-check",
        "profile",
        "TV",
        "marketplace",
        "store",
        "settings",
        "support",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    icon: "controller",
    iconMainMenuClassName: {},
    frameClassName: {},
    rectangleClassName: {},
    rectangleClassNameOverride: {},
    divClassName: {},
    divClassNameOverride: {},
  },
};
