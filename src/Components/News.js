import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

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
    marginBottom: "50px",
    textAlign: "center"
  },
  title: {
    marginTop: "50px",
    textAlign: "center",
    whiteSpace: "pre-wrap"
  },
  content: {
    marginTop: "50px",
    fontSize: "1rem",
    whiteSpace: "pre-wrap"
  },
  li: {
    marginBottom: "10px",
    zIndex: 100,
    color: grey[800],
    whiteSpace: "pre-wrap"
  },
  contentContainer: { position: "relative", whiteSpace: "pre-wrap" }
}));

async function fetchData() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const response = await fetch("https://edmontoncc.net/db/news.json");
  const result = await response.json();
  console.log(result);
  return result;
}

function News() {
  const classes = useStyles();
  const initState = {
    news: [],
    event: []
  };
  const [news, setNews] = useState(initState.news);
  const [event, setEvent] = useState(initState.event);

  useEffect(() => {
    async function getNews() {
      const result = await fetchData();
      setNews(result.news);
      setEvent(result.event);
    }
    getNews();
  }, []);

  return (
    <div className={classes.root} id={"news"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <div className={classes.header}>
          <Typography variant="h3" component="h3">
            NEWS
          </Typography>
          <Divider />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} className={classes.contentContainer}>
            <Typography variant="h4" component="h4" className={classes.title}>
              ECKPC NEWS
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              <ul>
                {news && news.length > 0
                  ? news.map(n => <li className={classes.li}>{`${n}`}</li>)
                  : ""}
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.contentContainer}>
            <Typography variant="h4" component="h4" className={classes.title}>
              모임 및 행사
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              <ul>
                {event && event.length > 0
                  ? event.map(e => <li className={classes.li}>{e}</li>)
                  : ""}
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default News;