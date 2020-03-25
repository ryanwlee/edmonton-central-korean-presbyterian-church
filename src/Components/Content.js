import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
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
import red from "@material-ui/core/colors/red";
import Spinner from "./svg/grid.svg";

const headerBackGround = "https://edmontoncc.net/media/photo/본당4-scaled.jpg";

const useStyles = makeStyles(theme => ({
  content: {
    display: "block",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    width: "100%",
    wordBreak: "keep-all",
    marginTop: "30px",
    textAlign: "left",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  },
  highlight: {
    color: red[700]
  },
  header: {
    display: "flex",
    height: "100vh",
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
    opacity: "40%",
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
    textAlign: "center",
    zIndex: 100
  },
  Spinner: {
    marginTop: "300px",
    outline: "none"
  },
  popModal: {
    backgroundColor: grey[10],
    textAlign: "center"
  },
  paper: {
    zIndex: 1,
    width: "60%",
    height: "600px",
    overflow: "scroll",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(8, 7, 8),
    outline: "none",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "40px",
      height: "400px",
      padding: theme.spacing(5, 4, 5)
    }
  },
  indent: {
    marginLeft: "10px"
  },
  click: {
    cursor: "pointer",
    fontSize: "1.2rem",
    marginTop: "40px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  }
}));

async function fetchData() {
  const url = process.env.REACT_APP_API_SERVER_URL_MAINSETTING;
  const response = await fetch(url);
  const result = await response.json();

  console.log(result);
  return result.data[0];
}

function Content({ setScreen }) {
  const classes = useStyles();
  const initState = {
    monthlyversetitle: "",
    monthlyversesecondtitle: "",
    monthlyverse: "",
    liveyoutubechannel: "",
    choirtitle: "",
    choirvideo: "",
    singingtitle: "",
    singingvideo: ""
  };
  const [mainsetting, setMainsetting] = useState(initState);

  useEffect(() => {
    async function getSetting() {
      const result = await fetchData();
      setMainsetting(result);
    }
    getSetting();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const [cookies, setCookie] = useCookies(["edmontoncc"]);
  if (!cookies.edmontoncc) {
    setCookie("edmontoncc", "yes");
  }

  const [pop, setPop] = useState(true);

  function handleCookieOff() {
    setCookie("edmontoncc", "no");
  }

  function setPopHandler() {
    setCookie("edmontoncc", "yes");
    setPop(false);
  }

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
      {cookies.edmontoncc === "yes" && (
        <Modal
          aria-labelledby="announcement"
          aria-describedby="announcement-description"
          open={cookies.edmontoncc ? cookies.edmontoncc === "yes" && pop : pop}
          onClose={setPopHandler}
          className={classes.popModal}
        >
          <div className={classes.paper}>
            <Typography
              variant="h4"
              component="h4"
              className={classes.headerTitle1}
            >
              Online 예배에 대한 안내
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              주님의 평강이 온 교우들의 가정에 넘치시길 소망합니다. 현재 코로나
              바이러스 (COVID 19) 확산을 막기 위한 연방정부와 주정부의 노력이
              진행되고 있습니다. 이 상황에 발맞춰 중앙교회 비상대책
              위원회(담임목사를 비롯한 시무장로와 은퇴장로, 총11명)는 성도들의
              건강과 안전을 위해 오늘(
              <span className={classes.highlight}>3월 18일-수</span>)부터 온라인
              예배를 드리기로 결정하였 습니다.
              <span className={classes.highlight}>
                교회당에서 드려지는 모든 예배는 한시적으로 4월 5일 주일까지
                중단합니다.
              </span>
              추이를 지켜보면서 대처하도록 하겠습니다. 이점을 널리 양지해 주시고
              안내에 따라 서 로 배려하면서 어려운 시기를 기도로 승리하시길
              바랍니다.
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              1. 주일예배(주일 오전 11시)
              <br />
              <p className={classes.indent}>
                1) 주일 예배는 오전 11시에 온라인 예배로 1회 진행됩니다.
                <br />
                2) 예배 순서는 주일 예배와 동일하며 설교는 아동부, Youth, 어른
                순으로 이어집니다.
                <br />
                3) 주일에 본당에서는 최소 예배위원만 참석하여 진행됩니다.
                <br />
                4) 주일예배는 컴퓨터나 휴대폰으로 참여할 수 있습니다. <br />
                *웹 주소: www.edmontoncc.net 접속, LIVE를 클릭하시면 됩니다.
                <br />
                5) 주일 예배는 가족이 주일예배를 드리는 것과 다름없이 깨끗한
                옷을 입고 정숙한 마음으로 참여합니다.
                <br />
                6) 예배 중에는 이곳, 저곳 이동하거나 다른 일을 하면서 예배하지
                않습니다.
                <br />
                7) 헌금은 소지하고 있는 헌금 봉투에 담아 헌금 순서에 따라
                하나님께 봉헌합니다. 드려진 헌금은 부모가 정성껏 보관하다가 다시
                교회당에 모여 예배하게 될 때 헌금 해 주시면 감사하겠습니다.
                <br />
                8) 온 가족이 한 자리에서 하나님을 섬길 수 있는 복된 시간입니다.
                이 시간을 값지게 사용하시기 바랍니다.
              </p>
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              2. 수요예배(저녁 7시 30분)
              <br />
              <p className={classes.indent}>
                1) 수요 예배는 저녁 7시 30분에 온라인 예배로 진행됩니다.
                <br />
                2) 수요 예배는 최소 예배위원만 참석하여 진행됩니다.
                <br />
                3) 예배는 컴퓨터나 휴대폰으로 참여할 수 있습니다. <br />
                *웹 주소: www.edmontoncc.net 접속, LIVE를 클릭하시면 됩니다.
              </p>
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              3. 청년부 예배(토요일 저녁 6시 30분)
              <br />
              <p className={classes.indent}>
                1) 토요일 저녁 6시 30분에 온라인 예배로 진행됩니다.
                <br />
                2) 본당에는 예배 시 섬기는 최소 인원만 참석합니다.
                <br />
                3) 예배는 컴퓨터나 휴대폰으로 참여할 수 있습니다. <br />
                *웹 주소: www.edmontoncc.net 접속, LIVE를 클릭하시면 됩니다.
              </p>
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              4. 새벽기도회
              <br />
              <p className={classes.indent}>
                새벽 기도회는 4월 4일 토요일까지 잠정적으로 중단합니다. 새벽에
                집에서 개별적으로 기도의 시간을 가지시기 바랍니다.
              </p>
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              이 기간 동안 교역자들은 정상 근무합니다(화~금요일. 오전 9시
              30분~오후 4시). 교회당 방문이나, 상담, 심방이 필요하신 분들은
              언제든지 연락주시기 바랍니다.
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.content}
            >
              사랑하는 성도 여러분! <br />
              <br />
              지금은 함께 기도하며 어려움을 극복해야 할 때입니다. 우리의 삶에 왜
              이런 어려움이 닥쳤는지 지금은 다 알지 못해도 시간이 조금 흐른 후에
              하나님의 뜻이 밝히 드러나리라 믿습니다. 여러분의 삶에 제약이 많고
              힘든 부분이 있을 것입니다. 이때 주의 얼굴을 구하고 주의 얼굴빛에
              거하시기를 바랍니다. 우리 주 하나님은 우리의 피난처시요
              힘이십니다. 환난 중에 만날 큰 도움이십니다. <br />
              <br />
              <b>
                사 43:2, 3 “2네가 물 가운데로 지날 때에 내가 너와 함께 할 것이라
                강을 건널 때에 물이 너를 침몰하지 못할 것이며 네가 불 가운데로
                지날 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니
                3대저 나는 여호와 네 하나님이요 이스라엘의 거룩한이요 네
                구원자임이라”
              </b>
              <br />
              <br />
              <b>믿음 안에서 승리하시기 바랍니다.</b>
              <br />
              <br />
              <b>2020년 3월 18일 중앙교회 비상대책위원회</b>
            </Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              className={classes.click}
              onClick={handleCookieOff}
            >
              다시 보지 않기
            </Typography>
          </div>
        </Modal>
      )}
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
        <MonthlyVerse
          monthlyversetitle={mainsetting.monthlyversetitle}
          monthlyversesecondtitle={mainsetting.monthlyversesecondtitle}
          monthlyverse={mainsetting.monthlyverse}
        />
      </VizSensor>
      <VizSensor
        partialVisibility
        offset={{ top: 460, bottom: 300 }}
        onChange={liveOnChange}
      >
        <Live youtubeChannel={mainsetting.liveyoutubechannel} />
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
        <Media
          choirtitle={mainsetting.choirtitle}
          choirvideo={mainsetting.choirvideo}
          singingtitle={mainsetting.singingtitle}
          singingvideo={mainsetting.singingvideo}
        />
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
