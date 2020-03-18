import React, { useRef } from "react";
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
const videos = [
  { name: "3월 8일 설교", src: "2020.3.8.s2.mp4", key: "20200308" },
  { name: "3월 1일 설교", src: "2020.3.1.s2.mp4", key: "20200301" },
  { name: "2월 23일 설교", src: "2020.2.23.s2.mp4", key: "20200223" },
  { name: "2월 16일 설교", src: "2020.2.16.s2.mp4", key: "20200216" },
  { name: "2월 9일 설교", src: "2020.2.9.s2.mp4", key: "20200209" },
  { name: "2월 2일 설교", src: "2020.2.2.s2.mp4", key: "20200202" },
  { name: "1월 26일 설교", src: "2020.1.26.s2.mp4", key: "20200126" },
  { name: "1월 19일 설교", src: "2020.1.19.s2.mp4", key: "20200119" },
  { name: "1월 12일 설교", src: "2020.1.12.S2.mp4", key: "20200112" }
];

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
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "100%"
    }
  },
  videoPlayer: {
    margin: "auto",
    outline: "none"
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

function SermonPage({ setScreen }) {
  const classes = useStyles();
  const player = useRef(null);
  const [curVideo, setCurVideo] = React.useState(videos[0].src);
  const [expanded, setExpanded] = React.useState(videos[0].key);

  const handleChange = panel => (event, newExpanded) => {
    console.log(player);
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
        <Player ref={player} autoPlay className={classes.videoPlayer}>
          <source src={videoUrlPrefix + curVideo} />
        </Player>
        <div className={classes.videoPlaylist}>
          {videos.map(video => {
            return (
              <ExpansionPanel
                square
                expanded={expanded === video.key}
                onChange={handleChange(video)}
                key={video.key}
              >
                <ExpansionPanelSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography className={classes.videoTitle}>
                    {video.name}
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
                    {video.name + "에 있었던 2부 예배 설교입니다."}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SermonPage;
