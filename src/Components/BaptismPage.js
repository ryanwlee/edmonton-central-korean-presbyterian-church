import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Divider, Link } from '@material-ui/core';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import grey from '@material-ui/core/colors/grey';
import { fontFamily, fontXBig, fontSmall } from './Constants';

import Footer from './Footer';

// css styles
const useStyles = makeStyles((theme) => ({
    content: {
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
    link: {
        color: grey[800],
        textDecoration: 'underline',
        fontFamily: fontFamily,
        fontSize: fontSmall,
    },
    baptismContent: {
        marginBottom: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
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

function BaptismPage() {
    const initState = {
        monthlyversetitle: '',
        monthlyversesecondtitle: '',
        monthlyverse: '',
        liveyoutubechannel: '',
        choirtitle: '',
        choirvideo: '',
        singingtitle: '',
        singingvideo: '',
        modalcontent: '',
        modalcontentheader: '',
    };

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

    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.header}>
                <Typography
                    variant="h3"
                    component="h3"
                    className={classes.headerTitle}
                >
                    세례
                </Typography>
                <Divider />
            </div>

            <div className={classes.baptismContent}>
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfQWCQd0LwXfI96Cq3SxIfA79AM43ZXTOAEbgBX05G-cUtktw/viewform?usp=pp_url"
                    className={classes.link}
                >
                    <Typography
                        variant="body1"
                        display="block"
                        gutterBottom
                        className={classes.link}
                    >
                        세례(입교) 신청서
                    </Typography>
                </Link>
                <Link
                    href="https://edmontoncc.net/media/baptism/세례 문답서.pdf"
                    className={classes.link}
                >
                    <Typography
                        variant="body1"
                        display="block"
                        gutterBottom
                        className={classes.link}
                    >
                        세례 문답지
                    </Typography>
                </Link>
                <Link
                    href="https://edmontoncc.net/media/baptism/세례문답지(영문).pdf"
                    className={classes.link}
                >
                    <Typography
                        variant="body1"
                        display="block"
                        gutterBottom
                        className={classes.link}
                    >
                        세례 문답지(영문)
                    </Typography>
                </Link>
            </div>

            <Footer
                phone={mainsetting.phone}
                email={mainsetting.email}
                address={mainsetting.address}
            />
        </div>
    );
}

export default BaptismPage;
