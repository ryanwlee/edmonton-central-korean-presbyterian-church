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
  content: {
    marginTop: "50px",
    fontSize: "1rem"
  },
  youtube: {
    marginTop: "50px",
    height: "300px"
  }
}));

function Sermon() {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"sermon"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <div className={classes.header}>
          <Typography variant="h3" component="h3">
            SERMON
          </Typography>
          <Divider />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h4" className={classes.title}>
              2020년 3월 8일 주일 2부예배
            </Typography>
            <div className={classes.youtube}>
              <YoutubePlayer
                videoId="ruAfoBShras"
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
              예수 그리스도의 성장과정
            </Typography>
            <Typography variant="h5" component="h5" className={classes.title}>
              누가복음 2장 40, 52절
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              40. 아기가 자라며 강하여지고 지혜가 충만하며 하나님의 은혜가 그의
              위에 있더라 52. 예수는 지혜와 키가 자라가며 하나님과 사람에게 더욱
              사랑스러워 가시더라
            </Typography>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default Sermon;
