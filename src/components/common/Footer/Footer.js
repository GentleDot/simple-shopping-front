import React from 'react';
import {BottomNavigation, BottomNavigationAction, makeStyles, Typography} from "@material-ui/core";
import {HomeOutlined, MenuBookOutlined, PeopleAltOutlined} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    madeBy: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
        textAlign: 'right',
        fontSize: '6px',
    }
}));

const Footer = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
            >
                <BottomNavigationAction label='홈으로' icon={<HomeOutlined/>}/>
                <BottomNavigationAction label='회원정보' icon={<PeopleAltOutlined/>}/>
                <BottomNavigationAction label='상품정보' icon={<MenuBookOutlined/>}/>
            </BottomNavigation>
            <div>
                <Typography className={classes.madeBy} variant='subtitle2'> created by gentledot </Typography>
            </div>
        </>
    );
};

export default Footer;
