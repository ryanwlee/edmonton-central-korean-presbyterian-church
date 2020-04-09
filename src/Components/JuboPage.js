import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import Footer from "./Footer";

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
  juboContainer: {
    width: "80%",
    maxWidth: "1400px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    marginBottom: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
    },
  },
  jubo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
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
    jubo: "",
  };

  // hook for setting information from php server / db
  const [mainsetting, setMainsetting] = useState(initState);

  // initialize hook to get setting information from php server / db
  useEffect(() => {
    async function getSetting() {
      const result = await fetchData();
      console.log(result);
      setMainsetting(result);
    }
    getSetting();
  }, []);

  return (
    <div className={classes.content}>
      <div className={classes.header}>
        <Typography variant="h3" component="h3">
          주보
        </Typography>
        <Divider />
      </div>
      {mainsetting.jubo === "" ? (
        ""
      ) : (
        <div className={classes.juboContainer}>
          <img src={mainsetting.jubo1} className={classes.jubo} />
          <img src={mainsetting.jubo2} className={classes.jubo} />
        </div>
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
