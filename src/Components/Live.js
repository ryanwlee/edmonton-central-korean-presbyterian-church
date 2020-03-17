import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "300px",
    width: "85%",
    color: grey[800],
    wordBreak: "keep-all"
  },
  live: {
    width: "100%",
    height: "600px"
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    marginBottom: "50px",
    textAlign: "center"
  },
  desc: {
    fontSize: "1rem",
    marginTop: "30px",
    textAlign: "center",
    marginBottom: "60px"
  }
}));

function Live() {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"live"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <div className={classes.header}>
          <Typography variant="h3" component="h3">
            LIVE
          </Typography>
          <Divider />
        </div>
        <iframe
          src="https://www.youtube.com/embed/live_stream?channel=UCzz-Hi9PzGYiQE0zEOn8idg"
          style={{
            border: 0,
            width: "100%",
            height: "auto",
            minHeight: "500px"
          }}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className={classes.desc}>
          <Typography variant="h5" display="block" gutterBottom>
            Live 방송 일정
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            주일 11시 2부 예배
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            수요일 7시 30분 수요예배
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            토요일 6시 30분 청년부 예배
          </Typography>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Live;
