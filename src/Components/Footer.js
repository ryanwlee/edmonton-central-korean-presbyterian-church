import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import "animate.css/animate.min.css";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "60px",
    paddingBottom: "60px",
    width: "100%",
    backgroundColor: grey[800],
    color: grey[200],
    wordBreak: "keep-all"
  },
  desc: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    fontSize: "1rem",
    marginTop: "30px",
    textAlign: "center"
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"footer"}>
      <div className={classes.desc}>
        <Typography variant="body1" display="block" gutterBottom>
          2551 Ellwood Dr SW, Edmonton, AB, CANADA| Phone: 780-437-6229 | Email:
          eckpc1988@edmontoncc.net
        </Typography>
        <Typography variant="body1" display="block" gutterBottom>
          Copyright © 2020 Edmonton Central Korean Presbyterian Church
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
