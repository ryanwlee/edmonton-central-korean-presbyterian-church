import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Link } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import 'animate.css/animate.min.css';
import { fontFamily, fontXBig, fontSmall } from './Constants';

// css styles
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
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
    link: {
        color: grey[800],
        textDecoration: 'underline',
        fontFamily: fontFamily,
        fontSize: fontSmall,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

function Baptism(props) {
    const classes = useStyles();

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
        <div className={classes.root} id={'contact'}>
            {/* Header for contact section */}
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
    );
}

export default Baptism;
