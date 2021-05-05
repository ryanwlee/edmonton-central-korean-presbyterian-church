import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import grey from '@material-ui/core/colors/grey';
import { fontFamily, fontBig, fontMiddle, fontSmall } from './Constants';
import 'animate.css/animate.min.css';

// css styles
const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
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
    card: { padding: '80px 40px 80px 40px' },
    title: { fontFamily: fontFamily, fontSize: fontBig },
    verse: { marginTop: '40px', fontFamily: fontFamily, fontSize: fontMiddle },
    from: { marginTop: '40px', fontFamily: fontFamily, fontSize: fontSmall },
}));

// Monthly verse section
function MonthlyVerse(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} id={'monthlyverse'}>
            <Paper className={classes.card} elevation={3}>
                <Typography
                    variant="h4"
                    component="h4"
                    className={classes.title}
                >
                    {props.monthlyversetitle}
                </Typography>
                <Typography
                    variant="h5"
                    component="h5"
                    className={classes.verse}
                >
                    {props.monthlyverse}
                </Typography>
                <Typography
                    variant="h5"
                    component="h5"
                    className={classes.from}
                >
                    {props.monthlyversesecondtitle}
                </Typography>
            </Paper>
        </div>
    );
}

export default MonthlyVerse;
