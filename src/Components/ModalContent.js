import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import grey from "@material-ui/core/colors/grey";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  paper: {
    zIndex: 1,
    width: "60%",
    height: "600px",
    overflow: "scroll",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 7, 8),
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "40px",
      height: "400px",
      padding: theme.spacing(5, 4, 5),
    },
  },
  indent: {
    marginLeft: "10px",
  },
  content: {
    display: "block",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    wordBreak: "keep-all",
    marginTop: "30px",
    textAlign: "left",
    fontSize: "1.2rem",
    color: grey[800],
    whiteSpace: "pre-wrap",
    "& a": {
      color: red[700],
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  headerTitle1: {
    fontSize: "2rem",
    color: grey[800],
    marginLeft: "auto",
    marginRight: "auto",
    wordBreak: "keep-all",
    zIndex: 100,
    [theme.breakpoints.down("xs")]: {
      marginLeft: "30px",
      marginRight: "30px",
    },
  },
  highlight: {
    color: red[700],
  },
  click: {
    cursor: "pointer",
    fontSize: "1.2rem",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

// special modal pop up for corona event
function ModalContent(props) {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Typography variant="h4" component="h4" className={classes.headerTitle1}>
        {ReactHtmlParser(props.title)}
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className={classes.content}
      >
        <pre className={classes.content}>{ReactHtmlParser(props.content)}</pre>
      </Typography>
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        className={classes.click}
        onClick={props.handleCookieOff}
      >
        다시 보지 않기
      </Typography>
    </div>
  );
}

export default ModalContent;
