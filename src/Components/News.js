import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import "animate.css/animate.min.css";
import { sortResult } from "./helper";
import { Link } from "react-router-dom";
import { fontFamily, fontXBig, fontBig, fontSmall } from "./Constants";

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
    width: "300px",
    marginBottom: "50px",
    textAlign: "center",
  },
  headerTitle: {
    fontFamily: fontFamily,
    fontSize: fontXBig,
  },
  title: {
    textAlign: "center",
    whiteSpace: "pre-wrap",
    fontFamily: fontFamily,
    fontSize: fontBig,
  },
  content: {
    marginTop: "50px",
    whiteSpace: "pre-wrap",
    fontFamily: fontFamily,
    fontSize: fontSmall,
  },
  li: {
    marginBottom: "10px",
    zIndex: 100,
    color: grey[800],
    whiteSpace: "pre-wrap",
  },
  contentContainer: { position: "relative", whiteSpace: "pre-wrap" },
  link: {
    color: grey[800],
    textAlign: "center",
    marginTop: "25px",
    textDecoration: "underline",
    fontFamily: fontFamily,
    fontSize: fontSmall,
  },
}));

async function fetchData() {
  const newsUrl = process.env.REACT_APP_API_SERVER_URL_NEWS;
  const eventsUrl = process.env.REACT_APP_API_SERVER_URL_EVENTS;

  // const response = await fetch("https://edmontoncc.net/db/news.json");
  // const result = await response.json();
  // console.log(result);

  const newsResponse = await fetch(newsUrl);
  const eventResponse = await fetch(eventsUrl);
  const newsResult = await newsResponse.json();
  const eventsResult = await eventResponse.json();

  console.log(newsResult, eventsResult);
  const sortedNewsResult = sortResult(newsResult);
  const sortedEventsResult = sortResult(eventsResult);

  const final = {
    news: sortedNewsResult.data,
    events: sortedEventsResult.data,
  };

  return final;
}

// News and event section
function News() {
  const classes = useStyles();
  const initState = {
    news: [],
    event: [],
  };
  const [news, setNews] = useState(initState.news);
  const [event, setEvent] = useState(initState.event);

  useEffect(() => {
    async function getNews() {
      const result = await fetchData();
      setNews(result.news);
      setEvent(result.events);
    }
    getNews();
  }, []);

  return (
    <div className={classes.root} id={"news"}>
      <div className={classes.header}>
        <Typography variant="h3" component="h3" className={classes.headerTitle}>
          NEWS
        </Typography>
        <Divider />
      </div>
      {/* Use grid to render two boxes for large screen, one box for small screen */}
      <Grid container spacing={3}>
        {/* Left box */}
        <Grid item sm={12} md={6} className={classes.contentContainer}>
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
                ? news.map((n) => (
                    <li
                      className={classes.li}
                      key={n.listorder}
                    >{`${n.content}`}</li>
                  ))
                : ""}
            </ul>
          </Typography>
        </Grid>
        {/* Right box */}
        <Grid item sm={12} md={6} className={classes.contentContainer}>
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
                ? event.map((e) => (
                    <li className={classes.li} key={e.listorder}>
                      {`${e.content}`}
                    </li>
                  ))
                : ""}
            </ul>
          </Typography>
        </Grid>
      </Grid>
      <Link to={"/*/news"}>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          className={classes.link}
        >
          이번주 주보 보기...
        </Typography>
      </Link>
    </div>
  );
}

export default News;
