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
  switch (name) {
    case group.ADMIN:
      return (
        <Tooltip title={name} placement="bottom">
          <BusinessCenterIcon />
        </Tooltip>
      );
    case group.CATERING:
      return (
        <Tooltip title={name} placement="bottom">
          <FoodIcon />
        </Tooltip>
      );
    case group.STUDENTS:
      return (
        <Tooltip title={name} placement="bottom">
          <StudentsIcon />
        </Tooltip>
      );
  case group.SECURITY:
    return (
        <Tooltip title={name} placement="bottom">
          <SecurityIcon />
        </Tooltip>
    );
  case group.BINS:
    return (
        <Tooltip title={name} placement="bottom">
          <DeleteIcon />
        </Tooltip>
    );
  case group.VENUES:
    return (
        <Tooltip title={name} placement="bottom">
          <LocationCityIcon />
        </Tooltip>
    );
  default:
    return (
        <Tooltip title={name} placement="bottom">
          <GroupIcon />
        </Tooltip>
      );
  }
};

export default getIcon;
