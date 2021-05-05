import React from 'react';
// import { Link } from "react-router-dom";
import grey from '@material-ui/core/colors/grey';
import { makeStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';
import CallIcon from '@material-ui/icons/Call';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ExtLink from '@material-ui/core/Link';
import { HashLink as Link } from 'react-router-hash-link';
import { fontFamily, fontSmall } from './Constants';

// css styles
const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    link: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(2),
        color: grey[700],
        textDecoration: 'none',
        fontFamily: fontFamily,
        fontSize: fontSmall,
        fontWeight: 600,
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(3),
        },
    },
    iconlink: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: theme.spacing(1),
        color: grey[700],
        textDecoration: 'none',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
}));

// Appbar menu
function Appmenu(current) {
    const classes = useStyles();
    console.log(current.current);

    return (
        <div className={classes.menu}>
            <Link to={'/#header'} className={classes.link}>
                HOME
            </Link>
            <Link to={'/sermoninfo'} className={classes.link}>
                예배안내
            </Link>
            <Link to={'/#live'} className={classes.link}>
                LIVE
            </Link>
            <Link to={'/sermon'} className={classes.link}>
                SERMON
            </Link>
            <Link to={'/news'} className={classes.link}>
                주보
            </Link>
            <Link to={'/donation'} className={classes.link}>
                헌금
            </Link>
            <Link to={'/#contact'} className={classes.link}>
                오시는 길
            </Link>
            <ExtLink href={'tel:1-780-437-6229'} className={classes.iconlink}>
                <CallIcon />
            </ExtLink>
            <ExtLink
                href={'mailto:eckpc1988@gmail.com'}
                className={classes.iconlink}
            >
                <MailOutlineIcon />
            </ExtLink>
        </div>
    );
}

export default Appmenu;
