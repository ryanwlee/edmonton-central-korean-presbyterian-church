import React, { useRef, useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Footer from "./Footer";
import { Player } from "video-react";
import "./Video.css";
import audioSpinner from "./svg/audio.svg";

const videoUrlPrefix = "https://edmontoncc.net/media/sermon/";

const useStyles = makeStyles(theme => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    wordBreak: "keep-all"
  },
  header: {
    marginTop: "130px",
    marginBottom: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    textAlign: "center"
  },
  sermonContainer: {
    width: "90%",
    maxWidth: "1400px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    marginBottom: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column"
    }
  },
  videoPlaylist: {
    minWidth: "400px",
    height: "550px",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "100%"
    },
    [theme.breakpoints.up("lg")]: {
      height: "700px"
    }
  },
  videoPlayer: {
    margin: "auto",
    outline: "none",
    height: "550px",
    [theme.breakpoints.up("lg")]: {
      height: "700px"
    }
  },
  videoTitle: {
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: "1.1rem"
  },
  Spinner: {
    marginTop: "auto",
    marginBottom: "5px",
    marginLeft: "15px",
    height: "24px",
    outline: "none"
  }
}));

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

async function fetchData() {
  const response = await fetch(process.env.REACT_APP_API_SERVER_URL_SERMONS);
  console.log(response);
  const result = await response.json();
  console.log(
    result.data.sort(function(a, b) {
      if (a.sermondate > b.sermondate) {
        return -1;
      }
      if (b.sermondate > a.sermondate) {
        return 1;
      }
      return 0;
    })
  );
  return result.data;
}

function SermonPage({ setScreen }) {
  const classes = useStyles();
  const player = useRef(null);
  const [curVideo, setCurVideo] = React.useState("");
  const [expanded, setExpanded] = React.useState("");

  const initState = {
    sermons: []
  };
  const [sermons, setSermons] = useState(initState.sermons);

  useEffect(() => {
    async function getSermons() {
      const result = await fetchData();
      if (result && result.length > 0) {
        setCurVideo(result[0].src);
        setExpanded(result[0].sermondate);
        setSermons(result);
      }
    }
    getSermons();
  }, []);

  const handleChange = panel => (event, newExpanded) => {
    if (panel.src !== curVideo) {
      player.current.video.pause();
      setCurVideo(panel.src);
      player.current.video.load();
    }
    setExpanded(newExpanded ? panel.key : false);
  };

  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <Typography variant="h3" component="h3">
          SERMON
        </Typography>
        <Divider />
      </div>
      <div className={classes.sermonContainer}>
        {sermons && sermons.length > 0 ? (
          <Player
            ref={player}
            fluid={false}
            autoPlay
            className={classes.videoPlayer}
            width={"100%"}
          >
            <source src={videoUrlPrefix + curVideo} />
          </Player>
        ) : (
          ""
        )}
        <div className={classes.videoPlaylist}>
          {sermons && sermons.length > 0
            ? sermons.map(video => {
                return (
                  <ExpansionPanel
                    square
                    expanded={expanded === video.key}
                    onChange={handleChange(video)}
                    key={video.sermondate}
                  >
                    <ExpansionPanelSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                    >
                      <Typography className={classes.videoTitle}>
                        {video.title}
                      </Typography>
                      {video.src === curVideo ? (
                        <img
                          src={audioSpinner}
                          className={classes.Spinner}
                          alt={"spinner"}
                        />
                      ) : (
                        ""
                      )}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Typography>
                        {video.description
                          ? video.description
                          : video.title + "에 있었던 2부 예배 설교입니다."}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })
            : ""}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SermonPage;