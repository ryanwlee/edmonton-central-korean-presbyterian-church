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

const drawerWidth = 240;

// css styles
const useStyles = makeStyles((theme) => ({
    menu: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: drawerWidth,
        backgroundColor: 'white',
        fontWeight: 600,
    },
    link: {
        margin: theme.spacing(1),
        color: grey[600],
        textDecoration: 'none',
        fontFamily: fontFamily,
        fontSize: fontSmall,
    },
    selectedLink: {
        margin: theme.spacing(1),
        color: grey[800],
        textDecoration: 'none',
        fontFamily: fontFamily,
        fontSize: fontSmall,
    },
}));

// drawer
function Menu(current) {
    const classes = useStyles();

    const onClick = () => {
        current.toggleDrawer('left', false)({});
    };

    return (
        <div className={classes.menu}>
            <Link
                to={'/#header'}
                className={classes.link}
                onClick={() => onClick()}
            >
                HOME
            </Link>
            <Link
                to={'/sermoninfo'}
                className={classes.link}
                onClick={() => onClick()}
            >
                예배안내
            </Link>
            <Link
                to={'/#live'}
                className={classes.link}
                onClick={() => onClick()}
            >
                LIVE
            </Link>
            <Link
                to={'/sermon'}
                className={classes.link}
                onClick={() => onClick()}
            >
                SERMON
            </Link>
            <Link
                to={'/#media'}
                className={classes.link}
                onClick={() => onClick()}
            >
                MEDIA
            </Link>
            <Link
                to={'/news'}
                className={classes.link}
                onClick={() => onClick()}
            >
                주보
            </Link>
            <Link
                to={'/#gallery'}
                className={classes.link}
                onClick={() => onClick()}
            >
                GALLERY
            </Link>
            <Link
                to={'/donation'}
                className={classes.link}
                onClick={() => onClick()}
            >
                헌금
            </Link>
            <Link
                to={'/baptism'}
                className={classes.link}
                onClick={() => onClick()}
            >
                세례
            </Link>
            <Link
                to={'/#contact'}
                className={classes.link}
                onClick={() => onClick()}
            >
                오시는 길
            </Link>
            {/* <ExtLink
                href={
                    'https://www.google.com/maps/dir//%EC%97%90%EB%93%9C%EB%A8%BC%ED%8A%BC+%EC%A4%91%EC%95%99%EC%9E%A5%EB%A1%9C%EA%B5%90%ED%9A%8C/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x53a01e985c81374d:0xf0cee281dde253b7?sa=X&ved=2ahUKEwj-mrqekZvoAhXWi54KHfhUCM4Q9RcwFXoECBAQEA'
                }
                className={classes.link}
            >
                <MapIcon />
            </ExtLink> */}
            <ExtLink href={'tel:1-780-437-6229'} className={classes.link}>
                <CallIcon />
            </ExtLink>
            <ExtLink
                href={'mailto:eckpc1988@gmail.com'}
                className={classes.link}
            >
                <MailOutlineIcon />
            </ExtLink>
        </div>
    );
}

export default Menu;
