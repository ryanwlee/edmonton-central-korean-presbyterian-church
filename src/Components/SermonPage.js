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

// css styles
const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    wordBreak: "keep-all",
  },
  header: {
    marginTop: "130px",
    marginBottom: "40px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    textAlign: "center",
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
      flexDirection: "column-reverse",
    },
  },
  videoPlaylist: {
    minWidth: "400px",
    maxWidth: "600px",
    height: "550px",
    overflow: "scroll",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      minWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      height: "700px",
    },
  },
  videoPlayer: {
    margin: "auto",
    outline: "none",
    height: "550px",
    [theme.breakpoints.up("lg")]: {
      height: "700px",
    },
  },
  videoTitle: {
    marginTop: "auto",
    marginBottom: "auto",
    fontSize: "1.1rem",
    whiteSpace: "pre-wrap",
  },
  videoDescription: {
    fontSize: "0.9rem",
    whiteSpace: "pre-wrap",
  },
  Spinner: {
    marginTop: "auto",
    marginBottom: "5px",
    marginLeft: "15px",
    height: "24px",
    outline: "none",
  },
}));

// clickable expansions
const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiExpansionPanel);

// clickable expansions
const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

// get list of sermon videos from php server / db
async function fetchData() {
  const url = process.env.REACT_APP_API_SERVER_URL_SERMONS;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  if (result.data && result.data.length > 0) {
    result.data.sort(function (a, b) {
      if (a.sermondate > b.sermondate) {
        return -1;
      }
      if (b.sermondate > a.sermondate) {
        return 1;
      }
      return 0;
    });
  }

  return result.data;
}

// get mainsetting
async function fetchMainData() {
  const url = process.env.REACT_APP_API_SERVER_URL_MAINSETTING;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result.data[0];
}

// Special sermon page you can watch previous sermons
function SermonPage({ setScreen }) {
  const classes = useStyles();
  const player = useRef(null);
  const [curVideo, setCurVideo] = React.useState("");
  const [expanded, setExpanded] = React.useState("");

  const initState = {
    sermons: [],
  };
  // hook to set list of sermon videos
  const [sermons, setSermons] = useState(initState.sermons);

  // fetch list of sermon videos from php server / db and set it as a state
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

  const initStateMain = {
    monthlyversetitle: "",
    monthlyversesecondtitle: "",
    monthlyverse: "",
    liveyoutubechannel: "",
    choirtitle: "",
    choirvideo: "",
    singingtitle: "",
    singingvideo: "",
    modalcontent: "",
    modalcontentheader: "",
    jubo: "",
  };

  // hook for setting information from php server / db
  const [mainsetting, setMainsetting] = useState(initStateMain);

  // initialize hook to get setting information from php server / db
  useEffect(() => {
    async function getSetting() {
      const result = await fetchMainData();
      console.log(result);
      setMainsetting(result);
    }
    getSetting();
  }, []);

  // Set current video when clicked
  const handleChange = (panel) => (event, newExpanded) => {
    if (panel.src !== curVideo) {
      player.current.video.pause();
      setCurVideo(panel.src);
      player.current.video.load();
    }
    setExpanded(newExpanded ? panel.sermondate : false);
  };

  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <Typography variant="h3" component="h3">
          SERMON
        </Typography>
        <Divider />
      </div>

      {/* Video box */}
      <div className={classes.sermonContainer}>
        {/* Sermon list box */}
        <div className={classes.videoPlaylist}>
          {sermons && sermons.length > 0
            ? sermons.map((video) => {
                return (
                  <ExpansionPanel
                    square
                    expanded={expanded === video.sermondate}
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
                      <Typography className={classes.videoDescription}>
                        {video.content && video.content !== ""
                          ? video.content
                          : video.title + "에 있었던 2부 예배 설교입니다."}
                      </Typography>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                );
              })
            : ""}
        </div>
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
      </div>
      <Footer
        phone={mainsetting.phone}
        email={mainsetting.email}
        address={mainsetting.address}
      />
    </div>
  );
}

export default SermonPage;
