import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Link } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import 'animate.css/animate.min.css';
import { fontFamily, fontXBig, fontMiddle, fontSmall } from './Constants';

// css styles
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '300px',
        width: '70%',
        maxWidth: '1000px',
        color: grey[800],
        wordBreak: 'keep-all',
        [theme.breakpoints.down('xs')]: {
            width: 'unset',
            marginLeft: '20px',
            marginRight: '20px',
            marginBottom: '60px',
        },
    },
    header: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '300px',
        marginBottom: '50px',
        textAlign: 'center',
    },
    headerTitle: {
        fontFamily: fontFamily,
        fontSize: fontXBig,
    },
    title: {
        marginBottom: '40px',
        marginTop: '40px',
        fontFamily: fontFamily,
        fontSize: fontMiddle,
    },
    desc: {
        fontSize: '1rem',
        marginBottomsa: '30px',
        textAlign: 'center',
        marginBottom: '60px',
        whiteSpace: 'pre-wrap',
    },
    detail: {
        marginBottom: '20px',
        fontFamily: fontFamily,
        fontSize: fontSmall,
    },
    link: {
        color: grey[800],
        textDecoration: 'underline',
        fontFamily: fontFamily,
        fontSize: fontSmall,
    },
}));

function YouthLive(props) {
    const classes = useStyles();
    const channelId = 'UCG__EjoIVvHpwrE8lJCO--w';

    return (
        <div className={classes.root} id={'live'}>
            <div className={classes.header}>
                <Typography
                    variant="h3"
                    component="h3"
                    className={classes.headerTitle}
                >
                    유아유치부 / 아동부 / YOUTH 예배
                </Typography>
                <Divider />
            </div>
            {/* If live youtube channel name is available, render iframe */}
            {props.youtubeChannel ? (
                <iframe
                    src={`https://www.youtube.com/embed/live_stream?channel=${channelId}&
          enablecastapi=1&enablejsapi=1`}
                    style={{
                        border: 0,
                        width: '100%',
                        height: 'auto',
                        minHeight: '500px',
                    }}
                    enablejsapi="1"
                    enablecastapi="1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Live Sermon"
                ></iframe>
            ) : (
                ''
            )}

            {/* Description of live broadcast */}
            <div className={classes.desc}>
                <Typography
                    variant="h5"
                    display="block"
                    gutterBottom
                    className={classes.title}
                >
                    Live 방송 일정
                </Typography>
                <Typography
                    variant="body1"
                    display="block"
                    gutterBottom
                    className={classes.detail}
                >
                    아동부 예배: 주일 오전 9시 30분
                    <br />
                    영유아유치부 예배: 주일 오전 10시 15분
                    <br />
                    YOUTH 예배: 주일 오전 11시 10분
                </Typography>

                {/* Link to youtube */}
                {props.youtubeChannel ? (
                    <Link
                        href={`https://www.youtube.com/channel/${channelId}/live`}
                    >
                        <Typography
                            variant="body1"
                            display="block"
                            gutterBottom
                            className={classes.link}
                        >
                            유튜브에서 보기
                        </Typography>
                    </Link>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
}

export default YouthLive;
