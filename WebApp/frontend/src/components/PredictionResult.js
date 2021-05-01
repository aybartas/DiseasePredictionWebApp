import {Button, Card, CardActions, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import React, {Component} from "react";

const useStyle = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1)
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const PredictionResult = ({show}) => {

    const classes = useStyle();

    console.log(show);
    console.log('sdffsd');
    console.log({show})

    if (show) {
        return (<Grid container justify="center" spacing={1}>
            <Grid item md={6}>
                <Card className={classes.padding}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            rttyrtyrtyrtrtytr rtyy rt
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br/>
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>

                </Card>
            </Grid>
        </Grid>);
    } else {
        return null;
    }

}

export default PredictionResult