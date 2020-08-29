import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Divider } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { fontFamily, fontXBig, fontSmall, fontBig, fontMiddle } from "./Constants";
import ExtLink from "@material-ui/core/Link";

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
        width: "300px",
        textAlign: "center",
    },
    headerTitle: {
        fontFamily: fontFamily,
        fontSize: fontXBig,
        marginTop: "20px",
    },
    donationContainer: {
        width: "90%",
        maxWidth: "1400px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        marginBottom: "150px",
        [theme.breakpoints.down("sm")]: {
            width: "100%",
        },
    },
    secondaryHeaderTitle: {
        fontFamily: fontFamily,
        fontSize: fontMiddle,
        marginTop: "30px",
    },
    bodyContent: {
        fontFamily: fontFamily,
        fontSize: fontSmall,
        marginLeft: "30px",
        lineHeight: "1.5em",
    },
    link: {
        margin: theme.spacing(1),
        color: blue[600],
        textDecoration: "none",
        fontFamily: fontFamily,
        fontSize: fontSmall,
    },
    redAccent: {
        color: red[600],
        textDecoration: "underline",
    },
    blueAccent: {
        color: blue[600],
    },
    redBox: {
        marginTop: "20px",
        color: red[600],
        fontFamily: fontFamily,
        fontSize: fontSmall,
        lineHeight: "1.5em",
    },
    marginTop: {
        marginTop: "20px",
    },
    doubleIndent: {
        marginTop: "20px",
        marginLeft: "30px",
        lineHeight: "1.5em",
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

// Donation page
function DonationPage() {
    const classes = useStyles();
    const initState = {};

    // hook for setting information from php server / db
    const [mainsetting, setMainsetting] = useState(initState);

    // initialize hook to get setting information from php server / db
    useEffect(() => {
        async function getData() {
            const result = await fetchData();
            setMainsetting(result);
        }
        getData();
    }, []);

    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <Typography variant="h3" component="h3" className={classes.headerTitle}>
                    헌금 안내
                </Typography>
                <Divider />
            </div>
            <div className={classes.donationContainer}>
                <Typography variant="h4" component="h4" className={classes.secondaryHeaderTitle}>
                    <b>Ⅰ. 이메일 헌금(Interac e-Transfer)</b>
                </Typography>
                <ol className={classes.bodyContent}>
                    <li className={classes.marginTop}>
                        <b>Recipient Name(받는 단체 이름): ECKPC</b>
                    </li>
                    <li className={classes.marginTop}>
                        <b>
                            Recipient Email Address(받는 단체의 이메일):{" "}
                            <ExtLink href={"mailto:eckpc1988jj@gmail.com"} className={classes.link}>
                                eckpc1988jj@gmail.com
                            </ExtLink>
                        </b>
                    </li>
                    <li className={classes.marginTop}>
                        <b>Amount(헌금 총액)</b>
                    </li>
                    <li className={classes.marginTop}>
                        메시지란(message)에 헌금하시는 분의 영문이름, 헌금 번호, 헌금 종류와 액수를 기록해 주세요.
                        <div className={classes.doubleIndent}>
                            <b>
                                모든 메시지를 영문으로 기록해야 됩니다. 한글로 기록할 경우 e-transfer가 되지 않습니다.
                            </b>
                            <br></br>
                            <div className={classes.redAccent}>
                                <b>구별된 헌금 영문은 헌금 봉투에 적혀 있는 영문을 기록하시면 됩니다.</b>
                            </div>
                        </div>
                        <div className={classes.doubleIndent}>
                            <b>
                                예) 홍길동(헌금봉투 번호 100)의 3월 29일 헌금<br></br>십일조 $100, 주일헌금 $20,
                                감사헌금 $30, 선교헌금 $20을 다음과 같이 입력하세요.
                            </b>
                        </div>
                        <div className={classes.doubleIndent}>
                            <b>
                                Hong Kil Dong, #100, March 29 Offering<br></br>Tithing $100, Weekly $20, Thanksgiving
                                $30, Mission fund: $20
                            </b>
                        </div>
                        <div className={classes.doubleIndent}>
                            <b>위와 같이 메시지란에 기록하시면 헌금을 구별하는 재정부에 큰 도움이 됩니다.</b>
                        </div>
                    </li>
                    <li className={classes.marginTop}>
                        만약 헌금번호가 없다면 본인의 주소와 전화번호를 기입해 주시기 바랍니다.
                    </li>
                    <li className={classes.marginTop}>
                        <span className={classes.blueAccent}>
                            비밀번호(security information)는 질문과 답을 기입하지 않아도 자동 입금이 됩니다.
                        </span>
                        <br></br>
                        혹시 비밀번호를 설정하신 분들은 교회 이메일:{" "}
                        <ExtLink href={"mailto:eckpc1988jj@gmail.com"} className={classes.link}>
                            eckpc1988jj@gmail.com
                        </ExtLink>
                        로 알려주시기 바랍니다
                    </li>
                </ol>
                <div className={classes.redBox}>
                    * 주의 사항: 에드몬톤 중앙교회는 어떤 상황에서도 개별적으로 온라인 헌금을 요구하거나 강요하지
                    않습니다. 만약 이러한 요청을 개별적으로 이메일이나 전화로 받으신 경우, 중앙교회를 사칭한
                    사기(fraud)이오니 절대 응하지 마시기 바랍니다. 이런 경우 교역자들에게 문의하시기 바랍니다.{" "}
                </div>
                <Typography
                    variant="h4"
                    component="h4"
                    className={classes.secondaryHeaderTitle}
                    style={{ marginTop: "70px" }}
                >
                    <b>Ⅱ. 개인 수표를 우편으로 보내는 헌금</b>
                </Typography>
                <ol className={classes.bodyContent}>
                    <li className={classes.marginTop}>개인 수표를 기록하여 우편으로 보내시면 됩니다.</li>
                    <li className={classes.marginTop}>
                        <b>Pay to: ECKPC</b>로 기록하시면 됩니다.
                    </li>
                    <li className={classes.marginTop}>
                        아래에 기록된 교회 주소로 보내주십시오.
                        <div className={classes.doubleIndent}>
                            교회주소: <b>2551 Ellwood Dr, SW, Edmonton, AB T6X 0P7</b>
                        </div>
                    </li>
                    <li className={classes.marginTop}>
                        위 Ⅰ, Ⅱ와 같은 방법으로 헌금하기 어려운 분은 주중에 사무실에 방문하여 교역자에게 전달 하시거나
                        교회당에서 다시 예배가 드려질 때 모아둔 헌금을 드리면 됩니다.
                    </li>
                </ol>
            </div>
            <Footer phone={mainsetting.phone} email={mainsetting.email} address={mainsetting.address} />
        </div>
    );
}

export default DonationPage;
