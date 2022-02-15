import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Modal, Button, Link } from '@material-ui/core';
import MonthlyVerse from './MonthlyVerse';
import Live from './Live';
import Sermon from './Sermon';
import Media from './Media';
import News from './News';
import Gallery from './Gallery';
import Contact from './Contact';
import Baptism from './Baptism';
import Footer from './Footer';
import ModalContent from './ModalContent';
import VizSensor from 'react-visibility-sensor';
import grey from '@material-ui/core/colors/grey';
import Spinner from './svg/grid.svg';
import { fontFamily, fontXBig, fontBig } from './Constants';
import YouthLive from './YouthLive';

// main header background src address
const headerBackGround = 'https://edmontoncc.net/media/photo/본당4-scaled.jpg';

// css styles
const useStyles = makeStyles((theme) => ({
    content: {
        display: 'block',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        width: '100%',
        wordBreak: 'keep-all',
        marginTop: '30px',
        textAlign: 'left',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
    },
    header: {
        display: 'flex',
        height: '100vh',
        minHeight: '100vh',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        position: 'relative',
        marginBottom: '40px',
        wordBreak: 'keep-all',
    },
    background: {
        backgroundImage: `url(${headerBackGround})`,
        filter: 'brightness(70%)',
        width: '100%',
        height: '100vh',
        position: 'absolute',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('sm')]: {
            backgroundAttachment: 'scroll',
        },
    },
    headerTitle1: {
        color: grey[100],
        marginLeft: 'auto',
        marginRight: 'auto',
        wordBreak: 'keep-all',
        zIndex: 100,
        fontFamily: fontFamily,
        fontSize: fontBig,
        fontWeight: 600,
        width: 'fit-content',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    headerTitle2: {
        color: grey[100],
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        wordBreak: 'keep-all',
        zIndex: 100,
        fontFamily: fontFamily,
        fontSize: fontXBig,
        fontWeight: 600,
        width: 'fit-content',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    LoadingModal: {
        backgroundColor: grey[100],
        textAlign: 'center',
        zIndex: 100,
    },
    Spinner: {
        marginTop: '300px',
        outline: 'none',
    },
    popModal: {
        textAlign: 'center',
    },
    link: {
        color: grey[800],
        textDecoration: 'none',
        fontFamily: fontFamily,
        margin: '40px auto 0 auto',
        width: 'fit-content',
    },
}));

// get all required information from php server / db
async function fetchData() {
    // get server url from env
    const url = process.env.REACT_APP_API_SERVER_URL_MAINSETTING;
    // make server query and convert to object
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    return result.data[0];
}

function Content({ setScreen }) {
    const classes = useStyles();
    const initState = {
        monthlyversetitle: '',
        monthlyversesecondtitle: '',
        monthlyverse: '',
        liveyoutubechannel: '',
        liveinfo: '',
        choirtitle: '',
        choirvideo: '',
        singingtitle: '',
        singingvideo: '',
        modal: 0,
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

    // hook to find if loading modal should be rendered or not
    const [isLoading, setIsLoading] = useState(false);

    // hook for set cookies
    const [cookies, setCookie] = useCookies(['edmontoncc']);
    if (!cookies.edmontoncc) {
        setCookie('edmontoncc', 'yes');
    }

    // hook to decide rendering pop up or not
    const [pop, setPop] = useState(true);

    // helper function for set cookie to "not desplay pop up"
    function handleCookieOff() {
        setCookie('edmontoncc', 'no');
    }

    // helper function for set cookie to "desplay pop up"
    function setPopHandler() {
        setCookie('edmontoncc', 'yes');
        setPop(false);
    }

    // helper function to set loading modal to close in 1.5 sec
    function handleModalClose() {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    }

    // helper functions to know where the user's viewpoint
    function monthlyVerseOnChange(isVisible) {
        if (isVisible) {
            setScreen('monthlyverse');
        }
    }
    function liveOnChange(isVisible) {
        if (isVisible) {
            setScreen('live');
        }
    }
    function sermonOnChange(isVisible) {
        if (isVisible) {
            setScreen('sermon');
        }
    }
    function mediaOnChange(isVisible) {
        if (isVisible) {
            setScreen('media');
        }
    }
    function newsOnChange(isVisible) {
        if (isVisible) {
            setScreen('news');
        }
    }
    function galleryOnChange(isVisible) {
        if (isVisible) {
            setScreen('gallery');
        }
    }
    function contactOnChange(isVisible) {
        if (isVisible) {
            setScreen('contact');
        }
    }
    function headerOnChange(isVisible) {
        if (isVisible) {
            setScreen('header');
        }
    }

    // Color Button
    const ColorButton = withStyles((theme) => ({
        root: {
            color: grey[800],
            width: '300px',
            fontSize: '1.5em',
            fontWeight: '600',
            backgroundColor: grey[100],
            '&:hover': {
                backgroundColor: grey[100],
            },
        },
    }))(Button);

    return (
        <div className={classes.content}>
            {/* Loading modal */}
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
                    alt={'spinner'}
                    onLoad={handleModalClose()}
                />
            </Modal>
            {/* If cookie is yes, render pop up */}
            {/* {mainsetting.modal === 'yes' && cookies.edmontoncc === 'yes' && (
                <Modal
                    aria-labelledby="announcement"
                    aria-describedby="announcement-description"
                    open={
                        cookies.edmontoncc
                            ? cookies.edmontoncc === 'yes' && pop
                            : pop
                    }
                    onClose={setPopHandler}
                    className={classes.popModal}
                >
                    <ModalContent
                        handleCookieOff={handleCookieOff}
                        content={mainsetting.modalcontent}
                        title={mainsetting.modalcontentheader}
                        setPopHandler={setPopHandler}
                    />
                </Modal>
            )} */}
            {/* Main page header */}
            <VizSensor
                partialVisibility
                offset={{ top: 400, bottom: 400 }}
                onChange={headerOnChange}
            >
                <div className={classes.header} id={'header'}>
                    <div className={classes.background}></div>
                    <Typography
                        variant="h4"
                        component="h4"
                        className={classes.headerTitle1}
                    >
                        Experience Jesus Deeply
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h3"
                        className={classes.headerTitle2}
                    >
                        예수를 깊이 경험하라
                    </Typography>
                    <Typography
                        variant="h5"
                        component="h5"
                        className={classes.headerTitle2}
                        style={{ fontSize: '2rem' }}
                    >
                        1부, 2부 예배에 인원 제한 없이 참석이 가능합니다
                    </Typography>
                    {/* <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScutSrE4ahQy4O8Ytuqkwz0M5NQo768tSmvgnh8lRmzvJmRJA/viewform?usp=pp_url"
                        className={classes.link}
                    >
                        <ColorButton>주일 9시 예배 참석 신청서</ColorButton>
                    </Link>

                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScPUxfUU1jj_JOmnAfD64t_i6pUwsmO-qOB-hP8AI_FU982pg/viewform?usp=pp_url"
                        className={classes.link}
                    >
                        <ColorButton>주일 11시 예배 참석 신청서</ColorButton>
                    </Link> */}
                </div>
            </VizSensor>

            {/* Monthly verse section */}
            <VizSensor
                partialVisibility
                offset={{ top: 460, bottom: 300 }}
                onChange={monthlyVerseOnChange}
            >
                <MonthlyVerse
                    monthlyversetitle={mainsetting.monthlyversetitle}
                    monthlyversesecondtitle={
                        mainsetting.monthlyversesecondtitle
                    }
                    monthlyverse={mainsetting.monthlyverse}
                />
            </VizSensor>

            {/* Live youtube section */}
            <VizSensor
                partialVisibility
                offset={{ top: 460, bottom: 300 }}
                onChange={liveOnChange}
            >
                <Live
                    youtubeChannel={mainsetting.liveyoutubechannel}
                    liveinfo={mainsetting.liveinfo}
                />
            </VizSensor>

            {/* YouthLive youtube section */}
            <VizSensor
                partialVisibility
                offset={{ top: 460, bottom: 300 }}
                onChange={liveOnChange}
            >
                <YouthLive
                    youtubeChannel={mainsetting.liveyoutubechannel}
                    liveinfo={mainsetting.liveinfo}
                />
            </VizSensor>

            {/* Sermon section */}
            <VizSensor
                partialVisibility
                offset={{ top: 460, bottom: 300 }}
                onChange={sermonOnChange}
            >
                <Sermon />
            </VizSensor>

            {/* Media section */}
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

            {/* Gallery section */}
            <VizSensor
                partialVisibility
                offset={{ top: 460, bottom: 300 }}
                onChange={galleryOnChange}
            >
                <Gallery />
            </VizSensor>

            {/* Contact section */}
            <VizSensor
                partialVisibility
                offset={{ top: 460, bottom: 300 }}
                onChange={contactOnChange}
            >
                <Contact
                    phone={mainsetting.phone}
                    email={mainsetting.email}
                    address={mainsetting.address}
                />
            </VizSensor>

            {/* Footer section */}
            <Footer
                phone={mainsetting.phone}
                email={mainsetting.email}
                address={mainsetting.address}
            />
        </div>
    );
}

export default Content;
