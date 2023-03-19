import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.jpg";
import { Avatar as AvatarComponent } from "@material-ui/core";

const Avatar = () => {
  const classes = useStyles();
  return <AvatarComponent src={AvatarImg} style={{ width: 320, height: 320 }} />;
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius: "50%",
    width: "270px",
    height: "270px",
    objectFit: "cover",
    objectPosition: "0 -20px",
    boxShadow: theme.shadows[10],
  },
}));

export default Avatar;
