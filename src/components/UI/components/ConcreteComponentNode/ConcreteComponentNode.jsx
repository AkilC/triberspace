/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconArrow } from "../../icons/IconArrow";
import { IconArt } from "../../icons/IconArt";
import { IconCalendar } from "../../icons/IconCalendar";
import { IconCalendarCheck } from "../../icons/IconCalendarCheck";
import { IconCash } from "../../icons/IconCash";
import { IconChat } from "../../icons/IconChat";
import { IconChevron } from "../../icons/IconChevron";
import { IconController } from "../../icons/IconController";
import { IconData } from "../../icons/IconData";
import { IconHeart } from "../../icons/IconHeart";
import { IconHome } from "../../icons/IconHome";
import { IconLocation } from "../../icons/IconLocation";
import { IconMarketplace } from "../../icons/IconMarketplace";
import { IconNotif } from "../../icons/IconNotif";
import { IconPerson } from "../../icons/IconPerson";
import { IconSettings } from "../../icons/IconSettings";
import { IconShirt } from "../../icons/IconShirt";
import { IconSocial } from "../../icons/IconSocial";
import { IconStar } from "../../icons/IconStar";
import { IconStore } from "../../icons/IconStore";
import { IconSupport } from "../../icons/IconSupport";
import { IconThumbDown } from "../../icons/IconThumbDown";
import { IconThumbUo } from "../../icons/IconThumbUo";
import { IconTv } from "../../icons/IconTv";
import { IconVideo } from "../../icons/IconVideo";
import { IconWorld } from "../../icons/IconWorld";
import { Icons } from "../../icons/Icons";
import "./style.css";

export const ConcreteComponentNode = ({
  icon,
  iconMainMenuClassName,
  frameClassName,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
  divClassNameOverride,
}) => {
  return (
    <>
      {icon === "settings" && <IconSettings className="instance-node-2" />}

      {icon === "profile" && <Icons className="instance-node-2" color="#444444" />}

      {["main-menu", "sign-out"].includes(icon) && (
        <div className={`concrete-component-node icon-${icon} ${iconMainMenuClassName}`}>
          {icon === "main-menu" && (
            <div className={`frame ${frameClassName}`}>
              <div className={`rectangle-2 ${rectangleClassName}`} />
              <div className={`rectangle-2 ${rectangleClassNameOverride}`} />
              <div className={`rectangle-2 ${divClassName}`} />
              <div className={`rectangle-2 ${divClassNameOverride}`} />
            </div>
          )}

          {icon === "sign-out" && (
            <img
              className={`union ${frameClassName}`}
              alt="Union"
              src="https://c.animaapp.com/8TF7hHQo/img/union.svg"
            />
          )}
        </div>
      )}

      {icon === "notif" && <IconNotif className="instance-node-2" color="#444444" />}

      {icon === "home" && <IconHome className="instance-node-2" />}

      {icon === "marketplace" && <IconMarketplace className="instance-node-2" />}

      {icon === "person" && <IconPerson className="instance-node-2" />}

      {icon === "social" && <IconSocial className="instance-node-2" />}

      {icon === "calendar" && <IconCalendar className="instance-node-2" />}

      {icon === "star" && <IconStar className="instance-node-2" />}

      {icon === "shirt" && <IconShirt className="instance-node-2" />}

      {icon === "controller" && <IconController className="instance-node-2" />}

      {icon === "art" && <IconArt className="instance-node-2" />}

      {icon === "video" && <IconVideo className="instance-node-2" />}

      {icon === "TV" && <IconTv className="instance-node-2" />}

      {icon === "chat" && <IconChat className="instance-node-2" />}

      {icon === "thumb-uo" && <IconThumbUo className="instance-node-2" />}

      {icon === "thumb-down" && <IconThumbDown className="instance-node-2" />}

      {icon === "heart" && <IconHeart className="instance-node-2" />}

      {icon === "calendar-check" && <IconCalendarCheck className="instance-node-2" />}

      {icon === "support" && <IconSupport className="instance-node-2" />}

      {icon === "store" && <IconStore className="instance-node-2" />}

      {icon === "data" && <IconData className="instance-node-2" />}

      {icon === "cash" && <IconCash className="instance-node-2" />}

      {icon === "world" && <IconWorld className="instance-node-2" />}

      {icon === "location" && <IconLocation className="instance-node-2" />}

      {icon === "chevron" && <IconChevron className="instance-node-2" />}

      {icon === "arrow" && <IconArrow className="instance-node-2" />}
    </>
  );
};

ConcreteComponentNode.propTypes = {
  icon: PropTypes.oneOf([
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
  ]),
};
