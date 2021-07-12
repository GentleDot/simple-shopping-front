import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    CssBaseline,
    FormControlLabel,
    Link,
    TextField
} from '@material-ui/core';
import logo from '../../static/images/gentledot.png';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Copyright from '../common/Copyright';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
        marginRight: '0.5em',
        display: 'inline-block',
    },
    loginTitle: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    loginRequestArea: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    loginForm: {
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    submitButton: {
        marginLeft: theme.spacing(6),
        float: 'right',
    }
}));

export default function LoginBox() {
    const classes = useStyles();

    return (
        <Container component={'main'} maxWidth={'xs'}>
            <div className={classes.loginRequestArea}>
                <Typography component={'h1'} variant={'h5'} align={'center'}>
                    로그인
                </Typography>
                <div className={classes.loginTitle}>
                    <Typography component={'h2'} variant="h6">
                        <Avatar alt="Gentledot" className={classes.large} src={logo}/>
                        Simple-Shopping
                    </Typography>
                </div>
                <form className={classes.loginForm} >
                    <TextField
                        variant='standard'
                        name='id'
                        label='ID'
                        autoComplete='sample@email.com'
                        margin='normal'
                        fullWidth
                        autoFocus
                        required
                    />
                    <TextField
                        variant='standard'
                        name='password'
                        label='PASSWORD'
                        margin='normal'
                        fullWidth
                        required
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                value='rememberFlag'
                                color='primary'
                            />
                        }
                        label='자동 로그인'
                    />
                    <Button
                        className={classes.submitButton}
                        type='submit'
                        variant='contained'
                        color='primary'
                    >
                        로그인
                    </Button>
                </form>
            </div>
            <Box mt={8} textAlign={'right'}>
                <Copyright/>
            </Box>
        </Container>
    );
}
