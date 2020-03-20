import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import { Player } from "video-react";
import "./Video.css";

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
  videoPlayer: {
    marginTop: "50px",
    height: "500px"
  },
  link: {
    color: grey[800],
    fontSize: "1rem",
    textAlign: "center",
    marginTop: "25px"
  }
}));

async function fetchData() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch("https://edmontoncc.net/db/sermon.json");
  const result = await response.json();
  return result;
}

function Sermon() {
  const classes = useStyles();
  const initState = {
    src: "",
    title: "",
    secondTitle: "",
    desc: ""
  };
  const [sermon, setSermon] = useState(initState);

  useEffect(() => {
    async function getSermon() {
      const sermon = await fetchData();
      setSermon(sermon.mainSermon);
    }
    getSermon();
  }, []);

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
            <Typography
              variant="h4"
              component="h4"
              className={classes.title}
            ></Typography>
            <div className={classes.player}>
              {sermon && sermon.src !== "" ? (
                <Player
                  fluid={false}
                  className={classes.videoPlayer}
                  width={"100%"}
                >
                  <source src={sermon.src} />
                </Player>
              ) : (
                ""
              )}
            </div>
          </Grid>
          {sermon ? (
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" component="h4" className={classes.title}>
                {sermon.title}
              </Typography>
              <Typography variant="h5" component="h5" className={classes.title}>
                {sermon.secondTitle}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                className={classes.content}
              >
                {sermon.desc}
              </Typography>
              <Link to={"/*/sermon"}>
                <Typography
                  variant="caption"
                  display="block"
                  gutterBottom
                  className={classes.link}
                >
                  더 많은 설교 영상을 원하신다면...
                </Typography>
              </Link>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default Sermon;
