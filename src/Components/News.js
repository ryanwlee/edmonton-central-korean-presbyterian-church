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
              <ol>
                <li className={classes.li}>
                  예배 시작 10분전에 오셔서 기도로 준비하시기 바랍니다.
                </li>
                <li className={classes.li}>
                  오늘부터 서머타임(Daylight Saving Time)이 시작되었습니다.
                </li>
                <li className={classes.li}>
                  2019년도 헌금영수증이 현관에 준비되어 있습니다. 이름을
                  확인하시고 찾아가시기 바랍니다. 영문이름과 (주소)는 본인이
                  기재하시기 바랍니다.
                </li>
                <li className={classes.li}>
                  식사후 교육관 정리: 제3남선교회에서 섬겨주시길 바랍니다.
                </li>
                <li className={classes.li}>3월 다락방 본문: 요 14:1-6절</li>
                <li className={classes.li}>
                  코로나 바이러스(COVID 19)가 성행하는 위험지역을 다녀오신
                  분들은 자가격리 (2주간-14일)를 하신 후 예배와 모임에
                  출석하시길 부탁드립니다.
                </li>
              </ol>
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
              <ol>
                <li className={classes.li}>
                  중고등부 수련회 (Youth Retreat)
                  <br />
                  일시: 3월 24일(화) 오전10시 – 25일(수) 오후 2시
                  <br />
                  장소: 교육관
                  <br />
                  *Youth Retreat 관계로 24일 Gym 사용을 금해주시길 바랍니다.
                </li>
                <li className={classes.li}>
                  유아세례. 입교. 세례 안내 <br />
                  4월 12일(주일) 2부 예배 시 <br />※ 신청서와 문답지는 안내석에
                  준비되어 있습니다.
                </li>
                <li className={classes.li}>
                  일시: 4월 18일 토요일, 오전 11시 ~ 오후 3시
                  <br />
                  장소: 교육관 1층
                  <br />
                  목적: 해외/국내 선교지원을 위한 물품/기금 마련
                  <br />
                  내용: 물품 및 음식 판매 <br />
                  *협조요청: 물품 donation (옷, 스포츠 용품, 아이들 장난감 등등)
                </li>
                <li className={classes.li}>
                  에드몬톤 카이로스 코스(선교훈련) <br />
                  안내 일시: 3월 20일(금)~22일(주일) / 27일(금)~29일(주일)
                  <br />
                  장소: 안디옥교회당 <br />
                  자세한 내용은 신청서를 참고하시기 바랍니다.
                </li>
              </ol>
            </Typography>
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default News;
