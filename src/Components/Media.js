import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Player } from "video-react";
import "./Video.css";

// css styles
const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "300px",
    width: "85%",
    color: grey[800],
    wordBreak: "keep-all",
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    textAlign: "center",
  },
  title: {
    marginTop: "50px",
    textAlign: "center",
  },
  youtube: {
    marginTop: "50px",
    height: "400px",
  },
  videoPlayer: {
    marginTop: "50px",
    height: "500px",
  },
}));

function Media(props) {
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
        {/* Use grid to render two boxes for large screen, one box for small screen */}
        <Grid container spacing={3}>
          {/* Left box */}
          {props.choirvideo ? (
            <Grid item sm={12} md={6}>
              <Typography variant="h4" component="h4" className={classes.title}>
                {props.choirtitle}
              </Typography>
              <div className={classes.player}>
                <Player
                  fluid={false}
                  className={classes.videoPlayer}
                  width={"100%"}
                >
                  <source src={props.choirvideo} />
                </Player>
              </div>
            </Grid>
          ) : (
            ""
          )}

          {/* Right box */}
          {props.choirvideo ? (
            <Grid item sm={12} md={6}>
              <Typography variant="h4" component="h4" className={classes.title}>
                {props.singingtitle}
              </Typography>
              <div className={classes.player}>
                <Player
                  fluid={false}
                  className={classes.videoPlayer}
                  width={"100%"}
                >
                  <source src={props.singingvideo} />
                </Player>
              </div>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default Media;
