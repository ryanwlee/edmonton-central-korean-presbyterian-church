import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import Footer from './Footer';
import { fontFamily, fontXBig } from './Constants';

// css styles
const useStyles = makeStyles((theme) => ({
    body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        width: '100%',
        wordBreak: 'keep-all',
    },
    header: {
        marginTop: '130px',
        marginBottom: '40px',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px',
        textAlign: 'center',
    },
    headerTitle: {
        fontFamily: fontFamily,
        fontSize: fontXBig,
        marginTop: '20px',
    },
    content: {
        width: '60%',
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '100px',
        [theme.breakpoints.down('xs')]: {
            width: 'unset',
            marginLeft: '20px',
            marginRight: '20px',
            marginBottom: '60px',
        },
    },
    contentHeader: {
        marginBottom: '18px',
    },
    contentBody: {
        marginBottom: '13px',
    },
    paragraph: {
        marginBottom: '30px',
    },
}));

// get mainsetting
async function fetchMainData() {
    const url = process.env.REACT_APP_API_SERVER_URL_MAINSETTING;
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    return result.data[0];
}

function SermonInfoPage() {
    const classes = useStyles();

    const initStateMain = {
        phone: '',
        email: '',
        address: '',
    };

    // hook for setting information from php server / db
    const [mainsetting, setMainsetting] = useState(initStateMain);

    // initialize hook to get setting information from php server / db
    useEffect(() => {
        async function getSetting() {
            const result = await fetchMainData();
            setMainsetting(result);
        }
        getSetting();
    }, []);

    return (
        <div className={classes.body}>
            <div className={classes.header}>
                <Typography
                    variant="h3"
                    component="h3"
                    className={classes.headerTitle}
                >
                    예배 안내
                </Typography>
                <Divider />
            </div>
            <div className={classes.content}>
                <div className={classes.paragraph}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.contentHeader}
                    >
                        1. 코로나 바이러스(COVID 19) 확산을 막기 위한 노력이
                        지속되고 있습니다. 대그룹 모임에 대한 주정부의 변화가
                        있을 때까지 온라인 예배를 지속합니다.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        ● 온라인 주일예배: 오전 11시, 아동부: 오전 10시, EM,
                        YOUTH: 오후 1시
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        ● 온라인 청년부 예배: 토요일 저녁 6시 30분
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        ● 온라인 수요예배: 저녁 7시 30분
                    </Typography>
                </div>
                <div className={classes.paragraph}>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        * 온라인 예배와 기도회는 컴퓨터나 휴대폰으로 참여할 수
                        있습니다.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        * 웹 주소: www.edmontoncc.net 접속, LIVE를 클릭하시면
                        됩니다.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        * 변동사항에 대해서는 각 다락방을 통해 알려드리도록
                        하겠습니다.
                    </Typography>
                </div>
                <div className={classes.paragraph}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.contentHeader}
                    >
                        2. 주일예배는 온 가족이 한 자리에 모여서 진실되게
                        하나님을 예배합니다.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        1) 헌금은 소지하고 있는 헌금 봉투에 담아 정성껏 하나님께
                        봉헌합니다.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        2) 드려진 헌금은 배부된 ‘헌금안내’에 따라 드릴 수
                        있습니다.
                    </Typography>
                </div>
                <div className={classes.paragraph}>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        ● 이메일 헌금(Inter e-Transfer)을 드릴 수 있습니다.
                        이메일 헌금 송금 안내는 홈페이지 우측 상단에 있는
                        ‘헌금’란을 참고해주세요.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        ● 개인 수표를 발행하여 우편으로 보낼 수 있습니다.
                    </Typography>
                    <Typography
                        variant="body1"
                        gutterBottom
                        className={classes.contentBody}
                    >
                        ● 위의 방법이 어려우신 분들은 교회당에서 예배가 드려질
                        때 모아둔 헌금을 드릴 수 있습니다.
                    </Typography>
                </div>
                <div className={classes.paragraph}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.contentHeader}
                    >
                        3. 교회 사무실은 화요일~금요일까지 열려
                        있습니다(오전9:30~오후4시). 교역자의 도움이 필요한 경우
                        언제든지 연락주시기 바랍니다.
                    </Typography>
                </div>
                <div className={classes.paragraph}>
                    <Typography
                        variant="h5"
                        gutterBottom
                        className={classes.contentHeader}
                    >
                        4. 어려운 시기를 잘 극복하고 이길 수 있도록 깨어 기도에
                        힘쓰시기 바랍니다.
                    </Typography>
                </div>
            </div>
            <Footer
                phone={mainsetting.phone}
                email={mainsetting.email}
                address={mainsetting.address}
            />
        </div>
    );
}

export default SermonInfoPage;
