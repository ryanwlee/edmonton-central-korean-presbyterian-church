import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider, Link } from "@material-ui/core";
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
  live: {
    width: "100%",
    height: "500px"
  },
  header: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "200px",
    marginBottom: "50px",
    textAlign: "center"
  },
  desc: {
    fontSize: "1rem",
    marginTop: "30px",
    textAlign: "center",
    marginBottom: "60px"
  }
}));

function Live(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} id={"live"}>
      <ScrollAnimation animateIn="fadeIn" offset={50}>
        <div className={classes.header}>
          <Typography variant="h3" component="h3">
            LIVE
          </Typography>
          <Divider />
        </div>
        {props.youtubeChannel ? (
          <iframe
            src={`https://www.youtube.com/embed/live_stream?channel=${props.youtubeChannel}&
          enablecastapi=1&enablejsapi=1`}
            style={{
              border: 0,
              width: "100%",
              height: "auto",
              minHeight: "500px"
            }}
            enablejsapi="1"
            enablecastapi="1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          ""
        )}
        <div className={classes.desc}>
          <Typography variant="h5" display="block" gutterBottom>
            Live 방송 일정
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            주일 예배: 오전 11시
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            수요 예배: 저녁 7시 30분
          </Typography>
          <Typography variant="body1" display="block" gutterBottom>
            청년부 예배: 토요일 저녁 6시 30분
          </Typography>
          {props.youtubeChannel ? (
            <Link
              href={`https://www.youtube.com/channel/${props.youtubeChannel}/live`}
            >
              <Typography variant="body1" display="block" gutterBottom>
                유튜브에서 보기
              </Typography>
            </Link>
          ) : (
            ""
          )}
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Live;
