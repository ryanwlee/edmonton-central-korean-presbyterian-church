import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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

function MonthlyVerse() {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"monthlyverse"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <Paper className={classes.card} elevation={3}>
          <Typography variant="h4" component="h4" className={classes.title}>
            3월 요절 말씀
          </Typography>
          <Typography variant="h5" component="h5" className={classes.verse}>
            그가 찔림은 우리의 허물 때문이요 그가 상함은 우리의 죄악 때문이라
            그가 징계를 받으므로 우리는 평화를 누리고 그가 채찍에 맞으므로
            우리는 나음을 받았도다
          </Typography>
          <Typography variant="h5" component="h5" className={classes.from}>
            이사야 53장 5절
          </Typography>
        </Paper>
      </ScrollAnimation>
    </div>
  );
}

export default MonthlyVerse;
