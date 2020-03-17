import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Modal } from "@material-ui/core";
import MonthlyVerse from "./MonthlyVerse";
import Live from "./Live";
import Sermon from "./Sermon";
import Media from "./Media";
import News from "./News";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import VizSensor from "react-visibility-sensor";
import grey from "@material-ui/core/colors/grey";
import Spinner from "./svg/grid.svg";

const headerBackGround = "https://edmontoncc.net/media/photo/본당4-scaled.jpg";

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
    display: "flex",
    height: "100%",
    minHeight: "100vh",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    position: "relative",
    marginBottom: "40px",
    wordBreak: "keep-all"
  },
  background: {
    backgroundImage: `url(${headerBackGround})`,
    opacity: "25%",
    width: "100%",
    height: "100vh",
    position: "absolute",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundAttachment: "scroll"
    }
  },
  headerTitle1: {
    fontSize: "2rem",
    color: grey[800],
    marginLeft: "auto",
    marginRight: "auto",
    wordBreak: "keep-all",
    zIndex: 100,
    [theme.breakpoints.down("xs")]: {
      marginLeft: "30px",
      marginRight: "30px"
    }
  },
  headerTitle2: {
    fontSize: "3rem",
    color: grey[800],
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
    wordBreak: "keep-all",
    zIndex: 100,
    [theme.breakpoints.down("xs")]: {
      marginLeft: "30px",
      marginRight: "30px"
    }
  },
  LoadingModal: {
    backgroundColor: grey[100],
    textAlign: "center"
  },
  Spinner: {
    marginTop: "300px",
    outline: "none"
  }
}));

function Content({ setScreen }) {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(true);

  function handleModalClose() {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  function monthlyVerseOnChange(isVisible) {
    if (isVisible) {
      setScreen("monthlyverse");
    }
  }

  function liveOnChange(isVisible) {
    if (isVisible) {
      setScreen("live");
    }
  }

  function sermonOnChange(isVisible) {
    if (isVisible) {
      setScreen("sermon");
    }
  }

  function mediaOnChange(isVisible) {
    if (isVisible) {
      setScreen("media");
    }
  }

  function newsOnChange(isVisible) {
    if (isVisible) {
      setScreen("experience");
    }
  }

  function galleryOnChange(isVisible) {
    if (isVisible) {
      setScreen("projects");
    }
  }

  function contactOnChange(isVisible) {
    if (isVisible) {
      setScreen("contact");
    }
  }

  function headerOnChange(isVisible) {
    if (isVisible) {
      setScreen("header");
    }
  }

  return (
    <div className={classes.content}>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isLoading}
        onClose={() => {}}
        className={classes.LoadingModal}
      >
        <img
          src={Spinner}
          className={classes.Spinner}
          alt={"spinner"}
          onLoad={handleModalClose()}
        />
      </Modal>
      <VizSensor
        partialVisibility
        offset={{ top: 400, bottom: 400 }}
        onChange={headerOnChange}
      >
        <div className={classes.header}>
          <div className={classes.background}></div>
          <Typography
            variant="h4"
            component="h4"
            className={classes.headerTitle1}
          >
            Fix your thoughts on JESUS
          </Typography>
          <Typography
            variant="h3"
            component="h3"
            className={classes.headerTitle2}
          >
            예수를 깊이 생각하라
          </Typography>
        </div>
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={monthlyVerseOnChange}
      >
        <MonthlyVerse />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={liveOnChange}
      >
        <Live />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={sermonOnChange}
      >
        <Sermon />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={mediaOnChange}
      >
        <Media />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={newsOnChange}
      >
        <News />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={galleryOnChange}
      >
        <Gallery />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={contactOnChange}
      >
        <Contact />
      </VizSensor>
      <Footer />
    </div>
  );
}

export default Content;
