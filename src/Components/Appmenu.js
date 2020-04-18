import React from "react";
// import { Link } from "react-router-dom";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";
import MapIcon from "@material-ui/icons/Map";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ExtLink from "@material-ui/core/Link";
import { HashLink as Link } from "react-router-hash-link";
import { fontFamily, fontSmall } from "./Constants";

// css styles
const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    fontWeight: 500,
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(2),
    color: grey[700],
    textDecoration: "none",
    fontFamily: fontFamily,
    fontSize: fontSmall,
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(3),
    },
  },
  iconlink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(1),
    color: grey[700],
    textDecoration: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

// Appbar menu
function Appmenu(current) {
  const classes = useStyles();
  console.log(current.current);

  return (
    <div className={classes.menu}>
      <Link to={"/#header"} className={classes.link}>
        HOME
      </Link>
      <Link to={"/#live"} className={classes.link}>
        LIVE
      </Link>
      <Link to={"/*/sermon"} className={classes.link}>
        SERMON
      </Link>
      <Link to={"/#media"} className={classes.link}>
        MEDIA
      </Link>
      <Link to={"/#news"} className={classes.link}>
        NEWS
      </Link>
      <Link to={"/*/news"} className={classes.link}>
        주보
      </Link>
      <ExtLink
        href={
          "https://www.google.com/maps/dir//%EC%97%90%EB%93%9C%EB%A8%BC%ED%8A%BC+%EC%A4%91%EC%95%99%EC%9E%A5%EB%A1%9C%EA%B5%90%ED%9A%8C/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x53a01e985c81374d:0xf0cee281dde253b7?sa=X&ved=2ahUKEwj-mrqekZvoAhXWi54KHfhUCM4Q9RcwFXoECBAQEA"
        }
        className={classes.iconlink}
      >
        <MapIcon />
      </ExtLink>
      <ExtLink href={"tel:1-780-437-6229"} className={classes.iconlink}>
        <CallIcon />
      </ExtLink>
      <ExtLink
        href={"mailto:eckpc1988@edmontoncc.net"}
        className={classes.iconlink}
      >
        <MailOutlineIcon />
      </ExtLink>
    </div>
  );
}

export default Appmenu;
