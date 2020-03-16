import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Divider } from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import YoutubePlayer from "react-youtube-player";

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
  youtube: {
    marginTop: "50px",
    height: "300px"
  }
}));

function Sermon() {
  const classes = useStyles();

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
            <Typography variant="h4" component="h4" className={classes.title}>
              2020년 3월 15일 주일 2부예배
            </Typography>
            <div className={classes.youtube}>
              <YoutubePlayer
                videoId="Us3gIGwuuRk"
                playbackState="unstarted"
                configuration={{
                  showinfo: 0,
                  controls: 0
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" component="h4" className={classes.title}>
              요한과 예수 그리스도의 세례
            </Typography>
            <Typography variant="h5" component="h5" className={classes.title}>
              마태복음 3장 13-17절
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              13 이 때에 예수께서 갈릴리로부터 요단 강에 이르러 요한에게 세례를
              받으려 하시니
              <br />
              14 요한이 말려 이르되 내가 당신에게서 세례를 받아야 할 터인데
              당신이 내게로 오시나이까
              <br />
              15 예수께서 대답하여 이르시되 이제 허락하라 우리가 이와 같이 하여
              모든 의를 이루는 것이 합당하니라 하시니 이에  요한이 허락하는지라
              <br />
              16 예수께서 세례를 받으시고 곧 물에서 올라오실새 하늘이 열리고
              하나님의 성령이 비둘기 같이 내려 자기 위에 임하심을 보시더니
              <br />
              17 하늘로부터 소리가 있어 말씀하시되 이는 내 사랑하는 아들이요 내
              기뻐하는 자라 하시니라
            </Typography>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default Sermon;
