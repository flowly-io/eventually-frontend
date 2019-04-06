import React from "react";
import group from "../constants/group";
import { Tooltip } from "@material-ui/core";

import GroupIcon from "@material-ui/icons/Group";
import SecurityIcon from "@material-ui/icons/Security";
import FoodIcon from "@material-ui/icons/Fastfood";
import StudentsIcon from "@material-ui/icons/School";

const getIcon = name => {
  console.log(name);
  switch (name) {
    case group.ADMIN:
      console.log("!");
      return (
        <Tooltip title={name} placement="bottom">
          <SecurityIcon />
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
    default:
      return (
        <Tooltip title={name} placement="bottom">
          <GroupIcon />
        </Tooltip>
      );
  }
};

export default getIcon;
