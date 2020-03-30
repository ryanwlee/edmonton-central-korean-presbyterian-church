import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

// css styles
const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "40px",
    width: "90%",
    color: grey[800],
    wordBreak: "keep-all"
  },
  card: { padding: "40px 40px 40px 40px" },
  title: {},
  verse: { marginTop: "30px" },
  from: { marginTop: "30px" }
}));

// Monthly verse section
function MonthlyVerse(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"monthlyverse"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <Paper className={classes.card} elevation={3}>
          <Typography variant="h4" component="h4" className={classes.title}>
            {props.monthlyversetitle}
          </Typography>
          <Typography variant="h5" component="h5" className={classes.verse}>
            {props.monthlyverse}
          </Typography>
          <Typography variant="h5" component="h5" className={classes.from}>
            {props.monthlyversesecondtitle}
          </Typography>
        </Paper>
      </ScrollAnimation>
    </div>
  );
}

export default MonthlyVerse;
