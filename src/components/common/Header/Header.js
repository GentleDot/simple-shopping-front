import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {Avatar} from '@material-ui/core';
import logo from '../../../static/images/gentledot.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    small: {
        width : '2em',
        height : '2em',
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: '0.5em',
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className='header'>
            <AppBar position='relative'>
                <Toolbar>
                    <Avatar alt='Gentledot' className={classes.large} src={logo} />
                    <Typography variant='h6' className={classes.title}>
                        Simple-Shopping
                    </Typography>
                    <Button color='inherit'>로그인</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
