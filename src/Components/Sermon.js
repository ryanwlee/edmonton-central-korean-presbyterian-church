import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Divider } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import { Player } from 'video-react';
import './Video.css';
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
        textAlign: 'center',
    },
    headerTitle: {
        fontFamily: fontFamily,
        fontSize: fontXBig,
    },
    title: {
        marginTop: '50px',
        textAlign: 'center',
        fontFamily: fontFamily,
        fontSize: fontMiddle,
    },
    content: {
        marginTop: '50px',
        whiteSpace: 'pre-wrap',
        fontFamily: fontFamily,
        fontSize: fontSmall,
    },
    playerContainer: {
        width: '100%',
    },
    videoPlayer: {
        marginTop: '50px',
        height: '500px',
    },
    link: {
        color: grey[800],
        textDecoration: 'underline',
        fontFamily: fontFamily,
        fontSize: fontSmall,
        textAlign: 'center',
        marginTop: '25px',
    },
}));

async function fetchData() {
    const url = process.env.REACT_APP_API_SERVER_URL_SERMON;
    const response = await fetch(url);
    const result = await response.json();

    console.log(result);
    return result.data[0];
}

// Sermon section in main page
function Sermon() {
    const classes = useStyles();
    const initState = {
        src: '',
        title: '',
        secondTitle: '',
        desc: '',
    };
    const [sermon, setSermon] = useState(initState);

    useEffect(() => {
        async function getSermon() {
            const sermon = await fetchData();
            setSermon(sermon);
        }
        getSermon();
    }, []);

    return (
        <div className={classes.root} id={'sermon'}>
            <div className={classes.header}>
                <Typography
                    variant="h3"
                    component="h3"
                    className={classes.headerTitle}
                >
                    SERMON
                </Typography>
                <Divider />
            </div>
            {/* Use grid to render two boxes for large screen, one box for small screen */}
            <Grid container spacing={3}>
                {/* Left box */}
                <Grid item sm={12} md={6} className={classes.playerContainer}>
                    <div className={classes.player}>
                        {sermon && sermon.src !== '' ? (
                            <Player
                                fluid={false}
                                className={classes.videoPlayer}
                                width={'100%'}
                            >
                                <source src={sermon.src} />
                            </Player>
                        ) : (
                            ''
                        )}
                    </div>
                </Grid>
                {/* Right box */}
                {sermon ? (
                    <Grid item xs={12} sm={12} md={6}>
                        <Typography
                            variant="h4"
                            component="h4"
                            className={classes.title}
                        >
                            {sermon.title}
                        </Typography>
                        <Typography
                            variant="h5"
                            component="h5"
                            className={classes.title}
                        >
                            {sermon.secondtitle}
                        </Typography>
                        <Typography
                            variant="caption"
                            display="block"
                            gutterBottom
                            className={classes.content}
                        >
                            {sermon.description}
                        </Typography>
                        <Link to={'/sermon'}>
                            <Typography
                                variant="caption"
                                display="block"
                                gutterBottom
                                className={classes.link}
                            >
                                더 많은 설교 영상을 원하신다면...
                            </Typography>
                        </Link>
                    </Grid>
                ) : (
                    ''
                )}
            </Grid>
        </div>
    );
}

export default Sermon;
