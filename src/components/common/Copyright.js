import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';
import React from 'react';


function Copyright() {
    return (
        <Typography variant={'caption'} color={'textSecondary'} align={'center'}>
            {'created By '}
            <Link color={'inherit'} href={'https://bit.ly/gentledot'}>
                gentledot
            </Link>
            {'.'}
        </Typography>
    );
}

export default Copyright;