import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import YoutubePlayer from "react-youtube-player";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "300px",
    width: "85%",
    color: grey[800],
    wordBreak: "keep-all"
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    textAlign: "center"
  },
  title: {
    marginTop: "50px",
    textAlign: "center"
  },
  youtube: {
    marginTop: "50px",
    height: "300px"
  }
}));

function Media() {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"media"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <div className={classes.header}>
          <Typography variant="h3" component="h3">
            MEDIA
          </Typography>
          <Divider />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h4" className={classes.title}>
              2020년 3월 8일 성가대
            </Typography>
            <div className={classes.youtube}>
              <YoutubePlayer
                videoId="7NHkab8uMAs"
                playbackState="unstarted"
                configuration={{
                  showinfo: 0,
                  controls: 0
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h4" className={classes.title}>
              2020년 3월 8일 찬양팀
            </Typography>
            <div className={classes.youtube}>
              <YoutubePlayer
                videoId="x4b3KOUFGYk"
                playbackState="unstarted"
                configuration={{
                  showinfo: 0,
                  controls: 0
                }}
              />
            </div>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default Media;
