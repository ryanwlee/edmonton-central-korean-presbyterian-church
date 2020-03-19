import React from "react";
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
    textAlign: "center"
  },
  content: {
    marginTop: "50px",
    fontSize: "1rem"
  },
  li: {
    marginBottom: "10px",
    zIndex: 100,
    color: grey[800]
  },
  contentContainer: { position: "relative" }
}));

function News() {
  const classes = useStyles();

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
                <li className={classes.li}>
                  예배 시작 10분전에 오셔서 기도로 준비하시기 바랍니다.
                </li>
                <li className={classes.li}>
                  2019년도 헌금영수증이 현관에 준비되어 있습니다. 이름을
                  확인하시고 찾아가시기 바랍니다. 영문이름과 (주소)는 본인이
                  기재하시기 바랍니다.
                </li>
                <li className={classes.li}>
                  한글학교는 오늘부터 추후 공지가 있을 때까지 모이지 않습니다. 
                </li>
                <li className={classes.li}>
                  코로나 바이러스(COVID 19) 감염에 대한 대비:
                  <br />
                  *주일예배, 수요예배, 새벽예배만 진행합니다.
                  <br />
                  *그 외의 모든 모임 즉 찬양대, 찬양팀, 다락방, 선교회, 소그룹
                  모임, 교육관의 Gym사용 등은 교회에서 별도의 공지가 있을
                  때까지 잠정적으로 중단합니다.
                </li>
                <li className={classes.li}>
                  코로나 바이러스(COVID 19)가 성행하는 위험지역을 다녀오신
                  분들은 자가격리 (2주간-14일)를 하신 후 예배와 모임에
                  출석하시길 부탁드립니다.
                </li>
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
                <li className={classes.li}>
                  제직회: 다음 주일(22일) 2부 예배 후
                </li>
                <li className={classes.li}>
                  유아세례. 입교. 세례 안내  4월 12일(주일) 2부 예배시
                  <br />※ 신청서와 문답지는 안내석에 준비되어 있습니다. 
                </li>
                <li className={classes.li}>
                  선교위원회 주관 미니 바자회는 잠정적으로 연기합니다. 
                </li>
                <li className={classes.li}>
                  금번 에드몬톤 카이로스 코스(선교훈련)가 코로나 바이러스(COVID
                  19)로 인하여 취소 되었습니다.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default News;
