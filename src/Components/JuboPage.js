import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography, Divider, ExpansionPanel } from "@material-ui/core";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Img from "react-image";
import GetAppIcon from "@material-ui/icons/GetApp";
import grey from "@material-ui/core/colors/grey";
import { fontFamily, fontXBig, fontSmall } from "./Constants";

import Footer from "./Footer";

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
    width: "300px",
    textAlign: "center",
  },
  headerTitle: {
    fontFamily: fontFamily,
    fontSize: fontXBig,
  },
  juboContainer: {
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
  jubo: {},
  juboList: {
    minWidth: "300px",
    maxWidth: "300px",
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
  juboTitle: {
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: fontFamily,
    fontSize: fontSmall,
    whiteSpace: "pre-wrap",
  },
  selectedJuboTitle: {
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: fontFamily,
    fontSize: fontSmall,
    whiteSpace: "pre-wrap",
    fontWeight: 600,
  },
  juboImg: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  downIcon: {
    marginLeft: "15px",
    color: grey[500],
  },
}));

// get mainsetting
async function fetchData() {
  const url = process.env.REACT_APP_API_SERVER_URL_MAINSETTING;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result.data[0];
}

// get jubo
async function fetchJuboData() {
  const url = process.env.REACT_APP_API_SERVER_URL_JUBO;
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  if (result.data && result.data.length > 0) {
    result.data.sort(function (a, b) {
      if (a.jubodate > b.jubodate) {
        return -1;
      }
      if (b.jubodate > a.jubodate) {
        return 1;
      }
      return 0;
    });
  }
  return result.data;
}

// Jubo page rendering pdf file
function JuboPage() {
  const classes = useStyles();
  const initState = {
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
  };
  const juboState = [];

  // hook for setting information from php server / db
  const [mainsetting, setMainsetting] = useState(initState);
  const [jubo, setJubo] = useState(juboState);
  const [currentJubo, setCurrentJubo] = useState(0);

  // initialize hook to get setting information from php server / db
  useEffect(() => {
    async function getData() {
      const result = await fetchData();
      const juboResult = await fetchJuboData();
      console.log(result, juboResult);
      setMainsetting(result);
      setJubo(juboResult);
      setCurrentJubo(0);
    }
    getData();
  }, []);

  const handleJubo = (index) => {
    setCurrentJubo(index);
  };

  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <Typography variant="h3" component="h3" className={classes.headerTitle}>
          주보
        </Typography>
        <Divider />
      </div>
      {jubo && jubo.length > 0 ? (
        <div className={classes.juboContainer}>
          <div className={classes.juboList}>
            {jubo.map((j, index) => {
              console.log(index);
              return (
                <ExpansionPanel square expanded={false} key={j.jobodate}>
                  <ExpansionPanelSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                    onClick={() => handleJubo(index)}
                  >
                    <Typography
                      className={
                        index === currentJubo
                          ? classes.selectedJuboTitle
                          : classes.juboTitle
                      }
                    >
                      {j.jubotitle}
                    </Typography>
                    <a href={j.jubopdf}>
                      <GetAppIcon className={classes.downIcon} />
                    </a>
                  </ExpansionPanelSummary>
                </ExpansionPanel>
              );
            })}
          </div>
          <div className={classes.jubo}>
            <Img src={jubo[currentJubo].page1} className={classes.juboImg} />
            <Img src={jubo[currentJubo].page2} className={classes.juboImg} />
          </div>
        </div>
      ) : (
        ""
      )}
      <Footer
        phone={mainsetting.phone}
        email={mainsetting.email}
        address={mainsetting.address}
      />
    </div>
  );
}

export default JuboPage;
