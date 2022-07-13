import React from "react";
import { Avatar } from "rsuite";
import { getNameInitials } from "../../misc/helper";

const ProfileAvatar = ({ name, ...restProps }) => {
  return (
    <Avatar circle {...restProps}>
      {getNameInitials(name)}
    </Avatar>
  );
};

export default ProfileAvatar;
