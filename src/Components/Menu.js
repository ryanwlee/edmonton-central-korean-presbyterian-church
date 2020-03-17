import React from "react";
import Link from "@material-ui/core/Link";
import grey from "@material-ui/core/colors/grey";
import { makeStyles } from "@material-ui/core/styles";
import MapIcon from "@material-ui/icons/Map";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  menu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: drawerWidth,
    backgroundColor: "white",
    fontWeight: 600
  },
  link: {
    margin: theme.spacing(1),
    color: grey[700]
  },
  selectedLink: {
    margin: theme.spacing(1),
    color: grey[800]
  }
}));

function Menu(current) {
  const classes = useStyles();

  const onClick = () => {
    current.toggleDrawer("left", false)({});
  };

  return (
    <div className={classes.menu}>
      <Link
        href={"#monthlyverse"}
        className={
          current.current === "monthlyverse"
            ? classes.selectedLink
            : classes.link
        }
        onClick={() => onClick()}
      >
        요절 말씀
      </Link>
      <Link
        href={"#live"}
        className={
          current.current === "live" ? classes.selectedLink : classes.link
        }
        onClick={() => onClick()}
      >
        LIVE
      </Link>
      <Link
        href={"#sermon"}
        className={
          current.current === "sermon" ? classes.selectedLink : classes.link
        }
        onClick={() => onClick()}
      >
        SERMON
      </Link>
      <Link
        href={"#media"}
        className={
          current.current === "media" ? classes.selectedLink : classes.link
        }
        onClick={() => onClick()}
      >
        MEDIA
      </Link>
      <Link
        href={"#news"}
        className={
          current.current === "news" ? classes.selectedLink : classes.link
        }
        onClick={() => onClick()}
      >
        NEWS
      </Link>
      <Link
        href={"#gallery"}
        className={
          current.current === "gallery" ? classes.selectedLink : classes.link
        }
        onClick={() => onClick()}
      >
        GALLERY
      </Link>
      <Link
        href={"#contact"}
        className={
          current.current === "contact" ? classes.selectedLink : classes.link
        }
        onClick={() => onClick()}
      >
        오시는 길
      </Link>
      <Link
        href={
          "https://www.google.com/maps/dir//%EC%97%90%EB%93%9C%EB%A8%BC%ED%8A%BC+%EC%A4%91%EC%95%99%EC%9E%A5%EB%A1%9C%EA%B5%90%ED%9A%8C/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x53a01e985c81374d:0xf0cee281dde253b7?sa=X&ved=2ahUKEwj-mrqekZvoAhXWi54KHfhUCM4Q9RcwFXoECBAQEA"
        }
        className={classes.link}
      >
        <MapIcon />
      </Link>
      <Link href={"tel:1-780-437-6229"} className={classes.link}>
        <CallIcon />
      </Link>
      <Link href={"mailto:eckpc1988@edmontoncc.net"} className={classes.link}>
        <MailOutlineIcon />
      </Link>
    </div>
  );
}

export default Menu;
