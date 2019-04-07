import React from "react";
import group from "../constants/group";
import { Tooltip } from "@material-ui/core";

import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import GroupIcon from "@material-ui/icons/Group";
import SecurityIcon from "@material-ui/icons/Security";
import FoodIcon from "@material-ui/icons/Fastfood";
import StudentsIcon from "@material-ui/icons/School";
import DeleteIcon from "@material-ui/icons/Delete";
import LocationCityIcon from "@material-ui/icons/LocationCity";

const getIcon = name => {
  const props = {
    title:name,
    placement: "bottom",
    style: {
      paddingRight: "0.4rem",
    }
  };

  switch (name) {
    case group.ADMIN:
      return (
          <Tooltip {...props}>
          <BusinessCenterIcon />
        </Tooltip>
      );
    case group.CATERING:
      return (
        <Tooltip {...props}>
          <FoodIcon />
        </Tooltip>
      );
    case group.STUDENTS:
      return (
        <Tooltip {...props}>
          <StudentsIcon />
        </Tooltip>
      );
  case group.SECURITY:
    return (
        <Tooltip {...props}>
          <SecurityIcon />
        </Tooltip>
    );
  case group.BINS:
    return (
        <Tooltip {...props}>
          <DeleteIcon />
        </Tooltip>
    );
  case group.VENUES:
    return (
        <Tooltip {...props}>
          <LocationCityIcon />
        </Tooltip>
    );
  default:
    return (
        <Tooltip {...props}>
          <GroupIcon />
        </Tooltip>
      );
  }
};

export default getIcon;
