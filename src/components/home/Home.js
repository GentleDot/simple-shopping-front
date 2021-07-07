import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid, makeStyles,
    Typography
} from "@material-ui/core";
import logo from '../../static/images/gentledot_logo.png'

const useStyles = makeStyles({
    halfGrid: {
        margin: "12% 0",
    },
    card: {
        borderRadius: 8,
        maxHeight: 600,
    },
    cardMedia: {
        width: '100%',
        height: '280px',
        minHeight: '200px',
        objectFit: 'contain',
        backgroundColor:'#D9E7F1',
    }
});

export default function Home() {
    const classes = useStyles();

    return (
        <Container maxWidth={'lg'} style={{backgroundColor: '#cfe8fc', height: '100vh'}}>
            <Grid container spacing={4}>
                <Grid className={classes.halfGrid} item lg={6}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardMedia}
                                component="div"
                                alt="about project"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    이 프로젝트에 대하여
                                </Typography>
                                <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                                    이 프로젝트는 simple-shopping Back-end 프로젝트의 화면을 react를 활용해 구현해보기 위해 제작되었습니다.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size={"small"} color={"primary"}>
                                제작과정 알아보기
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid className={classes.halfGrid} item lg={6}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.cardMedia}
                                component="img"
                                alt="about Gentledot"
                                src={logo}
                                title="gentledot_LOGO"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    개발자 소개
                                </Typography>
                                <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                                    개발자의 Github 페이지에 방문하시면 저에 대한 소개를 확인할 수 있습니다.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size={"small"} color={"primary"}>
                                더 알아보기
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}